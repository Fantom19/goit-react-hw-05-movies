"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{25:function(t,e,r){r.d(e,{FN:function(){return d},_S:function(){return h},h$:function(){return p},nw:function(){return o},w7:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243),s="2797e847effb3f024c7d83afab7f550f",i=u.Z.create({baseURL:"https://api.themoviedb.org/3/"}),o=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("trending/movie/day",{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{api_key:s,query:e}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/credits"),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/reviews"),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(439),a=r(25),c=r(791),u=r(689),s="Cast_list__GlWio",i="Cast_description__uN0VA",o="Cast_item__a0CDL",p=r(728),f=r(184),h=function(){var t=(0,u.UO)().moviesId,e=(0,c.useState)([]),r=(0,n.Z)(e,2),h=r[0],d=r[1];return(0,c.useEffect)((function(){(0,a._S)(t).then((function(t){var e=t.cast;d(e)})).catch((function(t){var e=t.message;console.log(e)}))}),[t]),(0,f.jsx)("ul",{className:s,children:h&&h.map((function(t){var e=t.character,r=t.profile_path,n=t.name,a=t.id;return(0,f.jsxs)("li",{className:o,children:[r?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:n,width:"140",height:"175"}):(0,f.jsx)("img",{src:p,alt:n,width:"140",height:"175"}),(0,f.jsxs)("div",{className:i,children:[(0,f.jsx)("h3",{children:n}),(0,f.jsx)("h4",{children:"Character: "}),(0,f.jsx)("p",{children:e})]})]},a)}))})}},728:function(t,e,r){t.exports=r.p+"static/media/notFound.859f0a579e2e591fb305.jpeg"}}]);
//# sourceMappingURL=76.7c6a4018.chunk.js.map