"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[9332],{92714:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"run_minder_server/config_provider","title":"Configure a Provider","description":"A provider connects Minder to your software supply chain \u2014 giving Minder information about your source code repositories, and their pull requests, dependencies, and artifacts.","source":"@site/docs/run_minder_server/config_provider.md","sourceDirName":"run_minder_server","slug":"/run_minder_server/config_provider","permalink":"/run_minder_server/config_provider","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Configure a Provider","sidebar_position":20},"sidebar":"minder","previous":{"title":"Installing a Development version","permalink":"/run_minder_server/run_the_server"},"next":{"title":"Configuring a Webhook","permalink":"/run_minder_server/config_webhook"}}');var t=n(74848),s=n(28453);const d={title:"Configure a Provider",sidebar_position:20},a="Configuring a Provider",o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a GitHub App",id:"create-a-github-app",level:2},{value:"Basic Information",id:"basic-information",level:3},{value:"Identifying and authorizing users",id:"identifying-and-authorizing-users",level:3},{value:"Webhook",id:"webhook",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Installation and Scope",id:"installation-and-scope",level:3},{value:"Generate a client secret",id:"generate-a-client-secret",level:3},{value:"Generate a private key",id:"generate-a-private-key",level:3},{value:"Configure the Minder server",id:"configure-the-minder-server",level:2},{value:"Add GitHub App configuration",id:"add-github-app-configuration",level:3},{value:"Add Provider configuration",id:"add-provider-configuration",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"configuring-a-provider",children:"Configuring a Provider"})}),"\n",(0,t.jsx)(i.p,{children:"A provider connects Minder to your software supply chain \u2014 giving Minder information about your source code repositories, and their pull requests, dependencies, and artifacts."}),"\n",(0,t.jsx)(i.p,{children:"The currently supported providers are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"GitHub"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"For GitHub, you configure a Provider by creating a GitHub App."}),"\n",(0,t.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com",children:"GitHub"})," account"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"create-a-github-app",children:"Create a GitHub App"}),"\n",(0,t.jsx)(i.p,{children:"This approach allows fine-grained control over the permissions that Minder has in users' repositories.  It also\nallows users to limit the repositories that Minder can access."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Navigate to ",(0,t.jsx)(i.a,{href:"https://github.com/settings/profile",children:"GitHub Developer Settings"})]}),"\n",(0,t.jsx)(i.li,{children:'Select "Developer Settings" from the left hand menu'}),"\n",(0,t.jsx)(i.li,{children:'Select "GitHub Apps" from the left hand menu'}),"\n",(0,t.jsx)(i.li,{children:'Select "New GitHub App"'}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Adding a new GitHub App",src:n(4007).A+"",width:"2518",height:"750"})}),"\n",(0,t.jsx)(i.h3,{id:"basic-information",children:"Basic Information"}),"\n",(0,t.jsx)(i.p,{children:"Complete the following fields:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["GitHub App Name: ",(0,t.jsx)(i.code,{children:"My Minder App"})," (or any other name you like)"]}),"\n",(0,t.jsxs)(i.li,{children:["Homepage URL: ",(0,t.jsx)(i.code,{children:"http://localhost:8080"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Basic fields",src:n(76045).A+"",width:"1522",height:"1000"})}),"\n",(0,t.jsx)(i.h3,{id:"identifying-and-authorizing-users",children:"Identifying and authorizing users"}),"\n",(0,t.jsx)(i.p,{children:"Complete the following fields:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Callback URL: ",(0,t.jsx)(i.code,{children:"http://localhost:8080/api/v1/auth/callback/github-app/app"})]}),"\n",(0,t.jsxs)(i.li,{children:["Add an additional Callback URL for Keycloak: ",(0,t.jsx)(i.code,{children:"http://localhost:8081/realms/stacklok/broker/github/endpoint"})]}),"\n",(0,t.jsx)(i.li,{children:'Select the checkbox for "Request user authorization (OAuth) during installation"'}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Configuring the GitHub Provider",src:n(9894).A+"",width:"1588",height:"948"})}),"\n",(0,t.jsx)(i.h3,{id:"webhook",children:"Webhook"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Under Webhook, uncheck Active"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsx)(i.p,{children:"Select the following permissions:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Repository Permissions:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Administration (read and write)"}),"\n",(0,t.jsx)(i.li,{children:"Contents (read and write)"}),"\n",(0,t.jsx)(i.li,{children:"Metadata (read only)"}),"\n",(0,t.jsx)(i.li,{children:"Packages (read and write)"}),"\n",(0,t.jsx)(i.li,{children:"Pull requests (read and write)"}),"\n",(0,t.jsx)(i.li,{children:"Repository security advisories (read and write)"}),"\n",(0,t.jsx)(i.li,{children:"Webhooks (read and write)"}),"\n",(0,t.jsx)(i.li,{children:"Workflows (read and write)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Account permissions:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Email addresses (read only)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Once completed, double check your selected numbers match the ones in the screenshot."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Permissions",src:n(77755).A+"",width:"737",height:"502"})}),"\n",(0,t.jsx)(i.h3,{id:"installation-and-scope",children:"Installation and Scope"}),"\n",(0,t.jsx)(i.p,{children:'For the option "Where can this GitHub App be installed?":'}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Select "Any account" if you want to allow any GitHub user to install the app'}),"\n",(0,t.jsx)(i.li,{children:'Or, select "Only on this account" to restrict the app to only your account.'}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:'Then select "Create GitHub App" to create the App.'}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Permissions",src:n(13939).A+"",width:"1654",height:"376"})}),"\n",(0,t.jsx)(i.h3,{id:"generate-a-client-secret",children:"Generate a client secret"}),"\n",(0,t.jsxs)(i.p,{children:["You should now have a GitHub App created. You now need to create a ",(0,t.jsx)(i.code,{children:"Client secret"})," for authentication.\nClick the ",(0,t.jsx)(i.code,{children:"Generate a new client secret button"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Client secret",src:n(76666).A+"",width:"1542",height:"552"})}),"\n",(0,t.jsx)(i.p,{children:"Save the Client secret value for use in the Configure Minder step."}),"\n",(0,t.jsx)(i.h3,{id:"generate-a-private-key",children:"Generate a private key"}),"\n",(0,t.jsx)(i.p,{children:"Scroll down to the bottom of the page and generate a private key."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generate a private key",src:n(2336).A+"",width:"1536",height:"624"})}),"\n",(0,t.jsxs)(i.p,{children:["This will generate and download your private key.\nNow we need to move and rename the private key.\nRun the following commands from the Minder root directory, replacing ",(0,t.jsx)(i.code,{children:"<downloaded-file>"})," with the path to the downloaded private key."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"mkdir .secrets\ncp <downloaded-file> .secrets/github-app.pem\n"})}),"\n",(0,t.jsx)(i.h2,{id:"configure-the-minder-server",children:"Configure the Minder server"}),"\n",(0,t.jsx)(i.p,{children:"Now that we've created our GitHub App, we need to configure the Minder server to use it."}),"\n",(0,t.jsx)(i.h3,{id:"add-github-app-configuration",children:"Add GitHub App configuration"}),"\n",(0,t.jsxs)(i.p,{children:["In your ",(0,t.jsx)(i.code,{children:"server-config.yaml"})," file, located in the root Minder directory, find the following section:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:'github-app:\n  client_id: "client-id"\n  client_secret: "client-secret"\n  redirect_uri: "http://localhost:8080/api/v1/auth/callback/github-app/app" # This needs to match the registered callback URL in the GitHub App\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Update the ",(0,t.jsx)(i.code,{children:"client_id"})," and ",(0,t.jsx)(i.code,{children:"client_secret"})," values with the following:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Client ID : Found in the General -> About section of your GitHub App on GitHub."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Client ID",src:n(51454).A+"",width:"1992",height:"570"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Client Secret : The value you saved previously."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"add-provider-configuration",children:"Add Provider configuration"}),"\n",(0,t.jsxs)(i.p,{children:["Then, find the following section in the same ",(0,t.jsx)(i.code,{children:"server-config.yaml"})," file:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:'provider:\n  github-app:\n    app_name: "app-name"\n    app_id: 1234\n    user_id: 1234\n    private_key: ".secrets/github-app.pem"\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Update the ",(0,t.jsx)(i.code,{children:"app_name"})," with the name of your app, which you can get by looking at the GitHub URL when editing your GitHub App. For example, if the URL is ",(0,t.jsx)(i.a,{href:"https://github.com/settings/apps/my-test-app",children:"https://github.com/settings/apps/my-test-app"}),", then your app name is my-test-app."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"App name",src:n(30324).A+"",width:"1192",height:"290"})}),"\n",(0,t.jsxs)(i.p,{children:["Update ",(0,t.jsx)(i.code,{children:"app_id"})," with the app ID of your GitHub App, which is found in the General -> About section of your GitHub App on GitHub."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"App ID",src:n(33154).A+"",width:"2012",height:"598"})}),"\n",(0,t.jsxs)(i.p,{children:["Finally, you need the ",(0,t.jsx)(i.code,{children:"user_id"})," value. To get the value, run the following command, where ",(0,t.jsx)(i.code,{children:"<app-name>"})," is the App name you used above:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"curl https://api.github.com/users/<app-name>%5Bbot%5D\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Update the ",(0,t.jsx)(i.code,{children:"user_id"})," value with the ",(0,t.jsx)(i.code,{children:"id"})," value returned from that command."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"User ID",src:n(79770).A+"",width:"1382",height:"396"})}),"\n",(0,t.jsx)(i.p,{children:"Now save the file. Your Provider is now created and the Minder server is configured to use it."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4007:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/new-github-app-8f9f342c6d6f6b33b4852b53f8f8f618.png"},33154:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-app-id-c6d0dce03720088ff5e82986c43eefad.png"},30324:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-app-name-d1ba3f2a816a5b8abb782dbdf8f8a692.png"},76045:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-basic-d2efd7a139d4879afb63ab8a7174bf2d.png"},51454:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-client-id-452c0664de27786de183499d667a1893.png"},76666:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-client-secret-created-0b6b69e9a90967c375eca2f4ca34db1e.png"},13939:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-create-dafb91a095f850584d309b9122680cba.png"},2336:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-generate-private-43daf2bdd975fd6f81204e0b4a1d5877.png"},9894:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-ident-and-auth-f32c9f5eee15c757b8538811a4f08a50.png"},77755:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-permissions-5c74ac3b57bb9eb20af2eb53eb0e9fcc.png"},79770:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/provider-user-id-88716c32b50c5d87172f15d2115f6f00.png"},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>a});var r=n(96540);const t={},s=r.createContext(t);function d(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);