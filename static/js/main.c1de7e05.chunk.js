(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{12:function(e,n,t){e.exports=t(19)},19:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),l=t(8),o=t.n(l),c=t(3),u=t(1),i=t(2);function d(){var e=Object(u.a)(["\n  max-width: 600px;\n  margin: 0 auto;\n  background-color: white;\n  border-radius: 50px;\n  margin: 100px auto;\n"]);return d=function(){return e},e}var p=i.b.div(d()),m=function(e){var n=e.children;return a.a.createElement(p,null,n)};function s(){var e=Object(u.a)(["\n  color: hsl(240, 100%, 50%);\n  padding: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n  margin: 0;\n  text-transform: lowercase;\n"]);return s=function(){return e},e}function b(){var e=Object(u.a)(["\n  text-align: center;\n  border-bottom: 2px solid hsl(199, 88%, 60%);\n"]);return b=function(){return e},e}var f=i.b.header(b()),v=i.b.header(s()),g=function(e){var n=e.title;return a.a.createElement(f,null,a.a.createElement(v,null,n))};function h(){var e=Object(u.a)(["\n  text-align: center;\n  border-top: 2px solid hsl(199, 88%, 60%);\n  color: #333;\n  font-weight: bold;\n  padding: 15px;\n"]);return h=function(){return e},e}var x=i.b.footer(h()),E=function(e){var n=e.title;return a.a.createElement(x,null,a.a.createElement("span",null,n))};function w(){var e=Object(u.a)(["\n  text-align: center;\n  background-color: white;\n  padding: 10px 30px;\n"]);return w=function(){return e},e}var j=i.b.main(w()),O=function(e){var n=e.children;return a.a.createElement(j,null,n)};function y(){var e=Object(u.a)(["\n  margin: 0 10px;\n  background-color: hsl(240, 100%, 50%);\n  color: white;\n  padding: 10px 20px;\n  text-transform: lowercase;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 0.7px;\n  border: 2px solid transparent;\n  border-radius: 20px;\n\n  &:hover {\n    background-color: white;\n    color: hsl(240, 100%, 50%);\n    border: 2px solid hsl(240, 100%, 50%);\n    cursor: pointer;\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return k=function(){return e},e}function R(){var e=Object(u.a)(["\n  border: 2px solid #ccc;\n  padding: 10px;\n  width: 100%;\n  max-width: 80px;\n  border-radius: 20px;\n"]);return R=function(){return e},e}function S(){var e=Object(u.a)(["\n  border: 2px solid #ccc;\n  padding: 10px;\n  width: 100%;\n  max-width: 80px;\n  border-radius: 20px;\n  max-width: 140px;\n"]);return S=function(){return e},e}function D(){var e=Object(u.a)(["\n  display: inline-block;\n  width: 100%;\n  max-width: 80px;\n  margin-right: 5px;\n  color: #444;\n  font-weight: bold;\n"]);return D=function(){return e},e}var C=i.b.span(D()),P=i.b.input(S()),U=i.b.select(R()),z=i.b.div(k()),F=i.b.button(y()),L=function(e){var n=e.calculateResult,t=e.setResult,l=Object(r.useState)(""),o=Object(c.a)(l,2),u=o[0],i=o[1],d=Object(r.useState)("PLN"),p=Object(c.a)(d,2),m=p[0],s=p[1],b=Object(r.useState)("EUR"),f=Object(c.a)(b,2),v=f[0],g=f[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(m,v,u)},onReset:function(e){e.preventDefault(),i(""),s("PLN"),g("EUR"),t("")}},a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(C,null,"Amount:"),a.a.createElement(P,{type:"number",name:"amount",min:"1",step:"any",required:!0,autoFocus:!0,placeholder:"Enter amount",value:u,onChange:function(e){var n=e.target;return i(n.value)}}))),a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(C,null,"From:"),a.a.createElement(U,{value:m,onChange:function(e){var n=e.target;return s(n.value)},required:!0},a.a.createElement("option",null,"PLN"),a.a.createElement("option",null,"USD"),a.a.createElement("option",null,"GBP"),a.a.createElement("option",null,"EUR"),a.a.createElement("option",null,"CHF")))),a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(C,null,"To:"),a.a.createElement(U,{value:v,onChange:function(e){var n=e.target;return g(n.value)},required:!0},a.a.createElement("option",null,"PLN"),a.a.createElement("option",null,"USD"),a.a.createElement("option",null,"GBP"),a.a.createElement("option",null,"EUR"),a.a.createElement("option",null,"CHF")))),a.a.createElement(z,null,a.a.createElement("p",null,a.a.createElement(F,null,"Convert")),a.a.createElement("p",null,a.a.createElement(F,{type:"reset"},"Reset"))))};function B(){var e=Object(u.a)(["\n  border: 2px solid #ccc;\n  padding: 10px;\n  width: 100%;\n  max-width: 80px;\n  border-radius: 20px;\n  max-width: 140px;\n"]);return B=function(){return e},e}function N(){var e=Object(u.a)(["\n  display: inline-block;\n  width: 100%;\n  max-width: 80px;\n  margin-right: 5px;\n  color: #444;\n  font-weight: bold;\n"]);return N=function(){return e},e}var q=i.b.span(N()),H=i.b.input(B()),G=function(e){var n=e.result;return a.a.createElement("p",null,a.a.createElement("label",null,a.a.createElement(q,null,"Result:"),a.a.createElement(H,{type:"number",readOnly:!0,value:n})))};function I(){var e=Object(u.a)(["\n  text-align: right;\n  font-family: monospace;\n  color: #777;\n"]);return I=function(){return e},e}var J=i.b.div(I()),W=function(){var e=function(){var e=Object(r.useState)(new Date),n=Object(c.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return a.a.createElement(J,null,"Dzisiaj jest ",function(e){return e.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"})}(e))};function A(){var e=Object(u.a)(['\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  ::after,\n  ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: "Lato", sans-serif;\n    background-image: url("https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 0 10px;\n  }\n']);return A=function(){return e},e}var K=Object(i.a)(A());var M=function(){var e=Object(r.useState)(""),n=Object(c.a)(e,2),t=n[0],l=n[1],o={PLN:1,EUR:4.39,USD:3.71,GBP:4.85,CHF:4.08};return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null),a.a.createElement(m,null,a.a.createElement(g,{title:"currency converter"}),a.a.createElement(O,null,a.a.createElement(W,null),a.a.createElement(L,{calculateResult:function(e,n,t){l("".concat((t*o[e]/o[n]).toFixed(2)))},setResult:l}),a.a.createElement(G,{result:t})),a.a.createElement(E,{title:"Copyright Konrad Kasperczyk 2020 All Rights Reserved"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.c1de7e05.chunk.js.map