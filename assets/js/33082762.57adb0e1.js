"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[2828],{17672:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"how-to/setup-alerts","title":"Setting up a profile for GitHub Security Advisories","description":"Prerequisites","source":"@site/docs/how-to/setup-alerts.md","sourceDirName":"how-to","slug":"/how-to/setup-alerts","permalink":"/how-to/setup-alerts","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":70,"frontMatter":{"title":"Setting up a profile for GitHub Security Advisories","sidebar_position":70},"sidebar":"minder","previous":{"title":"Automatic remediation via pull request","permalink":"/how-to/remediate-pullrequest"},"next":{"title":"Creating a new project","permalink":"/how-to/create_project"}}');var n=i(74848),l=i(28453);const s={title:"Setting up a profile for GitHub Security Advisories",sidebar_position:70},a=void 0,o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a rule type for alerting",id:"create-a-rule-type-for-alerting",level:2},{value:"Create a profile",id:"create-a-profile",level:2},{value:"Limitations",id:"limitations",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The ",(0,n.jsx)(r.code,{children:"minder"})," CLI application"]}),"\n",(0,n.jsxs)(r.li,{children:["A Minder account with\n",(0,n.jsxs)(r.a,{href:"/user_management/user_roles",children:["at least ",(0,n.jsx)(r.code,{children:"editor"})," permission"]})]}),"\n",(0,n.jsx)(r.li,{children:"An enrolled provider (e.g., GitHub) and registered repositories"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"create-a-rule-type-for-alerting",children:"Create a rule type for alerting"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"alert"})," feature is available for all rule types that have the ",(0,n.jsx)(r.code,{children:"alert"}),"\nsection defined in their ",(0,n.jsx)(r.code,{children:"<alert-type>.yaml"})," file. Alerts are a core feature of\nMinder providing you with notifications about the status of your registered\nrepositories using GitHub Security Advisories. These Security Advisories\nautomatically open and close based on the evaluation of the rules defined in\nyour profiles."]}),"\n",(0,n.jsx)(r.p,{children:"When a rule fails, Minder opens an alert to bring your attention to the\nnon-compliance issue. Conversely, when the rule evaluation passes, Minder will\nautomatically close any previously opened alerts related to that rule."}),"\n",(0,n.jsxs)(r.p,{children:["In this example, we will use a rule type that checks if a repository has a\nLICENSE file present. If there's no file present, Minder will create an alert\nnotifying the owner of the repository. The rule type is called ",(0,n.jsx)(r.code,{children:"license.yaml"}),"\nand is one of the reference rule types provided by the Minder team. Details,\nsuch as the severity of the alert are defined in the ",(0,n.jsx)(r.code,{children:"alert"})," section of the rule\ntype definition."]}),"\n",(0,n.jsxs)(r.p,{children:["Fetch all the reference rules by cloning the\n",(0,n.jsx)(r.a,{href:"https://github.com/mindersec/minder-rules-and-profiles",children:"minder-rules-and-profiles repository"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/mindersec/minder-rules-and-profiles.git\n"})}),"\n",(0,n.jsx)(r.p,{children:"In that directory, you can find all the reference rules and profiles."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"cd minder-rules-and-profiles\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Create the ",(0,n.jsx)(r.code,{children:"license"})," rule type in Minder:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"minder ruletype create -f rule-types/github/license.yaml\n"})}),"\n",(0,n.jsx)(r.h2,{id:"create-a-profile",children:"Create a profile"}),"\n",(0,n.jsx)(r.p,{children:"Next, create a profile that applies the rule to all registered repositories."}),"\n",(0,n.jsxs)(r.p,{children:["Create a new file called ",(0,n.jsx)(r.code,{children:"profile.yaml"})," using the following profile definition\nand enable alerting by setting ",(0,n.jsx)(r.code,{children:"alert"})," to ",(0,n.jsx)(r.code,{children:"on"})," (default). The other available\nvalues are ",(0,n.jsx)(r.code,{children:"off"})," and ",(0,n.jsx)(r.code,{children:"dry_run"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"---\nversion: v1\ntype: profile\nname: license-profile\ncontext:\n  provider: github\nalert: 'on'\nrepository:\n  - type: license\n    def:\n      license_filename: LICENSE\n      license_type: ''\n"})}),"\n",(0,n.jsx)(r.p,{children:"Create the profile in Minder:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"minder profile create -f profile.yaml\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Once the profile is created, Minder will monitor all of your registered\nrepositories for the presence of the ",(0,n.jsx)(r.code,{children:"LICENSE"})," file."]}),"\n",(0,n.jsxs)(r.p,{children:["If a repository does not have a ",(0,n.jsx)(r.code,{children:"LICENSE"})," file available, Minder will create an\nalert of type Security Advisory providing additional details such as the profile\nand rule that triggered the alert and guidelines on how to resolve the issue."]}),"\n",(0,n.jsxs)(r.p,{children:["Once a ",(0,n.jsx)(r.code,{children:"LICENSE"})," file is added to the repository, Minder will automatically\nclose the alert."]}),"\n",(0,n.jsxs)(r.p,{children:["Alerts are complementary to the remediation feature. If you have both ",(0,n.jsx)(r.code,{children:"alert"}),"\nand ",(0,n.jsx)(r.code,{children:"remediation"})," enabled for a profile, Minder will attempt to remediate it\nfirst. If the remediation fails, Minder will create an alert. If the remediation\nsucceeds, Minder will close any previously opened alerts related to that rule."]}),"\n",(0,n.jsx)(r.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Currently, the only supported alert type is GitHub Security Advisory. More\nalert types will be added in the future."}),"\n",(0,n.jsxs)(r.li,{children:["Alerts are only available for rules that have the ",(0,n.jsx)(r.code,{children:"alert"})," section defined in\ntheir ",(0,n.jsx)(r.code,{children:"<alert-type>.yaml"})," file."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>a});var t=i(96540);const n={},l=t.createContext(n);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);