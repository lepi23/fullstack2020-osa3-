(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{17:function(e,n,t){e.exports=t(41)},22:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),u=t.n(c),o=(t(22),t(6)),l=t(3),i=function(e){var n=e.person,t=e.handleClick;return r.a.createElement("tr",null,r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:t,name:n.name,id:n.id},"delete")))},s=function(e){var n=e.numbers,t=e.handleClick;return r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(i,{person:e,key:e.id,handleClick:t})})))},m=function(e){var n=e.handleNameChange,t=e.handleNumberChange,a=e.addPerson,c=e.newNumber,u=e.newName;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:u,onChange:n})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:t})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.filterWord,t=e.handleFilterChange;return r.a.createElement("form",null,r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t})))},f=t(2),h=t.n(f),p=t(4),b=t(5),v=t.n(b),w="http://localhost:3001/api/persons",E={getAll:function(){var e=Object(p.a)(h.a.mark((function e(){var n,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.a.get(w),e.next=3,n;case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(h.a.mark((function e(n){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.a.post(w,n),e.next=3,t;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),update:function(){var e=Object(p.a)(h.a.mark((function e(n,t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.a.put("".concat(w,"/").concat(n),t),e.next=3,a;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(p.a)(h.a.mark((function e(n){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.a.delete("".concat(w,"/").concat(n)),e.next=3,t;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"success"},n)},O=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1];Object(a.useEffect)((function(){E.getAll().then((function(e){c(e)}))}),[]);var u=Object(a.useState)(""),i=Object(l.a)(u,2),f=i[0],h=i[1],p=Object(a.useState)(""),b=Object(l.a)(p,2),v=b[0],w=b[1],j=Object(a.useState)(""),k=Object(l.a)(j,2),C=k[0],y=k[1],N=Object(a.useState)(!1),x=Object(l.a)(N,2),S=x[0],D=(x[1],Object(a.useState)(null)),W=Object(l.a)(D,2),A=W[0],P=W[1],B=Object(a.useState)(null),F=Object(l.a)(B,2),I=F[0],J=F[1],L=function(e){P(e),setTimeout((function(){P(null)}),1e3)},T=function(e){J(e),setTimeout((function(){J(null)}),4e3)},M=S?t:t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement(g,{message:A}),r.a.createElement(O,{message:I}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{filterWord:C,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(m,{handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){w(e.target.value)},addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).indexOf(f)>=0)if(window.confirm("".concat(f," is already on the phonebook. Do you want to add a new number?"))){var n=t.find((function(e){return e.name===f})),a=Object(o.a)(Object(o.a)({},n),{},{number:v});E.update(a.id,a).then((function(e){c(t.map((function(n){return n.id!==a.id?n:e}))),L("".concat(f," succesfully changed"))})).catch((function(e){console.log(e),T("Information of ".concat(f," has already been removed from the server"))}))}else L("".concat(f," was not changed"));else{var r={name:f,number:v};E.create(r).then((function(e){c(t.concat(e)),L("".concat(f," was added to the book"))})).catch((function(e){T("person '".concat(r.name,"' was not added succesfully\n              ").concat(e))}))}h(""),w("")},newName:f,newNumber:v}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("table",null,r.a.createElement(s,{numbers:M,handleClick:function(e){e.preventDefault();var n=e.target.name,a=e.target.id;if(window.confirm("Delete ".concat(n,"?"))){E.remove(a);var r=t.filter((function(e){return e.id.toString()!==a}));c(r)}L("".concat(n," succesfully removed"))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.cff2e6a5.chunk.js.map