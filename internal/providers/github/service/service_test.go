//
// SPDX-FileCopyrightText: Copyright 2024 The Minder Authors
// SPDX-License-Identifier: Apache-2.0

package service

import (
	"bytes"
	"context"
	crand "crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"database/sql"
	"encoding/json"
	"encoding/pem"
	"errors"
	"fmt"
	"net/http"
	"net/http/httptest"
	"net/url"
	"os"
	"strconv"
	"testing"
	"time"

	"github.com/google/go-github/v63/github"
	"github.com/google/uuid"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"
	"golang.org/x/oauth2"

	"github.com/mindersec/minder/internal/controlplane/metrics"
	mockcrypto "github.com/mindersec/minder/internal/crypto/mock"
	"github.com/mindersec/minder/internal/db"
	"github.com/mindersec/minder/internal/db/embedded"
	"github.com/mindersec/minder/internal/providers"
	"github.com/mindersec/minder/internal/providers/credentials"
	"github.com/mindersec/minder/internal/providers/github/clients"
	mockclients "github.com/mindersec/minder/internal/providers/github/clients/mock"
	mockgh "github.com/mindersec/minder/internal/providers/github/mock"
	"github.com/mindersec/minder/internal/providers/telemetry"
	"github.com/mindersec/minder/internal/util/rand"
	"github.com/mindersec/minder/pkg/config/server"
)

type testMocks struct {
	svcMock     *mockgh.MockClientService
	cryptoMocks *mockcrypto.MockEngine
	fakeStore   db.Store
	cancelFunc  embedded.CancelFunc
}

func testNewGitHubProviderService(
	t *testing.T,
	mockCtrl *gomock.Controller,
	config *server.ProviderConfig,
	projectFactory ProjectFactory,
	ghClientFactory clients.GitHubClientFactory,
) (*ghProviderService, *testMocks) {
	t.Helper()

	fakeStore, cancelFunc, err := embedded.GetFakeStore()
	if cancelFunc != nil {
		t.Cleanup(cancelFunc)
	}
	mocks := &testMocks{
		svcMock:     mockgh.NewMockClientService(mockCtrl),
		fakeStore:   fakeStore,
		cancelFunc:  cancelFunc,
		cryptoMocks: mockcrypto.NewMockEngine(mockCtrl),
	}
	require.NoError(t, err)

	testServer := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
	}))
	defer testServer.Close()
	packageListingClient := github.NewClient(http.DefaultClient)
	testServerUrl, err := url.Parse(testServer.URL + "/")
	require.NoError(t, err)
	packageListingClient.BaseURL = testServerUrl

	if ghClientFactory == nil {
		ghClientFactory = clients.NewGitHubClientFactory(telemetry.NewNoopMetrics())
	}

	psi := NewGithubProviderService(
		mocks.fakeStore,
		mocks.cryptoMocks,
		metrics.NewNoopMetrics(),
		config,
		projectFactory,
		ghClientFactory,
	)

	ps, ok := psi.(*ghProviderService)
	require.True(t, ok)
	ps.ghClientService = mocks.svcMock
	return ps, mocks
}

func testCreatePrivateKeyFile(t *testing.T) *os.File {
	t.Helper()

	tmpFile, err := os.CreateTemp("", "pvtkey")
	require.NoError(t, err)

	pvtKey, err := rsa.GenerateKey(crand.Reader, 2048)
	require.NoError(t, err)

	err = pem.Encode(tmpFile, &pem.Block{
		Type:  "RSA PRIVATE KEY",
		Bytes: x509.MarshalPKCS1PrivateKey(pvtKey),
	})
	require.NoError(t, err)

	return tmpFile
}

func TestProviderService_VerifyProviderTokenIdentity(t *testing.T) {
	t.Parallel()

	const (
		accountID   = 456
		accessToken = "my-access-token"
	)

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	ghCredential := credentials.NewGitHubTokenCredential(accessToken)

	delegate := mockgh.NewMockDelegate(ctrl)
	clientFactory := mockclients.NewMockGitHubClientFactory(ctrl)

	clientFactory.EXPECT().
		BuildOAuthClient(gomock.Any(), ghCredential, gomock.Any()).
		Return(nil, delegate, nil).AnyTimes()

	delegate.EXPECT().
		GetUserId(gomock.Any()).
		Return(int64(accountID), nil).AnyTimes()

	cfg := &server.ProviderConfig{}

	provSvc, _ := testNewGitHubProviderService(t, ctrl, cfg, nil, clientFactory)

	err := provSvc.VerifyProviderTokenIdentity(context.Background(), "456", accessToken)
	require.NoError(t, err)

	err = provSvc.VerifyProviderTokenIdentity(context.Background(), "123", accessToken)
	require.ErrorIs(t, err, ErrInvalidTokenIdentity)
}

func TestProviderService_CreateGitHubOAuthProviderWithInvalidConfig(t *testing.T) {
	t.Parallel()

	const (
		installationID = 123
		accountLogin   = "test-user"
		accountID      = 456
		stateNonce     = "test-githubapp-nonce"
	)

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pvtKeyFile := testCreatePrivateKeyFile(t)
	defer os.Remove(pvtKeyFile.Name())
	cfg := &server.ProviderConfig{
		GitHubApp: &server.GitHubAppConfig{
			PrivateKey: pvtKeyFile.Name(),
		},
	}

	clientFactory := mockclients.NewMockGitHubClientFactory(ctrl)

	provSvc, mocks := testNewGitHubProviderService(t, ctrl, cfg, nil, clientFactory)
	dbproj, err := mocks.fakeStore.CreateProject(context.Background(),
		db.CreateProjectParams{
			Name:     "test",
			Metadata: []byte(`{}`),
		})
	require.NoError(t, err)

	mocks.svcMock.EXPECT().
		GetInstallation(gomock.Any(), int64(installationID), gomock.Any()).
		Return(&github.Installation{
			Account: &github.User{
				Login: github.String(accountLogin),
				ID:    github.Int64(accountID),
			},
		}, nil, nil)

	dbProv, err := provSvc.CreateGitHubAppProvider(
		context.Background(), oauth2.Token{},
		db.GetProjectIDBySessionStateRow{
			ProjectID: dbproj.ID,
			RemoteUser: sql.NullString{
				Valid:  true,
				String: strconv.Itoa(accountID),
			},
			ProviderConfig: []byte(`{ "auto_registration": { "entities": { "blah": {"enabled": true }}}, "github-app": {}}`),
		},
		installationID,
		stateNonce)
	require.Error(t, err)
	require.ErrorAs(t, err, &providers.ErrProviderInvalidConfig{})
	require.Nil(t, dbProv)
}

func TestProviderService_CreateGitHubAppProvider(t *testing.T) {
	t.Parallel()

	const (
		installationID = 123
		accountLogin   = "test-user"
		accountID      = 456
		stateNonce     = "test-githubapp-nonce"
	)

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pvtKeyFile := testCreatePrivateKeyFile(t)
	defer os.Remove(pvtKeyFile.Name())
	cfg := &server.ProviderConfig{
		GitHubApp: &server.GitHubAppConfig{
			PrivateKey: pvtKeyFile.Name(),
		},
	}

	delegate := mockgh.NewMockDelegate(ctrl)
	delegate.EXPECT().
		GetUserId(gomock.Any()).
		Return(int64(accountID), nil)
	clientFactory := mockclients.NewMockGitHubClientFactory(ctrl)
	clientFactory.EXPECT().
		BuildAppClient(gomock.Any(), gomock.Any(), gomock.Any(), gomock.Any(), gomock.Any()).
		Return(nil, delegate, nil)

	provSvc, mocks := testNewGitHubProviderService(t, ctrl, cfg, nil, clientFactory)
	dbproj, err := mocks.fakeStore.CreateProject(context.Background(),
		db.CreateProjectParams{
			Name:     "test",
			Metadata: []byte(`{}`),
		})
	require.NoError(t, err)

	mocks.svcMock.EXPECT().
		GetInstallation(gomock.Any(), int64(installationID), gomock.Any()).
		Return(&github.Installation{
			Account: &github.User{
				Login: github.String(accountLogin),
				ID:    github.Int64(accountID),
			},
		}, nil, nil)

	dbProv, err := provSvc.CreateGitHubAppProvider(
		context.Background(), oauth2.Token{},
		db.GetProjectIDBySessionStateRow{
			ProjectID:      dbproj.ID,
			ProviderConfig: []byte(`{}`), // FIXME: should we store a default empty config on store, even on the DB layer?
			RemoteUser: sql.NullString{
				Valid:  true,
				String: strconv.Itoa(accountID),
			},
		},
		installationID,
		stateNonce)
	require.NoError(t, err)
	require.NotNil(t, dbProv)

	require.Equal(t, dbProv.ProjectID, dbproj.ID)
	require.Equal(t, dbProv.AuthFlows, clients.AppAuthorizationFlows)
	require.Equal(t, dbProv.Implements, clients.AppImplements)
	require.Equal(t, dbProv.Class, db.ProviderClassGithubApp)
	require.Contains(t, dbProv.Name, db.ProviderClassGithubApp)
	require.Contains(t, dbProv.Name, accountLogin)

	dbInstall, err := mocks.fakeStore.GetInstallationIDByProviderID(context.Background(),
		uuid.NullUUID{UUID: dbProv.ID, Valid: true},
	)
	require.NoError(t, err)
	require.Equal(t, dbInstall.AppInstallationID, int64(installationID))
	require.Equal(t, dbInstall.OrganizationID, int64(accountID))
	require.Equal(t, dbInstall.EnrollmentNonce, sql.NullString{Valid: true, String: stateNonce})

}

func TestProviderService_CreateGitHubAppWithNewProject(t *testing.T) {
	t.Parallel()

	const (
		installationID = 1234
		accountLogin   = "existing-user"
		accountID      = 9876
	)
	newProject := uuid.New()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pvtKeyFile := testCreatePrivateKeyFile(t)
	defer os.Remove(pvtKeyFile.Name())
	cfg := &server.ProviderConfig{
		GitHubApp: &server.GitHubAppConfig{
			PrivateKey: pvtKeyFile.Name(),
		},
	}
	factory := func(_ context.Context, qtx db.ExtendQuerier, name string, _ int64) (*db.Project, error) {
		project, err := qtx.CreateProject(context.Background(), db.CreateProjectParams{
			Name:     name,
			Metadata: []byte(`{}`),
		})
		if err != nil {
			t.Fatalf("Failed to create project: %v", err)
			return nil, err
		}
		newProject = project.ID
		return &project, nil
	}

	provSvc, mocks := testNewGitHubProviderService(t, ctrl, cfg, factory, nil)

	mocks.svcMock.EXPECT().
		GetInstallation(gomock.Any(), int64(installationID), gomock.Any()).
		Return(&github.Installation{
			Account: &github.User{
				Login: github.String(accountLogin),
				ID:    github.Int64(accountID),
			},
		}, nil, nil)

	project, err := provSvc.CreateGitHubAppWithoutInvitation(
		context.Background(), mocks.fakeStore, accountID, installationID)
	require.NoError(t, err)
	require.NotNil(t, project)

	require.Equal(t, newProject, project.ID)

	provider, err := mocks.fakeStore.GetProviderByName(context.Background(), db.GetProviderByNameParams{
		Name:     "github-app-existing-user",
		Projects: []uuid.UUID{project.ID},
	})
	require.NoError(t, err)

	newProviderInstall, err := mocks.fakeStore.GetInstallationIDByProviderID(
		context.Background(), uuid.NullUUID{UUID: provider.ID, Valid: true})
	require.NoError(t, err)
	require.NotEqual(t, uuid.NullUUID{}, newProviderInstall.ProviderID)
	require.Equal(t, int64(installationID), newProviderInstall.AppInstallationID)
	require.Equal(t, int64(accountID), newProviderInstall.OrganizationID)
	require.Equal(t, sql.NullString{}, newProviderInstall.EnrollingUserID)
}

func TestProviderService_CreateUnclaimedGitHubAppInstallation(t *testing.T) {
	t.Parallel()

	const (
		installationID = 1234
		accountLogin   = "test-user-unclaimed"
		accountID      = 4567
	)

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pvtKeyFile := testCreatePrivateKeyFile(t)
	defer os.Remove(pvtKeyFile.Name())
	cfg := &server.ProviderConfig{
		GitHubApp: &server.GitHubAppConfig{
			PrivateKey: pvtKeyFile.Name(),
		},
	}

	factory := func(context.Context, db.ExtendQuerier, string, int64) (*db.Project, error) {
		return nil, errors.New("error getting user for GitHub ID: 404 not found")
	}

	provSvc, mocks := testNewGitHubProviderService(t, ctrl, cfg, factory, nil)

	mocks.svcMock.EXPECT().
		GetInstallation(gomock.Any(), int64(installationID), gomock.Any()).
		Return(&github.Installation{
			Account: &github.User{
				Login: github.String(accountLogin),
				ID:    github.Int64(accountID),
			},
		}, nil, nil)

	project, err := provSvc.CreateGitHubAppWithoutInvitation(
		context.Background(), mocks.fakeStore, accountID, installationID)
	require.NoError(t, err)
	require.Nil(t, project)

	installs, err := mocks.fakeStore.GetUnclaimedInstallationsByUser(
		context.Background(), sql.NullString{String: strconv.FormatInt(accountID, 10), Valid: true})

	require.NoError(t, err)
	require.Len(t, installs, 1)
	dbUnclaimed := installs[0]
	require.Equal(t, dbUnclaimed.ProviderID, uuid.NullUUID{})
	require.Equal(t, dbUnclaimed.AppInstallationID, int64(installationID))
	require.Equal(t, dbUnclaimed.OrganizationID, int64(accountID))
	require.Equal(t, dbUnclaimed.EnrollingUserID, sql.NullString{Valid: true, String: strconv.FormatInt(accountID, 10)})
}

func TestProviderService_ValidateGithubInstallationId(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pvtKeyFile := testCreatePrivateKeyFile(t)
	defer os.Remove(pvtKeyFile.Name())
	cfg := &server.ProviderConfig{
		GitHubApp: &server.GitHubAppConfig{
			PrivateKey: pvtKeyFile.Name(),
		},
	}

	provSvc, mocks := testNewGitHubProviderService(t, ctrl, cfg, nil, nil)

	mocks.svcMock.EXPECT().
		ListUserInstallations(gomock.Any(), gomock.Any()).
		Return([]*github.Installation{
			{
				ID: github.Int64(123),
			},
		}, nil)

	err := provSvc.ValidateGitHubInstallationId(
		context.Background(),
		&oauth2.Token{},
		123)
	require.NoError(t, err)
}

func TestProviderService_ValidateGitHubAppWebhookPayload(t *testing.T) {
	t.Parallel()

	event := github.PingEvent{}
	pingJson, err := json.Marshal(event)
	require.NoError(t, err, "failed to marshal ping event")

	req, err := http.NewRequest("POST", "https://stacklok.webhook", bytes.NewBuffer(pingJson))
	require.NoError(t, err, "failed to create request")

	req.Header.Add("X-GitHub-Event", "ping")
	req.Header.Add("X-GitHub-Delivery", "12345")
	// the ping event has an empty body ({}), the value below is a SHA256 hmac of the empty body with the shared key "test"
	req.Header.Add("X-Hub-Signature-256", "sha256=5f5863b9805ad4e66e954a260f9cab3f2e95718798dec0bb48a655195893d10e")
	req.Header.Add("Content-Type", "application/json")

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pvtKeyFile := testCreatePrivateKeyFile(t)
	defer os.Remove(pvtKeyFile.Name())
	cfg := &server.ProviderConfig{
		GitHubApp: &server.GitHubAppConfig{
			WebhookSecret: "test",
		},
	}

	provSvc, _ := testNewGitHubProviderService(t, ctrl, cfg, nil, nil)
	payload, err := provSvc.ValidateGitHubAppWebhookPayload(req)
	require.NoError(t, err)

	var payloadEvent github.PingEvent
	err = json.Unmarshal(payload, &payloadEvent)
	require.NoError(t, err)

	cfg.GitHubApp.WebhookSecret = "wrong"
	_, err = provSvc.ValidateGitHubAppWebhookPayload(req)
	require.Error(t, err)
}

func TestProviderService_DeleteInstallation(t *testing.T) {
	t.Parallel()

	installationID := int64(123)

	seed := time.Now().UnixNano()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pvtKeyFile := testCreatePrivateKeyFile(t)
	defer os.Remove(pvtKeyFile.Name())
	cfg := &server.ProviderConfig{
		GitHubApp: &server.GitHubAppConfig{
			PrivateKey: pvtKeyFile.Name(),
		},
	}

	provSvc, mocks := testNewGitHubProviderService(t, ctrl, cfg, nil, nil)

	dbproj, err := mocks.fakeStore.CreateProject(context.Background(),
		db.CreateProjectParams{
			Name:     "test",
			Metadata: []byte(`{}`),
		})
	require.NoError(t, err)

	ghAppProvider, err := mocks.fakeStore.CreateProvider(context.Background(),
		db.CreateProviderParams{
			Name:       rand.RandomName(seed),
			ProjectID:  dbproj.ID,
			Class:      db.ProviderClassGithubApp,
			Implements: []db.ProviderType{db.ProviderTypeGithub, db.ProviderTypeGit},
			AuthFlows:  []db.AuthorizationFlow{db.AuthorizationFlowUserInput},
			Definition: json.RawMessage("{}"),
		})
	require.NoError(t, err)

	_, err = mocks.fakeStore.UpsertInstallationID(context.Background(),
		db.UpsertInstallationIDParams{
			ProviderID: uuid.NullUUID{
				UUID:  ghAppProvider.ID,
				Valid: true,
			},
			AppInstallationID: installationID,
		},
	)
	require.NoError(t, err)

	mocks.svcMock.EXPECT().
		DeleteInstallation(gomock.Any(), installationID, gomock.Any()).
		Return(nil, nil)

	err = provSvc.DeleteInstallation(
		context.Background(),
		ghAppProvider.ID,
	)
	require.NoError(t, err)
}

func TestProviderService_ValidateOrgMembershipForToken(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pvtKeyFile := testCreatePrivateKeyFile(t)
	defer os.Remove(pvtKeyFile.Name())
	cfg := &server.ProviderConfig{
		GitHubApp: &server.GitHubAppConfig{
			PrivateKey: pvtKeyFile.Name(),
		},
	}

	provSvc, mocks := testNewGitHubProviderService(t, ctrl, cfg, nil, nil)

	// Active member of the GitHub organization
	memberResp := github.Membership{State: github.String("active")}
	mocks.svcMock.EXPECT().GetOrgMembership(gomock.Any(), gomock.Any(), gomock.Any()).Return(&memberResp, &github.Response{}, nil)
	member, err := provSvc.ValidateOrgMembershipForToken(context.Background(), &oauth2.Token{}, "test-org")
	require.NoError(t, err)
	require.True(t, member)

	// Non Active member of the GitHub organization
	memberResp = github.Membership{State: github.String("inactive")}
	mocks.svcMock.EXPECT().GetOrgMembership(gomock.Any(), gomock.Any(), gomock.Any()).Return(&memberResp, &github.Response{}, nil)
	member, err = provSvc.ValidateOrgMembershipForToken(context.Background(), &oauth2.Token{}, "test-org")
	require.NoError(t, err)
	require.False(t, member)

	// Member not found in the GitHub organization
	httpResponse := &http.Response{
		StatusCode: http.StatusNotFound,
	}
	ghResponse := &github.Response{
		Response: httpResponse,
	}
	mocks.svcMock.EXPECT().GetOrgMembership(gomock.Any(), gomock.Any(), gomock.Any()).Return(&memberResp, ghResponse, fmt.Errorf("test error"))
	member, err = provSvc.ValidateOrgMembershipForToken(context.Background(), &oauth2.Token{}, "test-org")
	require.NoError(t, err)
	require.False(t, member)

	// Error while fetching member from the GitHub organization
	httpResponse = &http.Response{
		StatusCode: http.StatusInternalServerError,
	}
	ghResponse = &github.Response{
		Response: httpResponse,
	}
	mocks.svcMock.EXPECT().GetOrgMembership(gomock.Any(), gomock.Any(), gomock.Any()).Return(&memberResp, ghResponse, fmt.Errorf("test error"))
	member, err = provSvc.ValidateOrgMembershipForToken(context.Background(), &oauth2.Token{}, "test-org")
	require.Error(t, err)
	require.False(t, member)

}
