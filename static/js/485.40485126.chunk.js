"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{3485:function(n,t,r){r.r(t),r.d(t,{default:function(){return w}});var e,a,c=r(5861),u=r(9439),o=r(7757),s=r.n(o),i=r(2791),p=r(7425),f=r(9323),d=r(168),v=r(6444),h=r(1087),l=v.ZP.ul(e||(e=(0,d.Z)(["\n  margin: 30px;\n"]))),x=(0,v.ZP)(h.rU)(a||(a=(0,d.Z)(["\n  display: flex;\n  font-size: 25px;\n  padding: 5px;\n  font-weight: 400;\n  color: #ad8b73;\n  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),\n    1px 1px 1px rgba(0, 0, 0, 0.5);\n  transition: color 250ms ease, background-color 250ms ease, border 250ms ease;\n\n  &:hover {\n    color: #e3caa5;\n  }\n"]))),m=r(184),w=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),r=t[0],e=t[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.Df)();case 2:t=n.sent,e(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,m.jsx)(l,{children:r.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsxs)(x,{to:"movies/".concat(n.id),children:[(0,m.jsx)(p.TRU,{}),n.title]})},n.id)}))})}},9323:function(n,t,r){r.d(t,{Df:function(){return s},IQ:function(){return f},IR:function(){return i},Jh:function(){return d},Yp:function(){return p}});var e=r(5861),a=r(7757),c=r.n(a),u=r(3263);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="f482511e908c5491e9f1e2c33a3c3db7",s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=485.40485126.chunk.js.map