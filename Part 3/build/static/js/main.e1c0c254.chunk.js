(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),s=n(15),i=n.n(s),r=n(6),l=n(4),u=n(3),o=n.n(u),j=function(e){var t=e.candidate;return Object(c.jsx)("div",{className:"element",children:Object(c.jsxs)("li",{className:"text",children:[" ",t.name," ",t.phoneNumber]})})},b=(n(39),function(e){var t=e.message;return null==={message:t}?Object(c.jsx)("div",{className:"message"}):Object(c.jsxs)("div",{className:"message",children:[" ",t," "]})}),d="/api/persons",m=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];Object(a.useEffect)((function(){o.a.get(d).then((function(e){console.log("promise fulfilled"),s(e.data)}))}),[]);var i=Object(a.useState)(""),u=Object(l.a)(i,2),m=u[0],f=u[1],h=Object(a.useState)(""),O=Object(l.a)(h,2),p=O[0],x=O[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),N=g[0],w=g[1],S=Object(a.useState)(null),y=Object(l.a)(S,2),C=y[0],k=y[1],E=n.filter((function(e){return e.name.toLowerCase().includes(N.trim().toLowerCase())}));return Object(c.jsxs)("div",{className:"background",children:[Object(c.jsx)("h2",{className:"heading",children:" PhoneBook "}),Object(c.jsx)(b,{message:C}),Object(c.jsxs)("p",{className:"font1",children:[" Filter shown with ",Object(c.jsx)("input",{type:"text",value:N,onChange:function(e){w(e.target.value)}})," "]}),E.length>0?Object(c.jsx)("ul",{children:E.map((function(e,t){return Object(c.jsxs)("li",{className:"text",children:[" ",e.name," "]},t)}))}):Object(c.jsx)("div",{children:" "}),Object(c.jsxs)("form",{className:"form-input",onSubmit:function(e){e.preventDefault();for(var t={name:m,phoneNumber:p},c=!1,a=0;a<n.length;a++)n[a].name===m&&(c=!0);if(!0===c){var i=window.confirm("".concat(m," already present, replace number with new one ?")),l=n.find((function(e){return e.name===m})),u=l.id;if(!0===i){var j=Object(r.a)(Object(r.a)({},l),{},{phoneNumber:p});o.a.put(d+"/"+u.toString(),j).then((function(e){s(n.map((function(t){return t.id!==u?t:e.data}))),f(""),x("")})).catch((function(e){k(e),f(""),x("")}))}else f(""),x("")}else o.a.post(d,t).then((function(e){console.log(e),s(n.concat(t)),f(""),x(""),k("Number Added"),setTimeout((function(){k(null)}),5e3)})).catch((function(e){var t=e.response.data.error;f(""),x(""),k(t),setTimeout((function(){k(null)}),5e3)}))},children:[Object(c.jsx)("label",{className:"label",children:" Name "}),Object(c.jsx)("input",{value:m,onChange:function(e){f(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{className:"label",children:" PhoneNumber "}),Object(c.jsx)("input",{value:p,onChange:function(e){x(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",className:"btn",children:" Add "})]}),Object(c.jsx)("h2",{className:"heading1",children:" Numbers "}),Object(c.jsx)("ul",{children:n.map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{candidate:e})," ",Object(c.jsx)("button",{className:"btn",onClick:function(){return function(e){if(!0===window.confirm("Delete ".concat(e.name," ?"))){var t=e.id,c=e.name;o.a.delete(d+"/"+t.toString()).then((function(e){return e.data})).then((function(){s(n.filter((function(e){return e.id!==t}))),k("".concat(c," was deleted")),setTimeout((function(){k(null)}),5e3)}))}else s(n)}(e)},children:" DELETE "})]},t)}))})]})};i.a.render(Object(c.jsx)(m,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e1c0c254.chunk.js.map