/*import { Router } from 'director';
import * as types from './actions'

var initialState = {
    url: '',
    pattern: '',
    name:'',
    params: {}
};

export {initialState as initialState};

let router = new Router();
let routes = {};
let getCtx = () => {};
let storeDispatch = () => {};

export function getUrl() {
    return router.getRoute().join('/');
};

function on(pattern, handler) {
    var middlewares = [];
    var i = 1;
    var ctx = {};
    ctx.params = {};
    ctx.url = '';
    for (i = 1; i < arguments.length; i++) {
        middlewares.push(arguments[i]);
    }
	router.on(pattern, function() {
        var params = (pattern.match(/:[^\s/]+/g) || []).map(function(param) {
            return param.substr(1);
        });
        var index = 0;
        var args = [];
        ctx.state = getCtx();
        ctx.url = getUrl();
        for (i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
            ctx.params[params[i]] = arguments[i];
        }

        var middlewareHandler = function(i) {
            if (index < middlewares.length - 1) {
                middlewares[i].call(this, ctx, next);
            } else {
                args.unshift(ctx);
                middlewares[middlewares.length - 1].apply(this, args);
            }
        };
        var next = function() {
            index++;
            middlewareHandler(index);
        };

        middlewareHandler(0);
	});
};

export function add(pattern, name, middlewares = []) {
    on.apply(null, [pattern, ...middlewares, (ctx) => {
        let dispatch = storeDispatch();
        dispatch(types.navigate(ctx.url, pattern, name, ctx.params))
    }]);
};

export function setRoutes(routesToSet) {
    routes = routesToSet;
    let routeNames = Object.keys(routes);
    for (var index in routeNames) {
      let routeName = routeNames[index];
      let route = routes[routeName];
      add(route.pattern, routeName, route.middlewares);
    }
}

export function redirect(url) {
	document.body.scrollTop = 0;
    router.setRoute(url);
};

export function dispatch(path) {
    return router.dispatch(path);
}

export function setStore(store, defaultRoute) {
    initialState.name = defaultRoute;
    getCtx = () => {
        return store.getState();
    };
    storeDispatch=() => {
      return store.dispatch;
    };
};


export function init(defaultUrl) {
    router.init().configure({
        html5history: false,
        run_handler_in_init: false,
        convert_hash_in_init: true
    });
};

export function getRoute(name) {
  return routes[name];
}
*/
