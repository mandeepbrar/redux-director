import {
  Router
} from 'director';

class DirectorRouter {

  constructor() {
    this.initialState = {
      url: '',
      pattern: '',
      routename: '',
      data:{},
      params: {}
    };
    this.connect = this.connect.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.addRoute = this.addRoute.bind(this);
    this.setRoutes = this.setRoutes.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.redirect = this.redirect.bind(this);
    this.getRoute = this.getRoute.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
    this.processRoutes = this.processRoutes.bind(this);
  }

  connect(store, homeroute, configuration) {
    this.store = store;
    this.initialState.routename = homeroute;
    this.director = new Router();
    if (!configuration) {
      configuration = {
        html5history: false,
        run_handler_in_init: false,
        convert_hash_in_init: true
      }
    }
    this.director.init().configure(configuration);
    this.processRoutes();
  }

  handleRoute(pattern, params, handler) {
    var middlewares = [];
    var i = 1;
    var ctx = {};
    ctx.params = {};
    ctx.url = '';
    for (i = 2; i < arguments.length; i++) {
      middlewares.push(arguments[i]);
    }
    let router = this;
    this.director.on(pattern, function() {
      var index = 0;
      var args = [];
      ctx.state = router.store.getState();
      ctx.url = router.getUrl();
      for (i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
        ctx.params[params[i]] = arguments[i];
      }

      var middlewareHandler = function(i) {
        if (index < middlewares.length - 1) {
          middlewares[i].call(router, ctx, next);
        } else {
          args.unshift(ctx);
          middlewares[middlewares.length - 1].apply(router, args);
        }
      };
      var next = function() {
        index++;
        middlewareHandler(index);
      };

      middlewareHandler(0);
    });
  };

  addRoute(pattern, routename, data, middlewares = []) {
    let router = this;
    var params = (pattern.match(/:[^\s/]+/g) || []).map(function(param) {
      return param.substr(1);
    });
    this.handleRoute.apply(null, [pattern, params, ...middlewares, (ctx) => {
      let navigationAction = {
        type: '@@reduxdirector/LOCATION_CHANGE',
        payload: {
          url: ctx.url,
          routename: routename,
          pattern: pattern,
          data: data,
          params: ctx.params
        }
      };
      router.store.dispatch(navigationAction);
    }]);
  }

  redirect(url) {
    this.director.setRoute(url);
  }

  dispatch(path) {
    return this.director.dispatch(path);
  }

  setRoutes(routesToSet) {
    this.routes = routesToSet;
    if(this.director) {
      this.processRoutes();
    }
  }

  processRoutes() {
    let routeNames = Object.keys(this.routes);
    for (var index in routeNames) {
      let routeName = routeNames[index];
      let route = this.routes[routeName];
      let data = route.data;
      if(!data) {
        data = {}
      }
      this.addRoute(route.pattern, routeName, data, route.middlewares);
    }
  }

  getRoute(routename) {
    if (this.routes) {
      return this.routes[routename];
    }
    return null;
  }

  getUrl() {
    if (this.director) {
      return this.director.getRoute().join('/');
    }
    return null;
  };
}

const routeInstance = new DirectorRouter();
export {routeInstance as router};
