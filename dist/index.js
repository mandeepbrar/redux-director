module.exports=function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Router=e.View=e.Reducer=void 0;var o=r(2),n=r(1),u=r(3),i=u.reducer,s=o.routerView,a=n.router;e.Reducer=i,e.View=s,e.Router=a},function(t,e,r){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.router=void 0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),i=r(9),s=r(12),a=function(){function t(){n(this,t),this.initialState={url:"",pattern:"",routeName:"",data:{},params:{},routeStore:{}},this.connect=this.connect.bind(this),this.getUrl=this.getUrl.bind(this),this.addRoute=this.addRoute.bind(this),this.setRoutes=this.setRoutes.bind(this),this.dispatch=this.dispatch.bind(this),this.redirect=this.redirect.bind(this),this.getRoute=this.getRoute.bind(this),this.handleRoute=this.handleRoute.bind(this),this.processRoutes=this.processRoutes.bind(this),this.getRouteStore=this.getRouteStore.bind(this),this.changeRouteStore=this.changeRouteStore.bind(this),this.loadRouteData=this.loadRouteData.bind(this),this.loadDefaultRoute=null}return u(t,[{key:"connect",value:function(t){this.store=t,this.loadDefaultRoute&&this.loadDefaultRoute()}},{key:"setRoutes",value:function(t,e,r,o,n){var u=this,s=this;this.director=new i.Router,n||(n={html5history:!1,run_handler_in_init:!1,convert_hash_in_init:!0}),this.routes=t,this.processRoutes(),this.store?(s.loadRouteData(e,r,o),this.director.init().configure(n)):this.loadDefaultRoute=function(){s.loadRouteData(e,r,o),u.director.init().configure(n)}}},{key:"handleRoute",value:function(t,e,r){var o=[],n=1,u={};for(u.params={},u.url="",n=2;n<arguments.length;n++)o.push(arguments[n]);var i=this;this.director.on(t,function(){var t=0,r=[];for(u.state=i.store.getState(),u.url=i.getUrl(),n=0;n<arguments.length;n++)r.push(arguments[n]),u.params[e[n]]=arguments[n];var s=function(e){t<o.length-1?o[e].call(i,u,a):(r.unshift(u),o[o.length-1].apply(i,r))},a=function(){t++,s(t)};s(0)})}},{key:"addRoute",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=this,i=(t.match(/:[^\s\/]+/g)||[]).map(function(t){return t.substr(1)});this.handleRoute.apply(null,[t,i].concat(o(n),[function(o){u.loadRouteData(e,o.params,r,t,o.url)}]))}},{key:"loadRouteData",value:function(t,e,r,o,n){var u={type:"@@reduxdirector/LOCATION_CHANGE",payload:{url:n,routeName:t,pattern:o,data:r,params:e}};this.store.dispatch(u)}},{key:"changeRouteStore",value:function(t,e){var r=this.getRoute(t);return r&&(r.reducer?this.routeStoreReducer=r.reducer:r.reducers&&Object.keys(r.reducers).length>0&&(this.routeStoreReducer=(0,s.combineReducers)(r.reducers)),this.routeStoreReducer)?this.routeStoreReducer({},e):{}}},{key:"getRouteStore",value:function(t,e){return this.routeStoreReducer?this.routeStoreReducer(t,e):t}},{key:"redirect",value:function(t){this.director.setRoute(t)}},{key:"dispatch",value:function(t){return this.director.dispatch(t)}},{key:"processRoutes",value:function(){var t=Object.keys(this.routes);for(var e in t){var r=t[e],o=this.routes[r],n=o.data;n||(n={}),this.addRoute(o.pattern,r,n,o.middlewares)}}},{key:"getRoute",value:function(t){return this.routes?this.routes[t]:null}},{key:"getUrl",value:function(){return this.director?this.director.getRoute().join("/"):null}}]),t}(),c=new a;e.router=c},function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.routerView=void 0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),a=r(10),c=o(a),l=r(11),h=r(1),d=r(7),f=o(d),p=function(t){function e(){return n(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),s(e,[{key:"getChildContext",value:function(){return{route:this.props.route}}},{key:"render",value:function(){return c.default.createElement("div",null,this.props.method?this.props.method(this.props.route):null)}}]),e}(c.default.Component);p.childContextTypes={route:f.default.object};var v=(0,l.connect)(function(t,e){if(t.router&&t.router.routeName){var r=h.router.getRoute(t.router.routeName);if(r.component)return{method:r.component,route:t.router};if(r.components){var o=r.components[e.name];if(o)return{method:o,route:t.router}}}return{}},null)(p);e.routerView=v},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.reducer=void 0;var o=r(1),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.router.initialState,e=arguments[1];switch(e.type){case"@@reduxdirector/LOCATION_CHANGE":var r=Object.assign({},e.payload);return r.routeStore=o.router.changeRouteStore(r.routeName,e),r;default:var n=o.router.getRouteStore(t.routeStore,e);return n==t.routeStore?t:Object.assign({},t,{routeStore:n})}};e.reducer=n},function(t,e){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,r){"use strict";function o(t,e,r,o,u,i,s,a){if(n(e),!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,u,i,s,a],h=0;c=new Error(e.replace(/%s/g,function(){return l[h++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var n=function(t){};t.exports=o},function(t,e,r){"use strict";var o=r(4),n=r(5),u=r(8);t.exports=function(){function t(t,e,r,o,i,s){s!==u&&n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return r.checkPropTypes=o,r.PropTypes=r,r}},function(t,e,r){t.exports=r(6)()},function(t,e){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";t.exports=r},function(t,e){t.exports=require("director")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("react-redux")},function(t,e){t.exports=require("redux")}]);
//# sourceMappingURL=index.js.map