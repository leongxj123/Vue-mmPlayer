webpackJsonp([3],{"5jDA":function(t,e){},IqOq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Gu7T"),n=a.n(s),o=a("gyMJ"),i=a("LOkV"),m=a("6Pj+"),c={name:"comment",mixins:[a("5jRo").a],components:{MmLoading:m.a},data:function(){return{lockUp:!0,page:0,hotComments:[],commentList:[],total:null}},watch:{commentList:function(t,e){t.length!==e.length&&(this.lockUp=!1)}},created:function(){this.initData()},methods:{initData:function(){var t=this;Object(o.a)(this.$route.params.id,this.page).then(function(e){200===e.data.code&&(t.hotComments=e.data.hotComments,t.commentList=e.data.comments,t.total=e.data.total,t.lockUp=!0,t._hideLoad())})},listScroll:function(t){if(!this.lockUp){var e=t.target.scrollTop,a=t.target.scrollHeight;e+t.target.offsetHeight>=a&&(this.lockUp=!0,this.page+=1,this.pullUp())}},pullUp:function(){var t=this;Object(o.a)(this.$route.params.id,this.page).then(function(e){200===e.data.code&&(t.commentList=[].concat(n()(t.commentList),n()(e.data.comments)))})}},filters:{format:function(t){var e=new Date(t),a={year:e.getFullYear(),month:e.getMonth(),date:e.getDate(),hours:e.getHours(),minutes:e.getMinutes()},s=new Date,n=s.getTime()-t;return s.getDate()===a.date&&n<6e4?"刚刚":s.getDate()===a.date&&6e4<n&&n<36e5?Math.floor(n/6e4)+"分钟前":s.getDate()===a.date&&36e5<n&&n<864e5?Object(i.a)(a.hours)+":"+Object(i.a)(a.minutes):s.getDate()!==a.date&&n<864e5?"昨天"+Object(i.a)(a.hours)+":"+Object(i.a)(a.minutes):s.getFullYear()===a.year?a.month+1+"月"+a.date+"日":a.year+"年"+(a.month+1)+"月"+a.date+"日"}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[a("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),t._v(" "),t.hotComments.length>0?a("dl",{staticClass:"comment-list",on:{scroll:function(e){t.listScroll(e)}}},[a("dt",{staticClass:"comment-title"},[t._v("精彩评论")]),t._v(" "),t._l(t.hotComments,function(e){return a("dd",{key:e.commentId,staticClass:"comment-item"},[a("img",{staticClass:"comment-item-pic",attrs:{src:e.user.avatarUrl+"?param=50y50"}}),t._v(" "),a("h2",{staticClass:"comment-item-title"},[a("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))])]),t._v(" "),a("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),t._v(" "),a("div",{staticClass:"comment-item-opt"},[a("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(e.time)))]),t._v(" "),a("span",{staticClass:"comment-opt-liked"},[t._v(t._s(e.likedCount))])])])}),t._v(" "),a("dt",{staticClass:"comment-title"},[t._v("最新评论（"+t._s(t.total)+"）")]),t._v(" "),t._l(t.commentList,function(e){return a("dd",{key:e.commentId,staticClass:"comment-item"},[a("a",{staticClass:"comment-item-pic",attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[a("img",{staticClass:"cover-img",attrs:{src:e.user.avatarUrl+"?param=50y50"}})]),t._v(" "),a("h2",{staticClass:"comment-item-title"},[a("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))])]),t._v(" "),a("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),t._v(" "),t._l(e.beReplied,function(e){return a("div",{staticClass:"comment-item-replied"},[a("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))]),t._v("\n                ："+t._s(e.content)+"\n            ")])}),t._v(" "),a("div",{staticClass:"comment-item-opt"},[a("span",{staticClass:"comment-opt-date"},[t._v(t._s(t._f("format")(e.time)))]),t._v(" "),e.likedCount>0?a("span",{staticClass:"comment-opt-liked"},[t._v(t._s(e.likedCount))]):t._e()])],2)})],2):t._e()],1)},staticRenderFns:[]};var l=a("VU/8")(c,r,!1,function(t){a("5jDA")},"data-v-7dea91f1",null);e.default=l.exports}});