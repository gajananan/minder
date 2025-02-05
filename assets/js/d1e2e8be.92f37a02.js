"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[663],{90818:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"how-to/setup-autoremediation","title":"Setting up a profile for automatic remediation","description":"Prerequisites","source":"@site/docs/how-to/setup-autoremediation.md","sourceDirName":"how-to","slug":"/how-to/setup-autoremediation","permalink":"/how-to/setup-autoremediation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"title":"Setting up a profile for automatic remediation","sidebar_position":60},"sidebar":"minder","previous":{"title":"Check artifact provenance","permalink":"/how-to/artifact_signatures"},"next":{"title":"Automatic remediation via pull request","permalink":"/how-to/remediate-pullrequest"}}');var n=r(74848),a=r(28453);const l={title:"Setting up a profile for automatic remediation",sidebar_position:60},o=void 0,s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a rule type for auto-remediation",id:"create-a-rule-type-for-auto-remediation",level:2},{value:"Create a profile",id:"create-a-profile",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"minder"})," CLI application"]}),"\n",(0,n.jsxs)(i.li,{children:["A Minder account with\n",(0,n.jsxs)(i.a,{href:"/user_management/user_roles",children:["at least ",(0,n.jsx)(i.code,{children:"editor"})," permission"]})]}),"\n",(0,n.jsx)(i.li,{children:"An enrolled provider (e.g., GitHub) and registered repositories"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"create-a-rule-type-for-auto-remediation",children:"Create a rule type for auto-remediation"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"remediate"})," feature is available for all rule types that have the\n",(0,n.jsx)(i.code,{children:"remediate"})," section defined in their ",(0,n.jsx)(i.code,{children:"<alert-type>.yaml"})," file. When the\n",(0,n.jsx)(i.code,{children:"remediate"})," feature is turned ",(0,n.jsx)(i.code,{children:"on"}),", Minder will try to automatically remediate\nfailed rules based on their type, i.e., by processing a REST call to\nenable/disable a non-compliant repository setting or by creating a pull request\nwith a proposed fix."]}),"\n",(0,n.jsx)(i.p,{children:"In this example, we will use a rule type that checks if a repository allows\nhaving force pushes on their main branch, which is considered a security risk.\nIf their setting allows for force pushes, Minder will automatically remediate it\nand disable it."}),"\n",(0,n.jsxs)(i.p,{children:["The rule type is called ",(0,n.jsx)(i.code,{children:"branch_protection_allow_force_pushes.yaml"})," and is one\nof the reference rule types provided by the Minder team."]}),"\n",(0,n.jsxs)(i.p,{children:["Fetch all the reference rules by cloning the\n",(0,n.jsx)(i.a,{href:"https://github.com/mindersec/minder-rules-and-profiles",children:"minder-rules-and-profiles repository"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/mindersec/minder-rules-and-profiles.git\n"})}),"\n",(0,n.jsx)(i.p,{children:"In that directory, you can find all the reference rules and profiles."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cd minder-rules-and-profiles\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Create the ",(0,n.jsx)(i.code,{children:"branch_protection_allow_force_pushes"})," rule type in Minder:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"minder ruletype create -f rule-types/github/branch_protection_allow_force_pushes.yaml\n"})}),"\n",(0,n.jsx)(i.h2,{id:"create-a-profile",children:"Create a profile"}),"\n",(0,n.jsx)(i.p,{children:"Next, create a profile that applies the rule to all registered repositories."}),"\n",(0,n.jsxs)(i.p,{children:["Create a new file called ",(0,n.jsx)(i.code,{children:"profile.yaml"})," using the following profile definition\nand enable automatic remediation by setting ",(0,n.jsx)(i.code,{children:"remediate"})," to ",(0,n.jsx)(i.code,{children:"on"}),". The other\navailable values are ",(0,n.jsx)(i.code,{children:"off"}),"(default) and ",(0,n.jsx)(i.code,{children:"dry_run"}),"."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:"---\nversion: v1\ntype: profile\nname: disable-force-push-profile\ncontext:\n  provider: github\nremediate: 'on'\nrepository:\n  - type: branch_protection_allow_force_pushes\n    params:\n      branch: main\n    def:\n      allow_force_pushes: false\n"})}),"\n",(0,n.jsx)(i.p,{children:"Create the profile in Minder:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"minder profile create -f profile.yaml\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Once the profile is created, Minder will monitor if the ",(0,n.jsx)(i.code,{children:"allow_force_pushes"}),"\nsetting on all of your registered repositories is set to ",(0,n.jsx)(i.code,{children:"false"}),". If the setting\nis set to ",(0,n.jsx)(i.code,{children:"true"}),", Minder will automatically remediate it by disabling it and\nwill make sure to keep it that way until the profile is deleted."]}),"\n",(0,n.jsxs)(i.p,{children:["Alerts are complementary to the remediation feature. If you have both ",(0,n.jsx)(i.code,{children:"alert"}),"\nand ",(0,n.jsx)(i.code,{children:"remediation"})," enabled for a profile, Minder will attempt to remediate it\nfirst. If the remediation fails, Minder will create an alert. If the remediation\nsucceeds, Minder will close any previously opened alerts related to that rule."]}),"\n",(0,n.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The automatic remediation feature is only available for rule types that\nsupport it, i.e., have the ",(0,n.jsx)(i.code,{children:"remediate"})," section defined in their\n",(0,n.jsx)(i.code,{children:"<alert-type>.yaml"})," file."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>o});var t=r(96540);const n={},a=t.createContext(n);function l(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);