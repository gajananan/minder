"use strict";(self.webpackChunkminder_docs=self.webpackChunkminder_docs||[]).push([[6456],{71959:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"how-to/create_profile","title":"Creating a profile","description":"Prerequisites","source":"@site/docs/how-to/create_profile.md","sourceDirName":"how-to","slug":"/how-to/create_profile","permalink":"/how-to/create_profile","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Creating a profile","sidebar_position":10},"sidebar":"minder","previous":{"title":"Automatic remediations","permalink":"/understand/remediations"},"next":{"title":"Manage profiles and compliance","permalink":"/how-to/manage_profiles"}}');var i=r(74848),s=r(28453);const a={title:"Creating a profile",sidebar_position:10},l=void 0,o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use a reference rule",id:"use-a-reference-rule",level:2},{value:"Write your own rule",id:"write-your-own-rule",level:2},{value:"Create a profile",id:"create-a-profile",level:2},{value:"Defining Rule Names in Profiles",id:"defining-rule-names-in-profiles",level:2},{value:"Rule Types vs Rule Names",id:"rule-types-vs-rule-names",level:3},{value:"When are Rule Names Mandatory?",id:"when-are-rule-names-mandatory",level:3},{value:"Uniqueness of Rule Names",id:"uniqueness-of-rule-names",level:3},{value:"Example",id:"example",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"minder"})," CLI application"]}),"\n",(0,i.jsxs)(n.li,{children:["A Minder account with\n",(0,i.jsxs)(n.a,{href:"/user_management/user_roles",children:["at least ",(0,i.jsx)(n.code,{children:"editor"})," permission"]})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-a-reference-rule",children:"Use a reference rule"}),"\n",(0,i.jsx)(n.p,{children:"The first step to creating a profile is to create the rules that your profile will apply."}),"\n",(0,i.jsx)(n.p,{children:"The Minder team has provided several reference rules for common use cases. To get started quickly, create a rule from\nthe set of references."}),"\n",(0,i.jsxs)(n.p,{children:["Fetch all the reference rules by cloning the ",(0,i.jsx)(n.a,{href:"https://github.com/mindersec/minder-rules-and-profiles",children:"minder-rules-and-profiles repository"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/mindersec/minder-rules-and-profiles.git\n"})}),"\n",(0,i.jsx)(n.p,{children:"In that directory you can find all the reference rules and profiles."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd minder-rules-and-profiles\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Create the ",(0,i.jsx)(n.code,{children:"secret_scanning"})," rule type in Minder:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"minder ruletype create -f rule-types/github/secret_scanning.yaml\n"})}),"\n",(0,i.jsx)(n.h2,{id:"write-your-own-rule",children:"Write your own rule"}),"\n",(0,i.jsxs)(n.p,{children:["This section describes how to write your own rule, using the existing rule ",(0,i.jsx)(n.code,{children:"secret_scanning"})," as a reference. If you've\nalready created the ",(0,i.jsx)(n.code,{children:"secret_scanning"})," rule, you may choose to skip this section."]}),"\n",(0,i.jsx)(n.p,{children:"Start by creating a rule that checks if secret scanning is enabled."}),"\n",(0,i.jsxs)(n.p,{children:["Create a new file called ",(0,i.jsx)(n.code,{children:"secret_scanning.yaml"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Add some basic information about the rule to the new file, such as the version, type, name, context, description and\nguidance."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"---\nversion: v1\ntype: rule-type\nname: secret_scanning\ncontext:\n  provider: github\ndescription: Verifies that secret scanning is enabled for a given repository.\n# guidance is the instructions the user will see if this rule fails\nguidance: |\n  Secret scanning is a feature that scans repositories for secrets and alerts\n  the repository owner when a secret is found. To enable this feature in GitHub,\n  you must enable it in the repository settings.\n\n  For more information, see\n  https://docs.github.com/en/github/administering-a-repository/about-secret-scanning\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, add the rule definition to the ",(0,i.jsx)(n.code,{children:"secret_scanning.yaml"})," file.\nSet ",(0,i.jsx)(n.code,{children:"in_entity"})," to be ",(0,i.jsx)(n.code,{children:"repository"}),", since secret scanning is enabled on the repository."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"def:\n  in_entity: repository\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"rule_schema"})," defining a property describing whether secret scanning is enabled on a repository."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"def:\n  # ...\n  rule_schema:\n      properties:\n        enabled:\n          type: boolean\n          default: true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"ingest"})," to make a REST call to fetch information about each registered repository and parse the response as JSON."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'def:\n  # ...\n  ingest:\n    type: rest\n    rest:\n      # This is the path to the data source. Given that this will evaluate\n      # for each repository in the organization, we use a template that\n      # will be evaluated for each repository. The structure to use is the\n      # protobuf structure for the entity that is being evaluated.\n      endpoint: "/repos/{{.Entity.Owner}}/{{.Entity.Name}}"\n      parse: json\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.code,{children:"eval"})," to use ",(0,i.jsx)(n.code,{children:"jq"})," to read the response from the REST call and determine if secret scanning is enabled."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'def:\n  # ...\n  eval:\n    type: jq\n    jq:\n      # Ingested points to the data retrieved in the `ingest` section\n      - ingested:\n          def: \'.security_and_analysis.secret_scanning.status == "enabled"\'\n        # profile points to the profile itself.\n        profile:\n          def: ".enabled"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Set up the remediation action that will be taken if this rule is not satisfied\n(and the profile has turned on remediation). The remediation action in this case is to make a PATCH request to the\nrepository and enable secret scanning."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'def:\n  # ...\n  remediate:\n    type: rest\n    rest:\n      method: PATCH\n      endpoint: "/repos/{{.Entity.Owner}}/{{.Entity.Name}}"\n      body: |\n        { "security_and_analysis": {"secret_scanning": { "status": "enabled" } } }\n'})}),"\n",(0,i.jsx)(n.p,{children:"Define how users will be alerted if this rule is not satisfied. In this case a security advisory will be created in\nany repository that does not satisfy this rule."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'def:\n  # ...\n  alert:\n      type: security_advisory\n      security_advisory:\n        severity: "medium"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Putting it all together, you get the following content in ",(0,i.jsx)(n.code,{children:"secret_scanning.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'---\nversion: v1\ntype: rule-type\nname: secret_scanning\ncontext:\n  provider: github\ndescription: Verifies that secret scanning is enabled for a given repository.\nguidance: |\n  Secret scanning is a feature that scans repositories for secrets and alerts\n  the repository owner when a secret is found. To enable this feature in GitHub,\n  you must enable it in the repository settings.\n\n  For more information, see\n  https://docs.github.com/en/github/administering-a-repository/about-secret-scanning\ndef:\n  in_entity: repository\n  rule_schema:\n    properties:\n      enabled:\n        type: boolean\n        default: true\n  ingest:\n    type: rest\n    rest:\n      endpoint: "/repos/{{.Entity.Owner}}/{{.Entity.Name}}"\n      parse: json\n  eval:\n    type: jq\n    jq:\n      - ingested:\n          def: \'.security_and_analysis.secret_scanning.status == "enabled"\'\n        profile:\n          def: ".enabled"\n  remediate:\n    type: rest\n    rest:\n      method: PATCH\n      endpoint: "/repos/{{.Entity.Owner}}/{{.Entity.Name}}"\n      body: |\n        { "security_and_analysis": {"secret_scanning": { "status": "enabled" } } }\n  alert:\n    type: security_advisory\n    security_advisory:\n      severity: "medium"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, create the ",(0,i.jsx)(n.code,{children:"secret_scanning"})," rule in Minder:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"minder ruletype create -f secret_scanning.yaml\n"})}),"\n",(0,i.jsx)(n.h2,{id:"create-a-profile",children:"Create a profile"}),"\n",(0,i.jsx)(n.p,{children:"Now that you've created a secret scanning rule, you can set up a profile that checks if secret scanning is enabled\nin all your registered repositories."}),"\n",(0,i.jsxs)(n.p,{children:["Start by creating a file named ",(0,i.jsx)(n.code,{children:"profile.yaml"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Add some basic information about the profile to the new file, such as the version, type, name and context."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"version: v1\ntype: profile\nname: my-first-profile\ncontext:\n  provider: github\n"})}),"\n",(0,i.jsx)(n.p,{children:"Turn on alerting, so that a security advisory will be created for any registered repository that has not enabled\nsecret scanning."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'alert: "on"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Turn on remediation, so that secret scanning will automatically be enabled for any registered repositories."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'remediate: "on"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Register the secret scanning rule that you created in the previous step."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repository:\n  - type: secret_scanning\n    def:\n      enabled: true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Putting it all together, you get the following content if ",(0,i.jsx)(n.code,{children:"profile.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'version: v1\ntype: profile\nname: my-first-profile\ncontext:\n  provider: github\nalert: "on"\nremediate: "on"\nrepository:\n  - type: secret_scanning\n    name: "secret_scanning_github" # Optional, as there aren\'t multiple rules\n                                   # of the same type under the entity - repository\n    def:\n      enabled: true\n'})}),"\n",(0,i.jsx)(n.p,{children:"Finally, create your profile in Minder:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"minder profile create -f profile.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check the status of your profile and see which repositories satisfy the rules by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"minder profile status list --name my-first-profile --detailed\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At the moment, the ",(0,i.jsx)(n.code,{children:"profile status list"})," with the ",(0,i.jsx)(n.code,{children:"--detailed"})," flag lists all the repositories that match the rules.\nTo get a more detailed view of the profile status, use the ",(0,i.jsx)(n.code,{children:"-o json"})," flag to get the output in JSON format and then\nfilter the output using ",(0,i.jsx)(n.code,{children:"jq"}),". For example, to get all rules that pertain to the repository ",(0,i.jsx)(n.code,{children:"minder"})," and have failed,\nrun the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'minder profile status list --name stacklok-remediate-profile -d -ojson 2>/dev/null | jq  -C \'.ruleEvaluationStatus | map(select(.entityInfo.repo_name == "minder" and .status == "failure"))\'\n'})}),"\n",(0,i.jsx)(n.h2,{id:"defining-rule-names-in-profiles",children:"Defining Rule Names in Profiles"}),"\n",(0,i.jsx)(n.p,{children:"In Minder profiles, rules are identified by their type and, optionally, a unique name."}),"\n",(0,i.jsx)(n.h3,{id:"rule-types-vs-rule-names",children:"Rule Types vs Rule Names"}),"\n",(0,i.jsx)(n.p,{children:"Rule types are mandatory and refer to the kind of rule being applied. Rule names, on the other hand, are optional\nidentifiers that become crucial when multiple rules of the same type exist under an entity."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'repository:\n  - type: secret_scanning\n    name: "secret_scanning_github"\n    def:\n      enabled: true\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, ",(0,i.jsx)(n.code,{children:"secret_scanning"})," is the rule type and ",(0,i.jsx)(n.code,{children:"secret_scanning_github"})," is the rule name."]}),"\n",(0,i.jsx)(n.h3,{id:"when-are-rule-names-mandatory",children:"When are Rule Names Mandatory?"}),"\n",(0,i.jsx)(n.p,{children:"If you're using multiple rules of the same type under an entity, each rule must have a unique name. This helps\ndistinguish between rules and understand their specific purpose."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'repository:\n  - type: secret_scanning\n    name: "secret_scanning_github"\n    def:\n      enabled: true\n  - type: secret_scanning\n    name: "secret_scanning_github_2"\n    def:\n      enabled: false\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here, we have two rules of the same type ",(0,i.jsx)(n.code,{children:"secret_scanning"})," under the ",(0,i.jsx)(n.code,{children:"repository"})," entity. Each rule has a unique name."]}),"\n",(0,i.jsx)(n.h3,{id:"uniqueness-of-rule-names",children:"Uniqueness of Rule Names"}),"\n",(0,i.jsx)(n.p,{children:"No two rules, whether of the same type or different types, can have the same name under an entity. This avoids\nconfusion and ensures each rule can be individually managed."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'repository: # Would return an error while creating\n  - type: secret_scanning\n    name: "protect_github"\n    def:\n      enabled: true\n  - type: secret_push_protection\n    name: "protect_github"\n    def:\n      enabled: false\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the above used example, even though the rules are of different types (",(0,i.jsx)(n.code,{children:"secret_scanning"})," and ",(0,i.jsx)(n.code,{children:"secret_push_protection"}),"),\nMinder will return an error while creating this profile as rule names are same under the same entity.\nYou may use same rule names under different entities (repository, artifacts, etc.)"]}),"\n",(0,i.jsx)(n.p,{children:"Rule name should not match any rule type, except its own rule type. If a rule name matches its own rule type, it should\nnot conflict with any other rule name under the same entity, including default rule names. Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repository: # Would return an error while creating\n  - type: dependabot_configured\n    name: \"dependabot_configured\"\n    def:\n      package_ecosystem: gomod\n      schedule_interval: daily\n      apply_if_file: go.mod\n  - type: dependabot_configured # default 'name' would be 'dependabot_configured'\n    def:\n      package_ecosystem: npm\n      schedule_interval: daily\n      apply_if_file: docs/package.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above used example, even though the rules names appear different visually, Minder will return an error while\ncreating this profile as the rule name for ",(0,i.jsx)(n.code,{children:"npm"})," rule would be ",(0,i.jsx)(n.code,{children:"dependabot_configured"})," internally, which is same as\nthe explicit name of the ",(0,i.jsx)(n.code,{children:"gomod"})," rule."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Consider a profile with two ",(0,i.jsx)(n.code,{children:"dependabot_configured"})," rules under the ",(0,i.jsx)(n.code,{children:"repository"}),' entity. The first rule has a unique\nname, "Dependabot Configured for GoLang". The second rule doesn\'t have a name, which is acceptable as Minder would\nadd rule type as the default name for the rule.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"repository:\n  - type: dependabot_configured\n    name: \"Dependabot Configured for GoLang\"\n    def:\n      package_ecosystem: gomod\n      schedule_interval: daily\n      apply_if_file: go.mod\n  - type: dependabot_configured # default 'name' would be 'dependabot_configured'\n    def:\n      package_ecosystem: npm\n      schedule_interval: daily\n      apply_if_file: docs/package.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can find the rule definitions used above and many profile examples at\n",(0,i.jsx)(n.a,{href:"https://github.com/mindersec/minder-rules-and-profiles",children:"minder-rules-and-profiles"})," repository."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);