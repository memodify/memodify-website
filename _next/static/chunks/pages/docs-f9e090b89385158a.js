(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{8477:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return s(3622)}])},4327:function(e,n,s){"use strict";s.d(n,{Z:function(){return t}});var a=s(5893);function t(e){let{children:n,frontmatter:s}=e;return(0,a.jsxs)("article",{children:[s.title?(0,a.jsxs)(a.Fragment,{children:["Written by ",s.author," for ",s.title]}):void 0,(0,a.jsx)("section",{children:n}),s.created?(0,a.jsxs)(a.Fragment,{children:["created_at: ",s.created]}):void 0]})}},3622:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return b},default:function(){return w}});var a=s(5893),t=s(3544),l=s(1664),c=s.n(l),r=s(7294),i=s(2066),o=s(300),d=s(1151),p=s(4327);function h(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a",pre:"pre",span:"span",h3:"h3"},(0,d.ah)(),e.components);return(0,a.jsxs)(p.Z,{frontmatter:{},children:[(0,a.jsx)(n.h1,{id:"advanced",children:"Advanced"}),(0,a.jsx)(n.h2,{id:"save-and-load",children:"Save and load"}),(0,a.jsx)(n.p,{children:"Memodify allows you to save your data as a JSON file and load it."}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"file:save"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"file:load"})}),"\n"]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"file:save"})," opens a dialog then you can save your all documents as a new file\nor replace an existing file."]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"file:load"})," also opens a dialog and you can choose a file to be loaded."]}),(0,a.jsx)(n.p,{children:"Please note the format of saved JSON files is not stable\nand no data conversion is supported for now."}),(0,a.jsx)(n.h2,{id:"couchdb",children:"CouchDB"}),(0,a.jsx)(n.p,{children:"You can backup your data into CouchDB and restore it from there."}),(0,a.jsxs)(n.p,{children:["Go to ",(0,a.jsx)(n.code,{children:"Settings"})," -> ",(0,a.jsx)(n.code,{children:"Datbase: CouchDB URL"}),"."]}),(0,a.jsxs)(n.p,{children:["Input ",(0,a.jsx)(n.a,{href:"http://admin:password@localhost:5984/memodify",children:"http://admin:password@localhost:5984/memodify"}),"."]}),(0,a.jsx)(n.pre,{className:"language-bash",children:(0,a.jsxs)(n.code,{className:"language-bash",children:["$ ",(0,a.jsx)(n.span,{className:"token function",children:"docker"})," run ",(0,a.jsx)(n.span,{className:"token punctuation",children:"\\"}),"\n    -e ",(0,a.jsx)(n.span,{className:"token assign-left variable",children:"COUCHDB_USER"}),(0,a.jsx)(n.span,{className:"token operator",children:"="}),"admin ",(0,a.jsx)(n.span,{className:"token punctuation",children:"\\"}),"\n    -e ",(0,a.jsx)(n.span,{className:"token assign-left variable",children:"COUCHDB_PASSWORD"}),(0,a.jsx)(n.span,{className:"token operator",children:"="}),"password ",(0,a.jsx)(n.span,{className:"token punctuation",children:"\\"}),"\n    -p ",(0,a.jsx)(n.span,{className:"token number",children:"5984"}),":5984 ",(0,a.jsx)(n.span,{className:"token punctuation",children:"\\"}),"\n    -v ",(0,a.jsxs)(n.span,{className:"token variable",children:[(0,a.jsx)(n.span,{className:"token variable",children:"`"}),(0,a.jsx)(n.span,{className:"token builtin class-name",children:"pwd"}),(0,a.jsx)(n.span,{className:"token variable",children:"`"})]}),"/couchdb:/opt/couchdb/data ",(0,a.jsx)(n.span,{className:"token punctuation",children:"\\"}),"\n    couchdb:3.3.1\n"]})}),(0,a.jsx)(n.pre,{className:"language-bash",children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ npx add-cors-to-couchdb http://admin:password@localhost:5984\n"})}),(0,a.jsx)(n.p,{children:"Then you can backup your all documnets for memodify."}),(0,a.jsxs)(n.p,{children:["Open the command palette with ",(0,a.jsx)(n.code,{children:"Shift + command + P"}),", then select ",(0,a.jsx)(n.code,{children:"file:backup"}),"."]}),(0,a.jsx)(n.h3,{id:"conflict-resolution",children:"Conflict resolution"}),(0,a.jsxs)(n.p,{children:["Please note memodify doesn't resolve conflicts automatically.\nYou have to resolve them by yourself. In order to do that,\nyou can use CouchDB admin console. It's ",(0,a.jsx)(n.a,{href:"http://localhost:5984/_utils",children:"http://localhost:5984/_utils"})," if your CouchDB is running at your own host."]})]})}let u=()=>{let e=Object.assign({span:"span"},(0,d.ah)());return(0,a.jsx)(e.span,{style:{backgroundColor:"#909090",color:"white",padding:"2px 4px",fontSize:"77%",fontWeight:"bold",borderRadius:"2px"},children:"app-only"})};function x(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li"},(0,d.ah)(),e.components);return(0,a.jsxs)(p.Z,{frontmatter:{},children:[(0,a.jsx)(n.h1,{id:"feature-list",children:"Feature List"}),(0,a.jsx)(n.h2,{id:"implemented",children:"Implemented"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/memodify/memodify.github.io/releases/tag/v0.0.0-alpha.18",children:"v0.0.0-alpha.18"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Noting","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Title."}),"\n",(0,a.jsxs)(n.li,{children:["Body text by monaco editor.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Minimap."}),"\n",(0,a.jsx)(n.li,{children:"Line number."}),"\n",(0,a.jsx)(n.li,{children:"Folding as Markdown."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Attach images by drag & drop. Save it as a file later."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Label","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Associate multiple labels to a note."}),"\n",(0,a.jsx)(n.li,{children:"Label color."}),"\n",(0,a.jsxs)(n.li,{children:["Label editor","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"filter with name."}),"\n",(0,a.jsx)(n.li,{children:"Display labels in list or tile."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Role","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Apply a role."}),"\n",(0,a.jsx)(n.li,{children:"Role color."}),"\n",(0,a.jsxs)(n.li,{children:["Role editor.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Description in markdown."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Filter notes","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"By label."}),"\n",(0,a.jsx)(n.li,{children:"By role."}),"\n",(0,a.jsx)(n.li,{children:"By title (regular expression)."}),"\n",(0,a.jsxs)(n.li,{children:["By status","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"star, like, completed, trashed."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["List notes","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"List item: full, normal and simple."}),"\n",(0,a.jsx)(n.li,{children:"Sort by creation or update time."}),"\n",(0,a.jsx)(n.li,{children:"Sort order by asc or desc."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Text Search by lunr"}),"\n",(0,a.jsxs)(n.li,{children:["Editor","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Save folding state."}),"\n",(0,a.jsx)(n.li,{children:"Surround with <detail> by F1 menu."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Preivew","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Rendering MDX."}),"\n",(0,a.jsx)(n.li,{children:"GitHub Flavored Markdown."}),"\n",(0,a.jsx)(n.li,{children:"Syntax Highlighting."}),"\n",(0,a.jsxs)(n.li,{children:["Auto replacement of URL.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("a",{id:"replaceurlprivaterepository"}),"experimental: replacement for GitHub private repository issues. (need your GitHub token)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Math expression with KaTeX."}),"\n",(0,a.jsx)(n.li,{children:"Show web site <title> instead of raw URL if possible."}),"\n",(0,a.jsx)(n.li,{children:"Internal link."}),"\n",(0,a.jsx)(n.li,{children:"Chart.js."}),"\n",(0,a.jsx)(n.li,{children:"Mermaid."}),"\n",(0,a.jsx)(n.li,{children:"Mini preview."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Outline view."}),"\n",(0,a.jsxs)(n.li,{children:["Export / Import","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Export all notes including attachments as JSON file."}),"\n",(0,a.jsx)(n.li,{children:"Import memodify file."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Undo/Redo"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/#command-palette",children:"Command palette interface"}),".","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Customize if labels are shown."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Note palette interface."}),"\n",(0,a.jsxs)(n.li,{children:["Daily note as local file in the vault directory. ",(0,a.jsx)(u,{})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/docs/#couchdb",children:"Backup and restore with CouchDB"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Zen mode."}),"\n",(0,a.jsx)(n.li,{children:"Theme."}),"\n",(0,a.jsx)(n.li,{children:"Dark mode."}),"\n",(0,a.jsxs)(n.li,{children:["Cryptography.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Encrypt note body and decrypt it."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Time management with Pomodoro technique."}),"\n",(0,a.jsx)(n.li,{children:"experimental: ChatGPT integration with ad-hoc prompt."}),"\n"]}),(0,a.jsx)(n.p,{children:"TBD"})]})}function m(e){let n=Object.assign({h1:"h1",p:"p"},(0,d.ah)(),e.components);return(0,a.jsxs)(p.Z,{frontmatter:{},children:[(0,a.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),(0,a.jsx)(n.p,{children:"You can quickly get started with the in-broswer memodify.\nPlease visit"}),(0,a.jsx)("a",{href:"//memodify.app/",target:"application",className:"bg-gray-100 p-1 rounded text-base hover:drop-shadow-sm hover:bg-gray-200",children:"https://memodify.app"}),(0,a.jsx)(n.p,{children:"You will see an alert at left-bottom and you can import a sample data set there by clicking a button to import.\nThe data set has some notes, labels and roles as a manual and samples."}),(0,a.jsx)(n.p,{children:"It's easy to start using memodify with private bwowsing/incognito mode because the imported data has gone when you close the window."})]})}function j(e){let{children:n,style:s}=e;return(0,a.jsx)("span",{style:{backgroundColor:"gray",color:"white",fontWeight:"bold",padding:"2px 4px",borderRadius:"2px",fontSize:"90%",...s},children:n})}function k(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",h3:"h3",pre:"pre",code:"code",span:"span",blockquote:"blockquote"},(0,d.ah)(),e.components);return(0,a.jsxs)(p.Z,{frontmatter:{},children:[(0,a.jsx)(n.h1,{id:"remarkable-features",children:"Remarkable Features"}),(0,a.jsx)(n.h2,{id:"mdx",children:"MDX"}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://mdxjs.com/",children:"MDX"})," allows you to use JSX in your markdown content.\nYou can define your components in your notes."]}),(0,a.jsx)(n.p,{children:"Memodify also has builtin components which support Chart.js and Mermaid.\nYou can easily embed charts and diagrams into your notes."}),(0,a.jsx)("img",{width:"66%",src:"/mdx.png"}),(0,a.jsx)(n.h3,{id:"charts-chartjs",children:"Charts (Chart.js)"}),(0,a.jsx)(n.p,{children:"You can embed a few types of charts supported by Charts.js.\nNow Bar, Line and Scatter charts are supported as builtin component."}),(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)("img",{width:"33%",src:"/bar-chart.png",className:"rounded"}),(0,a.jsx)("img",{width:"33%",src:"/line-chart.png",className:"ml-1 rounded"})]}),(0,a.jsxs)("details",{children:[(0,a.jsx)("summary",{children:"Bar chart sample"}),(0,a.jsx)(n.pre,{className:"language-jsx",children:(0,a.jsxs)(n.code,{className:"language-jsx",children:[(0,a.jsx)(n.span,{className:"token keyword module",children:"export"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," width ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token number",children:"256"}),(0,a.jsx)(n.span,{className:"token operator",children:"*"}),(0,a.jsx)(n.span,{className:"token number",children:"1.414"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(n.span,{className:"token keyword module",children:"export"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," height ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token number",children:"256"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(n.span,{className:"token keyword module",children:"export"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," style ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"})," ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"backgroundColor"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"white"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"padding"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"0 4px"'})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(n.span,{className:"token keyword module",children:"export"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," options ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"responsive"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token boolean",children:"false"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"maintainAspectRatio"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token boolean",children:"false"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"plugins"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n    ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"legend"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"})," ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"position"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"bottom"'})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"title"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"})," ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"display"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token boolean",children:"true"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"text"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"Chart.js chart"'})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n",(0,a.jsx)(n.span,{className:"token keyword module",children:"export"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," labels ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"["}),(0,a.jsx)(n.span,{className:"token string",children:'"January"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token string",children:'"February"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token string",children:'"March"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token string",children:'"April"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token string",children:'"May"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token string",children:'"June"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,a.jsx)(n.span,{className:"token string",children:'"July"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(n.span,{className:"token keyword module",children:"export"})," ",(0,a.jsx)(n.span,{className:"token keyword",children:"const"})," barData ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n  labels",(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"datasets"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"["}),"\n    ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"label"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"Dataset 1"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"data"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," labels",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"map"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(n.span,{className:"token known-class-name class-name",children:"Math"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"random"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"*"})," ",(0,a.jsx)(n.span,{className:"token number",children:"100"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"backgroundColor"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"rgba(255, 99, 132, 0.5)"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n      ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"label"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"Dataset 2"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"data"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," labels",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"map"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token arrow operator",children:"=>"})," ",(0,a.jsx)(n.span,{className:"token known-class-name class-name",children:"Math"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"random"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"*"})," ",(0,a.jsx)(n.span,{className:"token number",children:"100"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n      ",(0,a.jsx)(n.span,{className:"token literal-property property",children:"backgroundColor"}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"rgba(53, 162, 235, 0.5)"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n    ",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(n.span,{className:"token punctuation",children:"]"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsxs)(n.span,{className:"token tag",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"<"}),"chartjs.Bar"]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"style"}),(0,a.jsxs)(n.span,{className:"token script language-javascript",children:[(0,a.jsx)(n.span,{className:"token script-punctuation punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"style",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"width"}),(0,a.jsxs)(n.span,{className:"token script language-javascript",children:[(0,a.jsx)(n.span,{className:"token script-punctuation punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"width",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"height"}),(0,a.jsxs)(n.span,{className:"token script language-javascript",children:[(0,a.jsx)(n.span,{className:"token script-punctuation punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"height",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"options"}),(0,a.jsxs)(n.span,{className:"token script language-javascript",children:[(0,a.jsx)(n.span,{className:"token script-punctuation punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"options",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(n.span,{className:"token attr-name",children:"data"}),(0,a.jsxs)(n.span,{className:"token script language-javascript",children:[(0,a.jsx)(n.span,{className:"token script-punctuation punctuation",children:"="}),(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"barData",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"/>"})]}),"\n"]})})]}),(0,a.jsx)(n.h3,{id:"diagrams-mermaid",children:"Diagrams (Mermaid)"}),(0,a.jsxs)(n.p,{children:["You can embed diagrams supported by ",(0,a.jsx)(n.a,{href:"https://mermaid.js.org/",children:"Mermaid"}),"."]}),(0,a.jsx)("img",{width:"77%",src:"/mermaid-sample.png",className:"rounded"}),(0,a.jsx)(n.h3,{id:"caution",children:"Caution"}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(j,{style:{backgroundColor:"tomato"},children:"Caution"}),"\nWhen using MDX feature in Memodify, it is important to only use content from trusted\nsources. MDX can potentially execute malicious code, known as self-XSS, which can\ncompromise your device's security. I recommend only using MDX with content that you\nhave personally created or obtained from a trusted source. Use this feature at your\nown risk, and always be vigilant when inputting or importing content into the MDX\neditor."]}),(0,a.jsx)(n.h2,{id:"math-expressions-katex",children:"Math expressions (KaTeX)"}),(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"https://katex.org/",children:"KaTeX"})," to render math expressions."]}),(0,a.jsx)("img",{width:"77%",src:"/katex-sample.png",className:"rounded"}),(0,a.jsx)(n.h2,{id:"syntax-highlighting",children:"Syntax Highlighting"}),(0,a.jsxs)(n.p,{children:["Syntax highlighting is supported with ",(0,a.jsx)(n.a,{href:"https://prismjs.com/",children:"Prism"}),".\nLots of languages are recognized. Here is ",(0,a.jsx)(n.a,{href:"https://prismjs.com/index.html#supported-languages",children:"the supported languages"}),"."]}),(0,a.jsx)(n.pre,{className:"language-markdown",children:(0,a.jsxs)(n.code,{className:"language-markdown",children:[(0,a.jsxs)(n.span,{className:"token code",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"```"}),(0,a.jsx)(n.span,{className:"token code-language",children:"javascript"}),"\n",(0,a.jsxs)(n.span,{className:"token code-block language-javascript",children:[(0,a.jsx)(n.span,{className:"token keyword",children:"function"})," ",(0,a.jsx)(n.span,{className:"token function",children:"main"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(n.span,{className:"token console class-name",children:"console"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token method function property-access",children:"log"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token string",children:'"hello, world."'}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:";"}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"```"})]}),"\n"]})}),(0,a.jsx)(n.pre,{className:"language-markdown",children:(0,a.jsxs)(n.code,{className:"language-markdown",children:[(0,a.jsxs)(n.span,{className:"token code",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"```"}),(0,a.jsx)(n.span,{className:"token code-language",children:"yaml"}),"\n",(0,a.jsxs)(n.span,{className:"token code-block language-yaml",children:[(0,a.jsx)(n.span,{className:"token key atrule",children:"name"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"})," Run a workflow\n",(0,a.jsx)(n.span,{className:"token key atrule",children:"on"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n  ",(0,a.jsx)(n.span,{className:"token key atrule",children:"push"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n    ",(0,a.jsx)(n.span,{className:"token key atrule",children:"branches"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n      ",(0,a.jsx)(n.span,{className:"token punctuation",children:"-"})," master\n      ",(0,a.jsx)(n.span,{className:"token punctuation",children:"-"})," release/",(0,a.jsx)(n.span,{className:"token punctuation",children:"["}),"0",(0,a.jsx)(n.span,{className:"token punctuation",children:"-"}),(0,a.jsx)(n.span,{className:"token number",children:"9"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"]"}),"+\\.",(0,a.jsx)(n.span,{className:"token punctuation",children:"["}),"0",(0,a.jsx)(n.span,{className:"token punctuation",children:"-"}),(0,a.jsx)(n.span,{className:"token number",children:"9"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"]"}),"+\n",(0,a.jsx)(n.span,{className:"token key atrule",children:"env"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n  ",(0,a.jsx)(n.span,{className:"token key atrule",children:"SLACK_CHANNEL"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"})," general"]}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"```"})]}),"\n"]})}),(0,a.jsx)(n.h2,{id:"palette-interface",children:"Palette Interface"}),(0,a.jsx)(n.h3,{id:"command-palette",children:"Command palette"}),(0,a.jsxs)(n.p,{children:["You can use command palette with ",(0,a.jsx)(n.code,{children:"command + shift + p"}),"."]}),(0,a.jsx)("img",{width:"66%",src:"/focus-command-palette.png"}),(0,a.jsx)(n.h3,{id:"note-palette",children:"Note palette"}),(0,a.jsxs)(n.p,{children:["You can focus on a note with note palette. It's activated with ",(0,a.jsx)(n.code,{children:"command + p"}),"."]}),(0,a.jsx)("img",{width:"66%",src:"/note-palette.png"}),(0,a.jsx)(n.h2,{id:"per-note-encryption",children:"Per-note encryption"}),(0,a.jsx)(n.p,{children:"It's supported to encrypt the focused note body."}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"crypto:encrypt note body"})," opens a dialog and you can enter a passphrase.\nIt converts the body to a JSON object like this."]}),(0,a.jsx)(n.pre,{className:"language-javascript",children:(0,a.jsxs)(n.code,{className:"language-javascript",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n  ",(0,a.jsx)(n.span,{className:"token string-property property",children:'"ciphertext"'}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"dtsLElgKr9p4r5L8xZoiOw=="'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(n.span,{className:"token string-property property",children:'"iv"'}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"5aL3VtMJsSRjrYaJ"'}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n  ",(0,a.jsx)(n.span,{className:"token string-property property",children:'"salt"'}),(0,a.jsx)(n.span,{className:"token operator",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"jOV7M/sQcJaxIB3xj+uaYw=="'}),"\n",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"crypto:decrypt note body"})," decrypt it."]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(j,{children:"Note"})," Currenly the preview shows an error like this\nbecause ",(0,a.jsx)(n.code,{children:"{...}"})," is recognized as an MDX expression. I'm going to suppress this in the future."]}),(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"2:15 Could not parse expression with acorn: Unexpected content after expression"}),"\n"]}),(0,a.jsx)(n.h2,{id:"pomodoro-dialog",children:"Pomodoro dialog"}),(0,a.jsxs)(n.p,{children:["You can open a pomodoro dialog with ",(0,a.jsx)(n.code,{children:"pomodoro:open dialog"})," palette command.\nStart, pause and cancel the timer with the buttons.\nSucceeded and canceled pomodoros are recorded for a day."]}),(0,a.jsx)("img",{width:"48%",src:"/pomodoro-dialog-sample.png",className:"rounded"})]})}function N(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",span:"span",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,d.ah)(),e.components);return(0,a.jsxs)(p.Z,{frontmatter:{},children:[(0,a.jsx)(n.h1,{id:"settings",children:"Settings"}),(0,a.jsx)(n.h2,{id:"configyaml",children:"config.yaml"}),(0,a.jsxs)(n.p,{children:["You can put a configuration file to give some values like secrets to the Memodify application.\n",(0,a.jsx)(n.code,{children:"~/.config/memodify/config.yaml"})]}),(0,a.jsx)(n.pre,{className:"language-yaml",children:(0,a.jsxs)(n.code,{className:"language-yaml",children:[(0,a.jsx)(n.span,{className:"token key atrule",children:"github"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n  ",(0,a.jsx)(n.span,{className:"token comment",children:"# https://github.com/settings/tokens"}),"\n  ",(0,a.jsx)(n.span,{className:"token key atrule",children:"token"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"ghp_************************************"'}),"\n\n",(0,a.jsx)(n.span,{className:"token key atrule",children:"openai"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n  ",(0,a.jsx)(n.span,{className:"token comment",children:"# https://platform.openai.com/account/api-keys"}),"\n  ",(0,a.jsx)(n.span,{className:"token key atrule",children:"api_key"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"})," ",(0,a.jsx)(n.span,{className:"token string",children:'"sk-************************************************"'}),"\n"]})}),(0,a.jsx)(n.h3,{id:"supported-items",children:"Supported items"}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Item"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"github.token"})}),(0,a.jsxs)(n.td,{children:["Used to retrieve ",(0,a.jsx)("a",{href:"#replaceurlprivaterepository",children:"issue title in private repositories"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"openai.api_key"})}),(0,a.jsxs)(n.td,{children:["Used for ChatGPT feature.",(0,a.jsx)("br",{})," ",(0,a.jsx)("a",{href:"/blog/chatgpt-integration/",children:"This blog entry"})," is for an experimental feature for ChatGPT."]})]})]})]})]})}s(6294);let g=e=>(0,a.jsxs)("div",{id:"docs",children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)(f,{...e}),(0,a.jsx)(i.Z,{})]}),y=[function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(m,e)})):m(e)},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(k,e)})):k(e)},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(N,e)})):N(e)},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(x,e)})):x(e)}],f=e=>{let n=y.map(e=>e({}).props.children).flat(),s=n.filter(e=>e.type.match).filter(e=>e.type.match(/^h[1-6]$/)).map(e=>({level:parseInt(e.type.match(/^h([1-6])$/)[1]),id:e.props.id,text:e.props.children})),t=e=>{switch(e){case 1:return["h1","[&:not(:nth-of-type(1))]:mt-2"];case 2:return["h2","ml-3","[&>li.h2:not(:nth-of-type(1))]:mt-2"];case 3:return["ml-6"]}return[]};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row text-gray-700",children:[(0,a.jsx)("div",{className:"md:w-1/5 mb-10 [&_*]:dark:text-gray-500 ",children:(0,a.jsxs)("ul",{className:"flex flex-col md:text-sm [&>*.h1]:font-semibold [&>li]:leading-[1.5rem]",style:{position:"sticky",top:"72px"},children:[s.map(e=>(0,a.jsx)(v,{id:e.id,value:e.text,className:t(e.level).join(" ")},e.id)),(0,a.jsxs)("div",{className:"md:text-xs mt-3",children:["built at ",e.meta.builtAt.toISOString()]})]})}),(0,a.jsx)("div",{className:"md:w-4/5",children:y.map(e=>[(0,r.createElement)(e)]).map((e,n)=>{let[s]=e;return(0,a.jsx)("section",{className:'prose first:pt-0 pt-24 [&_code[class^="language-"]]:text-[9pt] [&_code[class^="language-"]]:leading-none [&_pre[class^="language-"]]:leading-none [&_*]:dark:text-gray-500 [&_summary]:dark:text-gray-400 [&_h1]:dark:text-gray-300 [&_h2]:dark:text-gray-300 [&_h3]:dark:text-gray-300 [&_p>code]:dark:text-gray-300 ',children:s},"section".concat(n))})})]})})};var b=!0,w=(0,t.withSuperJSONPage)(g);function v(e){let{value:n,id:s,className:t,children:l}=e;return(0,a.jsx)("li",{className:t,children:(0,a.jsxs)(c(),{href:"#".concat(s),children:[n,l]})})}},6294:function(){},1151:function(e,n,s){"use strict";s.d(n,{ah:function(){return l}});var a=s(7294);let t=a.createContext({});function l(e){let n=a.useContext(t);return a.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[487,544,836,774,888,179],function(){return e(e.s=8477)}),_N_E=e.O()}]);