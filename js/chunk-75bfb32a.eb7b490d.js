(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75bfb32a"],{"19cf":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-breadcrumb",{staticClass:"eden-breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb"}},t._l(t.list,function(e,r){return e.meta.title?n("el-breadcrumb-item",{key:e.path},["noredirect"===e.redirect||r===e.length-1?n("span",{staticClass:"no-redirect"},[t._v("\n        "+t._s(t.getTitle(e.meta.title))+"\n      ")]):n("router-link",{attrs:{to:e.redirect||e.path}},[t._v("\n        "+t._s(t.getTitle(e.meta.title))+"\n      ")])],1):t._e()}))],1)},a=[],i=(n("7f7f"),{name:"breadcrumb",data:function(){return{list:null}},created:function(){this.getBreadcrumb()},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter(function(t){return t.name});t[0]&&"dashboard"!==t[0].name&&(t=[{path:"/dashboard",meta:{title:"dashboard"}}].concat(t)),this.list=t,console.log(this.list)},getTitle:function(t){return this.$te("route.".concat(t))?this.$t("route.".concat(t)):t}}}),c=i,s=(n("92bd"),n("254e"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,"2441880c",null);u.options.__file="index.vue";e["default"]=u.exports},"254e":function(t,e,n){"use strict";var r=n("acef"),a=n.n(r);a.a},"58e8":function(t,e,n){},"92bd":function(t,e,n){"use strict";var r=n("58e8"),a=n.n(r);a.a},acef:function(t,e,n){}}]);
//# sourceMappingURL=chunk-75bfb32a.eb7b490d.js.map