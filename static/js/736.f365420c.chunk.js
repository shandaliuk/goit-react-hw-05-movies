"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,r){r.r(t),r.d(t,{default:function(){return w}});var e,a,c,u=r(5861),p=r(9439),i=r(7757),o=r.n(i),s=r(2791),f=r(7689),x=r(9323),d=r(168),l=r(6444),h=l.ZP.ul(e||(e=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  column-gap: 20px;\n  row-gap: 20px;\n  margin-left: 30px;\n"]))),v=l.ZP.li(a||(a=(0,d.Z)(["\n  width: calc((100% - 180px) / 6);\n  display: flex;\n  row-gap: 20px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n  background-color: #e3caa5;\n  padding: 20px 0;\n  text-align: center;\n  color: #ad8b73;\n  font-size: 20px;\n  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),\n    1px 1px 1px rgba(0, 0, 0, 0.5);\n"]))),m=l.ZP.img(c||(c=(0,d.Z)(["\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n"]))),g=r(184),w=function(){var n=(0,s.useState)([]),t=(0,p.Z)(n,2),r=t[0],e=t[1],a=(0,f.UO)().movieId;return(0,s.useEffect)((function(){var n=function(){var n=(0,u.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,x.IQ)(a);case 2:t=n.sent,e(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,g.jsx)(h,{children:r.map((function(n){return(0,g.jsxs)(v,{children:[(0,g.jsx)(m,{src:n.profile_path?"https://image.tmdb.org/t/p/original".concat(n.profile_path):"https://img.icons8.com/ios/512/gender-neutral-user--v1.png",alt:n.name,width:"150"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:n.name}),(0,g.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))})}},9323:function(n,t,r){r.d(t,{Df:function(){return i},IQ:function(){return f},IR:function(){return o},Jh:function(){return x},Yp:function(){return s}});var e=r(5861),a=r(7757),c=r.n(a),u=r(3263);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var p="f482511e908c5491e9f1e2c33a3c3db7",i=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(p));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(p,"&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(p));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(p));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(p));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.f365420c.chunk.js.map