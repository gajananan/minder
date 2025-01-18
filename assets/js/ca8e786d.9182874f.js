"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[7525],{58803:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developer_guide/get-hacking","title":"Get hacking","description":"Run Minder","source":"@site/docs/developer_guide/get-hacking.md","sourceDirName":"developer_guide","slug":"/developer_guide/get-hacking","permalink":"/developer_guide/get-hacking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Get hacking","sidebar_position":1},"sidebar":"minder","previous":{"title":"Apply a profile to a subset of entities","permalink":"/how-to/profile_selectors"},"next":{"title":"Feature flags","permalink":"/developer_guide/feature_flags"}}');var r=i(74848),t=i(28453);const a={title:"Get hacking",sidebar_position:1},o="Get Hacking",c={},l=[{value:"Run Minder",id:"run-minder",level:2},{value:"Run the tests",id:"run-the-tests",level:2},{value:"CLI",id:"cli",level:2},{value:"APIs",id:"apis",level:2},{value:"How to generate protobuf stubs",id:"how-to-generate-protobuf-stubs",level:2},{value:"Database migrations and tooling",id:"database-migrations-and-tooling",level:2},{value:"Viper configuration",id:"viper-configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"get-hacking",children:"Get Hacking"})}),"\n",(0,r.jsx)(n.h2,{id:"run-minder",children:"Run Minder"}),"\n",(0,r.jsxs)(n.p,{children:["Follow the steps in the ",(0,r.jsx)(n.a,{href:"/run_minder_server/run_the_server",children:"Installing a Development version"})," guide."]}),"\n",(0,r.jsxs)(n.p,{children:["The application will be available on ",(0,r.jsx)(n.code,{children:"https://localhost:8080"})," and gRPC on ",(0,r.jsx)(n.code,{children:"https://localhost:8090"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When iterating, it can be helpful to only rebuild and reload the ",(0,r.jsx)(n.code,{children:"minder"})," container.  You can do this with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make run-docker services=minder\n"})}),"\n",(0,r.jsx)(n.h2,{id:"run-the-tests",children:"Run the tests"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n",(0,r.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,r.jsxs)(n.p,{children:["The CLI is available in the ",(0,r.jsx)(n.code,{children:"cmd/cli"})," directory.  You can also use the pre-built ",(0,r.jsx)(n.code,{children:"minder"})," CLI with your new application; you'll need to set the ",(0,r.jsx)(n.code,{children:"--grpc-host localhost --grpc-port 8090"})," arguments in either case."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go run cmd/cli/main.go --help\n"})}),"\n",(0,r.jsx)(n.h2,{id:"apis",children:"APIs"}),"\n",(0,r.jsxs)(n.p,{children:["The APIs are defined in protobuf ",(0,r.jsx)(n.a,{href:"https://github.com/mindersec/minder/blob/main/proto/minder/v1/minder.proto",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["An OpenAPI / swagger spec is generated to ",(0,r.jsx)(n.a,{href:"https://github.com/mindersec/minder/blob/main/pkg/api/openapi/proto/minder/v1/minder.swagger.json",children:"here"})]}),"\n",(0,r.jsxs)(n.p,{children:["It can be accessed over gRPC or HTTP using ",(0,r.jsx)(n.a,{href:"https://grpc-ecosystem.github.io/grpc-gateway/",children:"gprc-gateway"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-generate-protobuf-stubs",children:"How to generate protobuf stubs"}),"\n",(0,r.jsxs)(n.p,{children:["We use ",(0,r.jsx)(n.a,{href:"https://buf.build/docs/",children:"buf"})," to generate the gRPC / HTTP stubs (both protobuf and openAPI)."]}),"\n",(0,r.jsx)(n.p,{children:"To build the stubs, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make clean-gen\nmake gen\n"})}),"\n",(0,r.jsx)(n.h2,{id:"database-migrations-and-tooling",children:"Database migrations and tooling"}),"\n",(0,r.jsxs)(n.p,{children:["Minder uses ",(0,r.jsx)(n.a,{href:"https://sqlc.dev/",children:"sqlc"})," to generate Go code from SQL."]}),"\n",(0,r.jsxs)(n.p,{children:["The main configuration file is ",(0,r.jsx)(n.code,{children:"sqlc.yaml"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To make changes to the database schema, create a new migration file in the\n",(0,r.jsx)(n.code,{children:"database/migrations"})," directory."]}),"\n",(0,r.jsxs)(n.p,{children:["Add any queries to the ",(0,r.jsx)(n.code,{children:"database/queries/sqlc.sql"})," file."]}),"\n",(0,r.jsx)(n.p,{children:"To generate the Go code, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make sqlc\n"})}),"\n",(0,r.jsx)(n.p,{children:"Users will then need to perform a migration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make migrateup\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make migratedown\n"})}),"\n",(0,r.jsx)(n.h2,{id:"viper-configuration",children:"Viper configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Minder uses ",(0,r.jsx)(n.a,{href:"https://github.com/spf13/viper",children:"viper"})," for configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["An example CLI configuration file is ",(0,r.jsx)(n.code,{children:"config/config.yaml.example"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["An example server configuration file is ",(0,r.jsx)(n.code,{children:"config/server-config.yaml.example"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Most values should be quite self-explanatory."}),"\n",(0,r.jsxs)(n.p,{children:["Before running the app, please copy the content of ",(0,r.jsx)(n.code,{children:"config/config.yaml.example"})," into ",(0,r.jsx)(n.code,{children:"$PWD/config.yaml"})," file,\nand ",(0,r.jsx)(n.code,{children:"config/server-config.yaml.example"})," into ",(0,r.jsx)(n.code,{children:"$PWD/server-config.yaml"})," file, and modify to use your own settings."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(96540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);