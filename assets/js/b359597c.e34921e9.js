"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[9688],{32688:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"about/changelog","title":"Changelog","description":"- Profile selectors - Sep 9, 2024","source":"@site/docs/about/changelog.md","sourceDirName":"about","slug":"/about/changelog","permalink":"/about/changelog","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Changelog","sidebar_position":30},"sidebar":"minder","previous":{"title":"Minder database schema","permalink":"/ref/schema"},"next":{"title":"Roadmap","permalink":"/about/roadmap"}}');var t=s(74848),i=s(28453);const o={title:"Changelog",sidebar_position:30},a=void 0,l={},c=[];function u(e){const n={a:"a",br:"br",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Profile selectors"})," - Sep 9, 2024",(0,t.jsx)(n.br,{}),"\n","You can now specify which repositories a profile applies to using a Common\nExpression Language (CEL) grammar."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Rule evaluation history"})," - Sep 4, 2024",(0,t.jsx)(n.br,{}),"\n","You can now see how your security rules have applied to your repositories,\npull requests, and artifacts throughout time, in addition to their current\nstate."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"User management"})," - Aug 5, 2024",(0,t.jsx)(n.br,{}),"\n","Minder organization administrators can now invite additional users to the\norganization, and can set users permissions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Manage all GitHub repositories"})," - Jul 17, 2024",(0,t.jsx)(n.br,{}),"\n","Minder can now (optionally) manage all repositories within a GitHub\norganization, including new repositories that are created. Administrators can\ncontinue to select individual repositories to manage."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Built-in rules"})," - Apr 6, 2024",(0,t.jsx)(n.br,{}),"\n","Minder now includes all the rules in our\n",(0,t.jsx)(n.a,{href:"https://github.com/mindersec/minder-rules-and-profiles/",children:"sample rules repository"}),"\nin your new projects automatically. This means that you do not need to clone\nthat repository or add those rule types to make use of them."]}),"\n",(0,t.jsxs)(n.p,{children:["To use them, prefix the rule name as it exists in the sample rules repository\nwith ",(0,t.jsx)(n.code,{children:"stacklok/"}),". For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\nversion: v1\ntype: profile\nname: uses-builtin-rules\ncontext:\n  provider: github\nrepository:\n  - type: stacklok/secret_scanning\n    def:\n      enabled: true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can still define custom rules, or continue to use the rules that exist in\nthe\n",(0,t.jsx)(n.a,{href:"https://github.com/mindersec/minder-rules-and-profiles",children:"sample rules repository"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"User roles"})," - Jan 30, 2024",(0,t.jsx)(n.br,{}),"\n","You can now provide access control for users (eg: administrator, editor,\nviewer) in your project using\n",(0,t.jsx)(n.a,{href:"/user_management/user_roles",children:"built-in roles"}),"."]}),"\n"]}),"\n"]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);