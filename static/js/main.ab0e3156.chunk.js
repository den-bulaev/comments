(this.webpackJsonpcomments=this.webpackJsonpcomments||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(4),i=n.n(c),r=(n(9),n(2)),o=function(e,t){return fetch("https://jordan.ashton.fashion/api/"+e,t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},l=function(e,t,n){return function(e,t,n){var a={method:"POST",body:JSON.stringify({name:t,text:n}),headers:{"Content-type":"application/json; charset=UTF-8"}};return o(e,a)}("goods/".concat(e,"/comments"),t,n)},m=function(e){return t="goods/".concat(e,"/comments"),o(t,{method:"GET"});var t},j=(n(10),n(0)),b=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(r.a)(c,2),o=i[0],m=i[1];return Object(j.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),l(30,n,o),s(""),m("")},children:[Object(j.jsx)("input",{type:"text",className:"input is-primary",name:"name",placeholder:"Type name",required:!0,value:n,onChange:function(e){var t=e.target.value;s(t)}}),Object(j.jsx)("textarea",{className:"textarea is-primary",name:"comment",placeholder:"Type comment",required:!0,value:o,onChange:function(e){var t=e.target.value;m(t)}}),Object(j.jsx)("button",{type:"submit",className:"button is-primary Form--button",children:"Add"})]})},u=s.a.memo(b),p=(n(12),function(e){var t=e.comments;return Object(j.jsx)("ul",{className:"Comments",children:t.map((function(e){var t=e.id,n=e.name,a=e.text;return Object(j.jsxs)("li",{className:"box Comments__item",children:[Object(j.jsxs)("p",{className:"block",children:[Object(j.jsx)("strong",{className:"has-text-primary",children:"Name: "}),Object(j.jsx)("span",{children:n})]}),Object(j.jsx)("strong",{className:"has-text-primary",children:"Text:"}),Object(j.jsx)("p",{className:"block",children:a})]},t)}))})}),h=s.a.memo(p),d=(n(13),function(){return Object(j.jsxs)("nav",{className:"pagination Navbar",role:"navigation","aria-label":"pagination",children:[Object(j.jsx)("a",{className:"pagination-previous",children:"Previous"}),Object(j.jsx)("a",{className:"pagination-next",children:"Next page"}),Object(j.jsxs)("ul",{className:"pagination-list",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"pagination-link","aria-label":"Goto page 1",children:"1"})}),Object(j.jsx)("li",{children:Object(j.jsx)("span",{className:"pagination-ellipsis",children:"\u2026"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"pagination-link is-current","aria-label":"Page 46","aria-current":"page",children:"46"})}),Object(j.jsx)("li",{children:Object(j.jsx)("span",{className:"pagination-ellipsis",children:"\u2026"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"pagination-link","aria-label":"Goto page 86",children:"86"})})]})]})}),x=s.a.memo(d);n(14);var O=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){m(30).then((function(e){return s(e)}))}),[]),Object(j.jsxs)("main",{className:"App",children:[Object(j.jsx)("h1",{className:"title is-1 has-text-primary",children:"Simple app"}),Object(j.jsxs)("section",{className:"section App__container",children:[Object(j.jsxs)("div",{className:"App__block",children:[Object(j.jsx)("h2",{className:"subtitle is-2 has-text-primary",children:"Add new comment"}),Object(j.jsx)(u,{})]}),Object(j.jsx)("div",{className:"App__block",children:n.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"subtitle is-2 has-text-primary",children:"Comments"}),Object(j.jsx)(h,{comments:n}),Object(j.jsx)("button",{type:"button",className:"button is-primary App__show-more-button",children:"Show more"}),Object(j.jsx)(x,{})]})})]})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.ab0e3156.chunk.js.map