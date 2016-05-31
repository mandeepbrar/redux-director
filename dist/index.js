module.exports=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Router=e.View=e.Reducer=void 0;var i=r(2),o=r(1),u=r(3),s=n(u),a=s["default"],c=i.routerView,l=o.router;console.log("exporting  ",i.routerView,o.router,s["default"]),e.Reducer=a,e.View=c,e.Router=l},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.router=void 0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(4),s=function(){function t(){i(this,t),this.initialState={url:"",pattern:"",routename:"",data:{},params:{}},this.connect=this.connect.bind(this),this.getUrl=this.getUrl.bind(this),this.addRoute=this.addRoute.bind(this),this.setRoutes=this.setRoutes.bind(this),this.dispatch=this.dispatch.bind(this),this.redirect=this.redirect.bind(this),this.getRoute=this.getRoute.bind(this),this.handleRoute=this.handleRoute.bind(this),this.processRoutes=this.processRoutes.bind(this)}return o(t,[{key:"connect",value:function(t,e,r){this.store=t,this.initialState.routename=e,this.director=new u.Router,r||(r={html5history:!1,run_handler_in_init:!1,convert_hash_in_init:!0}),this.director.init().configure(r),this.processRoutes()}},{key:"handleRoute",value:function(t,e,r){var n=[],i=1,o={};for(o.params={},o.url="",i=2;i<arguments.length;i++)n.push(arguments[i]);var u=this;this.director.on(t,function(){var t=0,r=[];for(o.state=u.store.getState(),o.url=u.getUrl(),i=0;i<arguments.length;i++)r.push(arguments[i]),o.params[e[i]]=arguments[i];var s=function(e){t<n.length-1?n[e].call(u,o,a):(r.unshift(o),n[n.length-1].apply(u,r))},a=function(){t++,s(t)};s(0)})}},{key:"addRoute",value:function(t,e,r){var i=arguments.length<=3||void 0===arguments[3]?[]:arguments[3],o=this,u=(t.match(/:[^\s\/]+/g)||[]).map(function(t){return t.substr(1)});this.handleRoute.apply(null,[t,u].concat(n(i),[function(n){var i={type:"@@reduxdirector/LOCATION_CHANGE",payload:{url:n.url,routename:e,pattern:t,data:r,params:n.params}};o.store.dispatch(i)}]))}},{key:"redirect",value:function(t){this.director.setRoute(t)}},{key:"dispatch",value:function(t){return this.director.dispatch(t)}},{key:"setRoutes",value:function(t){this.routes=t,this.director&&this.processRoutes()}},{key:"processRoutes",value:function(){var t=Object.keys(this.routes);for(var e in t){var r=t[e],n=this.routes[r],i=n.data;i||(i={}),this.addRoute(n.pattern,r,i,n.middlewares)}}},{key:"getRoute",value:function(t){return this.routes?this.routes[t]:null}},{key:"getUrl",value:function(){return this.director?this.director.getRoute().join("/"):null}}]),t}(),a=new s;e.router=a},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.routerView=void 0;var i=r(5),o=n(i),u=r(6),s=r(1),a=function(t){var e=t.method,r=void 0===e?null:e,n=t.route,i=void 0===n?null:n;return o["default"].createElement("div",null,r?r(i):null)},c=(0,u.connect)(function(t,e){if(t.router&&t.router.routename){var r=s.router.getRoute(t.router.routename);if(r.component)return{method:r.component,route:t.router};if(r.components){var n=r.components[e.name];if(n)return{method:n,route:t.router}}}return{}},null)(a);e.routerView=c},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),i=function(){var t=arguments.length<=0||void 0===arguments[0]?n.router.initialState:arguments[0],e=arguments[1];switch(e.type){case"@@reduxdirector/LOCATION_CHANGE":return e.payload;default:return t}};e["default"]=i},function(t,e){t.exports=require("director")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("react-redux")}]);
//# sourceMappingURL=index.js.map