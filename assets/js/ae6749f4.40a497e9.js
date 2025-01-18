"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[7751],{28300:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"integrations/provider_integrations/github","title":"GitHub","description":"A provider connects Minder to your software supply chain. It lets Minder know where to look for your repositories, artifacts,","source":"@site/docs/integrations/provider_integrations/github.md","sourceDirName":"integrations/provider_integrations","slug":"/integrations/provider_integrations/github","permalink":"/integrations/provider_integrations/github","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"GitHub","sidebar_position":10},"sidebar":"minder","previous":{"title":"Overview","permalink":"/integrations/overview"},"next":{"title":"OSS tooling integrations","permalink":"/integrations/community_integrations"}}');var o=r(74848),t=r(28453);const s={title:"GitHub",sidebar_position:10},a="Providers",l={},d=[{value:"Enrolling a provider",id:"enrolling-a-provider",level:2},{value:"Enrolling a provider with configuration",id:"enrolling-a-provider-with-configuration",level:2},{value:"GitHub App Provider Configuration reference",id:"github-app-provider-configuration-reference",level:3}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"providers",children:"Providers"})}),"\n",(0,o.jsx)(i.p,{children:"A provider connects Minder to your software supply chain. It lets Minder know where to look for your repositories, artifacts,\nand other entities are, in order to make them available for registration. It also tells Minder how to interact with your\nsupply chain to enable features such as alerting and remediation. Finally, it handles the way Minder authenticates\nto the external service."}),"\n",(0,o.jsx)(i.p,{children:"The currently supported providers are:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"GitHub"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Stay tuned as we add more providers in the future!"}),"\n",(0,o.jsx)(i.h2,{id:"enrolling-a-provider",children:"Enrolling a provider"}),"\n",(0,o.jsx)(i.p,{children:"To enroll GitHub as a provider, use the following command:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"minder provider enroll\n"})}),"\n",(0,o.jsx)(i.p,{children:"Once a provider is enrolled, public repositories from that provider can be registered with Minder. Security profiles\ncan then be applied to the registered repositories, giving you an overview of your security posture and providing\nremediations to improve your security posture."}),"\n",(0,o.jsx)(i.h2,{id:"enrolling-a-provider-with-configuration",children:"Enrolling a provider with configuration"}),"\n",(0,o.jsxs)(i.p,{children:["To specify provider configuration on enrollment, add the ",(0,o.jsx)(i.code,{children:"--provider-config"})," flag and specify the path to the provider configuration file. For example:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"minder provider enroll --provider-config /path/to/github-app-config.json\n"})}),"\n",(0,o.jsx)(i.p,{children:"The provider configuration file should be a JSON file with the following format:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-json",children:'{\n  "github_app": {},\n  "auto_registration": {\n    "entities": {\n      "repository": {\n        "enabled": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(i.p,{children:"See the following section for provider configuration reference"}),"\n",(0,o.jsx)(i.h3,{id:"github-app-provider-configuration-reference",children:"GitHub App Provider Configuration reference"}),"\n",(0,o.jsx)(i.p,{children:"The GitHub App provider has the following configuration options:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"auto_registration"})," (object): Configuration for the provider auto-registration feature","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"entities"})," (object): Configuration for auto-registering different entities","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"repository"})," (object): Configuration for auto-registering repositories","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"enabled"})," (boolean): Whether to auto-register repositories. Default is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>a});var n=r(96540);const o={},t=n.createContext(o);function s(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);