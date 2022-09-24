"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[880],{9471:function(n,t,e){e.d(t,{Z:function(){return c}});var r,i=e(168),o=e(4545).Z.div(r||(r=(0,i.Z)(["\n  margin: 0 auto;\n  font-size: 20px;\n  color: red;\n"]))),a=e(184),c=function(n){var t=n.message;return(0,a.jsx)(o,{children:t})}},8880:function(n,t,e){e.r(t),e.d(t,{default:function(){return O}});var r,i,o,a,c,s,u,d,l,p,f=e(885),v=e(6180),h=e(7689),m=e(2791),x=e(6668),Z=e(4169),g=e(9649),b=e(9471),j=e(168),E=e(6731),y=e(7939),w=(0,y.ZP)(E.rU)(r||(r=(0,j.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  font-weight: 700;\n"]))),k=(0,y.ZP)(E.rU)(i||(i=(0,j.Z)(["\n  margin-bottom: 10px;\n  &.active {\n    color: #1e90ff;\n  }\n  :hover:not(.active),\n  :focus:not(.active) {\n    color: #1e90ff;\n  }\n"]))),_=y.ZP.div(o||(o=(0,j.Z)(["\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  border-bottom: thick solid #800080;\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),P=y.ZP.p(a||(a=(0,j.Z)(["\n  margin-bottom: 15px;\n"]))),D=y.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n  margin-bottom: 15px;\n  border-top: thick solid #800080;\n  border-bottom: thick solid #800080;\n"]))),R=y.ZP.div(s||(s=(0,j.Z)(["\n  margin-right: 20px;\n"]))),C=y.ZP.h2(u||(u=(0,j.Z)(["\n  margin-bottom: 20px;\n"]))),I=y.ZP.p(d||(d=(0,j.Z)(["\n  margin-bottom: 20px;\n"]))),S=y.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n"]))),L=y.ZP.div(p||(p=(0,j.Z)(["\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n  &:first-child {\n    margin-left: 25px;\n  }\n"]))),N=e(184);function G(n){var t=n.movie;return(0,N.jsxs)(D,{children:[(0,N.jsx)(R,{children:(0,N.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title})}),(0,N.jsxs)("div",{children:[(0,N.jsx)(C,{children:t.title?t.title:"Movie"}),(0,N.jsx)(I,{children:"User score:   ".concat(t.vote_average," %")}),(0,N.jsx)(I,{children:"Overview:  ".concat(t.overview)}),(0,N.jsxs)(S,{children:["Genres:",t.genres&&t.genres.map((function(n){var t=n.id,e=n.name;return(0,N.jsx)(L,{children:e},t)}))]})]})]})}function O(){var n,t,e,r,i=(0,h.UO)().movieId,o=(0,h.TH)(),a=(0,m.useState)(x.Z.IDLE),c=(0,f.Z)(a,2),s=c[0],u=c[1],d=(0,m.useState)([]),l=(0,f.Z)(d,2),p=l[0],j=l[1],E=(0,m.useState)(null),y=(0,f.Z)(E,2),D=y[0],R=y[1],C=null!==(n=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,m.useEffect)((function(){u(x.Z.PENDING),j([]),v.Pg(i).then((function(n){j(n),u(x.Z.RESOLVED),0===n.length&&(j([]),R("Sorry,page is not found."),u(x.Z.REJECTED))})).catch((function(n){R(n),u(x.Z.REJECTED)}))}),[i]),(0,N.jsxs)("main",{children:[s===x.Z.PENDING&&(0,N.jsx)(g.Z,{}),s===x.Z.REJECTED&&(0,N.jsx)(b.Z,{message:D}),s===x.Z.RESOLVED&&(0,N.jsxs)(Z.W,{children:[(0,N.jsxs)("section",{children:[(0,N.jsx)(w,{to:C,children:"<-- Go back"}),(0,N.jsx)(G,{movie:p})]}),(0,N.jsx)("section",{children:(0,N.jsxs)(_,{children:[(0,N.jsx)(P,{children:"Additional Info"}),(0,N.jsx)(k,{to:"/movies/".concat(i,"/cast"),state:{from:null===o||void 0===o||null===(e=o.state)||void 0===e?void 0:e.from},children:"| Cast |"}),(0,N.jsx)(k,{to:"/movies/".concat(i,"/reviews"),state:{from:null===o||void 0===o||null===(r=o.state)||void 0===r?void 0:r.from},children:"| Reviews |"})]})}),(0,N.jsx)(h.j3,{})]})]})}},6180:function(n,t,e){e.d(t,{Df:function(){return u},Pg:function(){return l},Wf:function(){return x},tx:function(){return h},zv:function(){return f}});var r=e(5861),i=e(4687),o=e.n(i),a=e(4569),c=e.n(a);c().defaults.baseURL="https://api.themoviedb.org";var s="6e83d9f645a92ff232bed757caa274bd";function u(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/3/trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/3/movie/".concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/3/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/3/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/3/search/movie?api_key=".concat(s,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6668:function(n,t){t.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=880.f2ba687e.chunk.js.map