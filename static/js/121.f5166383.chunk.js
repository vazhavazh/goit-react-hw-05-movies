"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[121],{556:function(n,t,e){e.d(t,{$7:function(){return i},CG:function(){return s},Mc:function(){return f},US:function(){return p},oJ:function(){return v}});var r=e(861),c=e(687),a=e.n(c),u="b69eeb996215d946cecfb7b09e224425",o="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},121:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,c=e(861),a=e(439),u=e(687),o=e.n(u),s=e(791),i=e(689),f=e(556),p=e(168),v=e(444).ZP.li(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 30px;\n  margin-bottom: 20px;\n  gap: 50px;\n  background-color: #f5f5f5;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n\n  &:hover,\n  &:focus,\n  &:active {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  }\n"]))),h=e(184);function x(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],u=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.oJ)(u);case 3:t=n.sent,r(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]),(0,h.jsx)(h.Fragment,{children:e.length>0?(0,h.jsx)("ul",{children:e.map((function(n){return(0,h.jsxs)(v,{children:[(0,h.jsx)("h4",{children:"Author: ".concat(n.author)}),(0,h.jsx)("p",{children:n.content})]},n.id)}))}):(0,h.jsx)("p",{children:"We don't have any reviews for this movie"})})}},861:function(n,t,e){function r(n,t,e,r,c,a,u){try{var o=n[a](u),s=o.value}catch(i){return void e(i)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function o(n){r(u,c,a,o,s,"next",n)}function s(n){r(u,c,a,o,s,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=121.f5166383.chunk.js.map