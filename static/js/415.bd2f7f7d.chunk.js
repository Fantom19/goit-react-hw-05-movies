"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{25:function(e,r,t){t.d(r,{FN:function(){return p},_S:function(){return f},h$:function(){return u},nw:function(){return s},w7:function(){return o}});var n=t(861),a=t(757),i=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day",{params:{api_key:"2797e847effb3f024c7d83afab7f550f"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{api_key:"2797e847effb3f024c7d83afab7f550f",query:r}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r),{params:{api_key:"2797e847effb3f024c7d83afab7f550f"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"),{params:{api_key:"2797e847effb3f024c7d83afab7f550f"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"),{params:{api_key:"2797e847effb3f024c7d83afab7f550f"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},337:function(e,r,t){t.d(r,{O:function(){return s}});var n=t(689),a=t(87),i=t(910),c=t(184),s=function(e){var r=e.movies,t=(0,n.TH)();return(0,c.jsx)("ul",{className:i.Z.list,children:r&&r.map((function(e){var r=e.id,n=e.name,s=e.title,u=e.poster_path;return(0,c.jsx)("li",{className:i.Z.item,children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(r),state:{location:t},className:i.Z.link,children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(u),alt:s,width:"300",height:"400"}),(0,c.jsx)("span",{className:i.Z.description,children:n||s})]})},r)}))})}},415:function(e,r,t){t.r(r);var n=t(439),a=t(791),i=t(25),c=t(337),s=t(184);r.default=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],u=r[1];return(0,a.useEffect)((function(){(0,i.nw)().then((function(e){u(e)})).catch((function(e){var r=e.message;console.log(r)}))}),[]),t?(0,s.jsx)("div",{children:(0,s.jsx)(c.O,{movies:t})}):(0,s.jsx)("p",{children:"404 Not Found"})}},910:function(e,r){r.Z={wrapper:"Movies_wrapper__vWoXg",wrapperTitle:"Movies_wrapperTitle__QOA4H",wrapperDescription:"Movies_wrapperDescription__b6oU4",error:"Movies_error__ga8bx",list:"Movies_list__JEO-P",item:"Movies_item__+Yifn",link:"Movies_link__0oDWE",description:"Movies_description__k3l7V"}}}]);
//# sourceMappingURL=415.bd2f7f7d.chunk.js.map