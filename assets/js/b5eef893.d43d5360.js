"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[4088],{68131:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"ref/cli/minder_provider_enroll","title":"minder provider enroll","description":"minder provider enroll","source":"@site/docs/ref/cli/minder_provider_enroll.md","sourceDirName":"ref/cli","slug":"/ref/cli/minder_provider_enroll","permalink":"/ref/cli/minder_provider_enroll","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"minder provider enroll"},"sidebar":"minder","previous":{"title":"minder provider delete","permalink":"/ref/cli/minder_provider_delete"},"next":{"title":"minder provider get","permalink":"/ref/cli/minder_provider_get"}}');var o=r(74848),t=r(28453);const l={title:"minder provider enroll"},s=void 0,d={},c=[{value:"minder provider enroll",id:"minder-provider-enroll",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"minder-provider-enroll",children:"minder provider enroll"}),"\n",(0,o.jsx)(n.p,{children:"Enroll a provider within the minder control plane"}),"\n",(0,o.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,o.jsx)(n.p,{children:"The minder provider enroll command allows a user to enroll a provider\nsuch as GitHub into the minder control plane. Once enrolled, users can perform\nactions such as adding repositories."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"minder provider enroll [flags]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'  -c, --class string             Provider class, defaults to github-app (default "github-app")\n  -h, --help                     help for enroll\n  -n, --name string              Name of the new provider. (Only when using a token)\n  -o, --owner string             Owner to filter on for provider resources (Legacy GitHub only)\n  -f, --provider-config string   Path to the provider configuration (or - for stdin)\n      --skip-browser             Skip opening the browser for OAuth flow\n  -t, --token string             Personal Access Token (PAT) to use for enrollment (Legacy GitHub only)\n  -y, --yes                      Bypass any yes/no prompts when enrolling a new provider\n'})}),"\n",(0,o.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'      --config string            Config file (default is $PWD/config.yaml)\n      --grpc-host string         Server host (default "api.stacklok.com")\n      --grpc-insecure            Allow establishing insecure connections\n      --grpc-port int            Server port (default 443)\n      --identity-client string   Identity server client ID (default "minder-cli")\n      --identity-url string      Identity server issuer URL (default "https://auth.stacklok.com")\n  -j, --project string           ID of the project\n  -v, --verbose                  Output additional messages to STDERR\n'})}),"\n",(0,o.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/ref/cli/minder_provider",children:"minder provider"}),"\t - Manage providers within a minder control plane"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var i=r(96540);const o={},t=i.createContext(o);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);