"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[15],{63725:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"getting_started/remediations","title":"Automatic remediations","description":"After you\'ve created a profile, you can view the status of your security profile, and you can optionally enable alerts through GitHub Security Advisories. But Minder can also automatically remediate your profile, which means that when it detects a repository that is not in compliance with your profile, Minder can attempt to remediate it, bringing it back into compliance.","source":"@site/docs/getting_started/remediations.md","sourceDirName":"getting_started","slug":"/getting_started/remediations","permalink":"/getting_started/remediations","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":80,"frontMatter":{"title":"Automatic remediations","sidebar_position":80},"sidebar":"minder","previous":{"title":"Viewing profile status","permalink":"/getting_started/viewing_status"},"next":{"title":"Key Concepts","permalink":"/understand/key_concepts"}}');var r=i(74848),o=i(28453);const a={title:"Automatic remediations",sidebar_position:80},s="Automatic remediation with Minder",d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling automatic remediation",id:"enabling-automatic-remediation",level:2},{value:"Creating a profile with <code>remediate: on</code>",id:"creating-a-profile-with-remediate-on",level:2},{value:"Automatic remediation in action",id:"automatic-remediation-in-action",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"automatic-remediation-with-minder",children:"Automatic remediation with Minder"})}),"\n",(0,r.jsxs)(t.p,{children:["After you've ",(0,r.jsx)(t.a,{href:"first_profile",children:"created a profile"}),", you can ",(0,r.jsx)(t.a,{href:"viewing_status",children:"view the status"})," of your security profile, and you can optionally enable alerts through GitHub Security Advisories. But Minder can also automatically remediate your profile, which means that when it detects a repository that is not in compliance with your profile, Minder can attempt to remediate it, bringing it back into compliance."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Before you can enable automatic remediations, you need to ",(0,r.jsx)(t.a,{href:"first_profile#adding-rule-types",children:"add rule types"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"enabling-automatic-remediation",children:"Enabling automatic remediation"}),"\n",(0,r.jsxs)(t.p,{children:["If you added the ",(0,r.jsx)(t.code,{children:"secret_scanning"})," and ",(0,r.jsx)(t.code,{children:"secret_push_protection"})," rules when you ",(0,r.jsx)(t.a,{href:"first_profile",children:"created your first profile"}),", then you can update your profile to turn automatic remediation on. When you do this, Minder will identify and repository that doesn't have secret scanning or secret push protection turned on, and will turn it on for you."]}),"\n",(0,r.jsxs)(t.h2,{id:"creating-a-profile-with-remediate-on",children:["Creating a profile with ",(0,r.jsx)(t.code,{children:"remediate: on"})]}),"\n",(0,r.jsxs)(t.p,{children:["To create a profile that has automatic remediation turned on for ",(0,r.jsx)(t.code,{children:"secret_scanning"})," and ",(0,r.jsx)(t.code,{children:"secret_push_protection"}),", update your ",(0,r.jsx)(t.code,{children:"my_profile.yaml"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'---\nversion: v1\ntype: profile\nname: my_profile\ncontext:\n  provider: github\nalert: "on"\nremediate: "on"\nrepository:\n  - type: secret_scanning\n    def:\n      enabled: true\n  - type: secret_push_protection\n    def:\n      enabled: true\n'})}),"\n",(0,r.jsx)(t.p,{children:"Then update your profile configuration in Minder:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"minder profile apply -f my_profile.yaml\n"})}),"\n",(0,r.jsx)(t.h2,{id:"automatic-remediation-in-action",children:"Automatic remediation in action"}),"\n",(0,r.jsx)(t.p,{children:"If you go to the GitHub repository settings for one of your registered repositories, then disable secret scanning, Minder will detect this change and automatically remediate it."}),"\n",(0,r.jsx)(t.p,{children:"If you reload the page on GitHub, you should see that secret scanning has automatically been re-enabled."}),"\n",(0,r.jsx)(t.p,{children:"Similarly, when Minder performs an automatic remediation, the profile status should move quickly through two states."}),"\n",(0,r.jsx)(t.p,{children:"When remediation is on, the profile status should move quickly through three different states. After disabling secret scanning on a repository, check the status of the profile:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"minder profile status list --name my_profile \n"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Immediately, you should see that the profile ",(0,r.jsx)(t.code,{children:"STATUS"})," is set to ",(0,r.jsx)(t.code,{children:"Failure"}),", and the ",(0,r.jsx)(t.code,{children:"REMEDIATION"})," state is set to ",(0,r.jsx)(t.code,{children:"Pending"}),". At this point, Minder will start the automatic remediation."]}),"\n",(0,r.jsxs)(t.li,{children:["Once Minder has performed the remediation, the profile ",(0,r.jsx)(t.code,{children:"STATUS"})," will remain at ",(0,r.jsx)(t.code,{children:"Failure"}),", but the ",(0,r.jsx)(t.code,{children:"REMEDIATION"})," state will change to ",(0,r.jsx)(t.code,{children:"Success"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["After Minder has remediated the problem, it will evaluate the rule again. Once this completes, Minder will set the profile ",(0,r.jsx)(t.code,{children:"STATUS"})," to ",(0,r.jsx)(t.code,{children:"Success"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"more-information",children:"More information"}),"\n",(0,r.jsxs)(t.p,{children:["For more information about automatic remediations, see the ",(0,r.jsx)(t.a,{href:"../understand/remediations",children:'additional documentation in "How Minder works"'}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);