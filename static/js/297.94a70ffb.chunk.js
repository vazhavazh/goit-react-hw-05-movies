"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[297],{556:function(n,t,e){e.d(t,{$7:function(){return s},CG:function(){return i},Mc:function(){return p},US:function(){return f},oJ:function(){return h}});var r=e(861),c=e(687),a=e.n(c),u="b69eeb996215d946cecfb7b09e224425",o="https://api.themoviedb.org/3",i=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},297:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,c,a=e(861),u=e(439),o=e(687),i=e.n(o),s=e(791),p=e(689),f=e(556),h=e(168),v=e(444),x=v.ZP.li(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 30px;\n  margin-bottom: 20px;\n  gap: 50px;\n  background-color: #f5f5f5;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n\n  &:hover,\n  &:focus,\n  &:active {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),d=v.ZP.img(c||(c=(0,h.Z)(["\n  width: 100%;\n  max-width: 80px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n"]))),l=e(184);function m(){var n=(0,s.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],c=(0,p.UO)().movieId;return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.US)(c);case 3:t=n.sent,r(t.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error();case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[c]),(0,l.jsx)(l.Fragment,{children:e.length>0?(0,l.jsx)("ul",{children:e.map((function(n){return(0,l.jsxs)(x,{children:[(0,l.jsx)(d,{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"",alt:""}),(0,l.jsx)("h4",{children:n.name}),(0,l.jsxs)("span",{children:["Character - ",n.character]})]},n.id)}))}):(0,l.jsx)("p",{children:"We don't have this info"})})}},861:function(n,t,e){function r(n,t,e,r,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function o(n){r(u,c,a,o,i,"next",n)}function i(n){r(u,c,a,o,i,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=297.94a70ffb.chunk.js.map