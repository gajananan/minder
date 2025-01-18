"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[7710],{58961:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"ref/cli_configuration","title":"Minder CLI configuration","description":"The Minder CLI application is configured using a YAML file. The default location for the configuration file","source":"@site/docs/ref/cli_configuration.md","sourceDirName":"ref","slug":"/ref/cli_configuration","permalink":"/ref/cli_configuration","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"minder","previous":{"title":"Minder database schema","permalink":"/ref/schema"},"next":{"title":"Changelog","permalink":"/about/changelog"}}');var o=i(74848),r=i(28453);const c={},a="Minder CLI configuration",l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration file example",id:"configuration-file-example",level:2},{value:"Handle multiple contexts using a configuration file",id:"handle-multiple-contexts-using-a-configuration-file",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"minder-cli-configuration",children:"Minder CLI configuration"})}),"\n",(0,o.jsxs)(n.p,{children:["The Minder CLI application is configured using a YAML file. The default location for the configuration file\nis ",(0,o.jsx)(n.code,{children:"$PWD/config.yaml"}),". You can specify a different location using the ",(0,o.jsx)(n.code,{children:"--config"})," flag. If there's no configuration\nfile at the specified location, the CLI application will use its default values."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"minder"})," CLI application"]}),"\n",(0,o.jsx)(n.li,{children:"A Stacklok account"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-file-example",children:"Configuration file example"}),"\n",(0,o.jsxs)(n.p,{children:["Below is an example configuration file. The ",(0,o.jsx)(n.code,{children:"grpc_server"})," section configures the gRPC server that the CLI\napplication will connect to. The ",(0,o.jsx)(n.code,{children:"identity"})," section configures the issuer URL and client ID for the\nStacklok Identity service."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'---\n# Minder CLI configuration\n# gRPC server configuration\ngrpc_server:\n  host: "127.0.0.1"\n  port: 8090\n\nidentity:\n  cli:\n    issuer_url: http://localhost:8081\n    client_id: minder-cli\n---\n'})}),"\n",(0,o.jsx)(n.h2,{id:"handle-multiple-contexts-using-a-configuration-file",children:"Handle multiple contexts using a configuration file"}),"\n",(0,o.jsxs)(n.p,{children:["The Minder CLI can be configured to use multiple contexts. A context is a set of configuration values that\nare used to define a context, i.e. connect to a specific Minder server. For example, you may have a context for your local\ndevelopment environment, a context for your staging environment, and a context for your production\nenvironment. You can also specify things like the default ",(0,o.jsx)(n.code,{children:"provider"}),", ",(0,o.jsx)(n.code,{children:"project"})," or preferred format ",(0,o.jsx)(n.code,{children:"output"}),"\nfor each of those."]}),"\n",(0,o.jsxs)(n.p,{children:["To create a new context, create a new configuration file and set the ",(0,o.jsx)(n.code,{children:"MINDER_CONFIG"})," environment variable\nto point to the config file.  For a single command, you can also set the path to the file through the ",(0,o.jsx)(n.code,{children:"--config"}),"\nflag . For example, you can create your staging configuration in ",(0,o.jsx)(n.code,{children:"config-staging.yaml"})," and use it as either:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export MINDER_CONFIG=./config-staging.yaml\nminder auth login\n# OR:\nminder auth login --config ./config-staging.yaml\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);