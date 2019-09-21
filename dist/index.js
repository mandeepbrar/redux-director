module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _director = __webpack_require__(5);

var _redux = __webpack_require__(6);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectorRouter = function () {
  function DirectorRouter() {
    _classCallCheck(this, DirectorRouter);

    this.initialState = {
      url: '',
      pattern: '',
      routeName: '',
      data: {},
      params: {},
      routeStore: {}
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
    this.getRouteStore = this.getRouteStore.bind(this);
    this.changeRouteStore = this.changeRouteStore.bind(this);
    this.loadRouteData = this.loadRouteData.bind(this);
    this.loadDefaultRoute = null;
  }

  _createClass(DirectorRouter, [{
    key: 'connect',
    value: function connect(store) {
      this.store = store;
      //load data if store has been set later.
      if (this.loadDefaultRoute) {
        this.loadDefaultRoute();
      }
    }
  }, {
    key: 'setRoutes',
    value: function setRoutes(routesToSet, defaultRoute, defaultRouteParams, defaultRouteData, directorConfig) {
      var _this = this;

      var router = this;
      this.director = new _director.Router();
      if (!directorConfig) {
        directorConfig = {
          html5history: false,
          run_handler_in_init: false,
          convert_hash_in_init: true
        };
      }
      this.routes = routesToSet;
      this.processRoutes();
      //load data if store has been set earlier
      if (this.store) {
        router.loadRouteData(defaultRoute, defaultRouteParams, defaultRouteData);
        this.director.init().configure(directorConfig);
      } else {
        //create a function for delayed loading
        this.loadDefaultRoute = function () {
          router.loadRouteData(defaultRoute, defaultRouteParams, defaultRouteData);
          _this.director.init().configure(directorConfig);
        };
      }
    }
  }, {
    key: 'handleRoute',
    value: function handleRoute(pattern, params, handler) {
      var middlewares = [];
      var i = 1;
      var ctx = {};
      ctx.params = {};
      ctx.url = '';
      for (i = 2; i < arguments.length; i++) {
        middlewares.push(arguments[i]);
      }
      var router = this;
      this.director.on(pattern, function () {
        var index = 0;
        var args = [];
        ctx.state = router.store.getState();
        ctx.url = router.getUrl();
        for (i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
          ctx.params[params[i]] = arguments[i];
        }

        var middlewareHandler = function middlewareHandler(i) {
          if (index < middlewares.length - 1) {
            middlewares[i].call(router, ctx, next);
          } else {
            args.unshift(ctx);
            middlewares[middlewares.length - 1].apply(router, args);
          }
        };
        var next = function next() {
          index++;
          middlewareHandler(index);
        };

        middlewareHandler(0);
      });
    }
  }, {
    key: 'addRoute',
    value: function addRoute(pattern, routeName, data) {
      var middlewares = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      var router = this;
      var params = (pattern.match(/:[^\s/]+/g) || []).map(function (param) {
        return param.substr(1);
      });
      this.handleRoute.apply(null, [pattern, params].concat(_toConsumableArray(middlewares), [function (ctx) {
        router.loadRouteData(routeName, ctx.params, data, pattern, ctx.url);
      }]));
    }
  }, {
    key: 'loadRouteData',
    value: function loadRouteData(routeName, params, data, pattern, url) {
      var navigationAction = {
        type: '@@reduxdirector/LOCATION_CHANGE',
        payload: {
          url: url,
          routeName: routeName,
          pattern: pattern,
          data: data,
          params: params
        }
      };
      this.store.dispatch(navigationAction);
    }
  }, {
    key: 'changeRouteStore',
    value: function changeRouteStore(newRoute, action) {
      var route = this.getRoute(newRoute);
      if (route) {
        if (route.reducer) {
          this.routeStoreReducer = route.reducer;
        } else if (route.reducers && Object.keys(route.reducers).length > 0) {
          this.routeStoreReducer = (0, _redux.combineReducers)(route.reducers);
        }
        if (this.routeStoreReducer) {
          return this.routeStoreReducer({}, action);
        }
      }
      return {};
    }
  }, {
    key: 'getRouteStore',
    value: function getRouteStore(state, action) {
      if (this.routeStoreReducer) {
        return this.routeStoreReducer(state, action);
      }
      return state;
    }
  }, {
    key: 'redirect',
    value: function redirect(url) {
      this.director.setRoute(url);
    }
  }, {
    key: 'dispatch',
    value: function dispatch(path) {
      return this.director.dispatch(path);
    }
  }, {
    key: 'processRoutes',
    value: function processRoutes() {
      var routeNames = Object.keys(this.routes);
      for (var index in routeNames) {
        var routeName = routeNames[index];
        var route = this.routes[routeName];
        var data = route.data;
        if (!data) {
          data = {};
        }
        this.addRoute(route.pattern, routeName, data, route.middlewares);
      }
    }
  }, {
    key: 'getRoute',
    value: function getRoute(routeName) {
      if (this.routes) {
        return this.routes[routeName];
      }
      return null;
    }
  }, {
    key: 'getUrl',
    value: function getUrl() {
      if (this.director) {
        return this.director.getRoute().join('/');
      }
      return null;
    }
  }]);

  return DirectorRouter;
}();

var routeInstance = new DirectorRouter();
exports.router = routeInstance;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = exports.View = exports.Reducer = undefined;

var _RouterView = __webpack_require__(2);

var _reduxdirector = __webpack_require__(0);

var _reducer = __webpack_require__(10);

var Reducer = _reducer.reducer;
var View = _RouterView.routerView;
var Router = _reduxdirector.router;

exports.Reducer = Reducer;
exports.View = View;
exports.Router = Router;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routerView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _reduxdirector = __webpack_require__(0);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouterViewComp = function (_React$Component) {
    _inherits(RouterViewComp, _React$Component);

    function RouterViewComp() {
        _classCallCheck(this, RouterViewComp);

        return _possibleConstructorReturn(this, (RouterViewComp.__proto__ || Object.getPrototypeOf(RouterViewComp)).apply(this, arguments));
    }

    _createClass(RouterViewComp, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return { route: this.props.route };
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.method ? this.props.method(this.props.route) : null;
        }
    }]);

    return RouterViewComp;
}(_react2.default.Component);

RouterViewComp.childContextTypes = {
    route: _propTypes2.default.object
};

var RouterView = (0, _reactRedux.connect)(function (state, props) {
    if (state.router && state.router.routeName) {
        var route = _reduxdirector.router.getRoute(state.router.routeName);
        if (route.component) {
            return {
                method: route.component,
                route: state.router
            };
        }
        if (route.components) {
            var compMethod = route.components[props.name];
            if (compMethod) {
                return {
                    method: compMethod,
                    route: state.router
                };
            }
        }
    }
    return {};
}, null)(RouterViewComp);

exports.routerView = RouterView;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("director");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(8)();
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(9);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = undefined;

var _reduxdirector = __webpack_require__(0);

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _reduxdirector.router.initialState;
  var action = arguments[1];

  switch (action.type) {
    case '@@reduxdirector/LOCATION_CHANGE':
      var newState = Object.assign({}, action.payload);
      newState.routeStore = _reduxdirector.router.changeRouteStore(newState.routeName, action);
      return newState;
    default:
      var routeStore = _reduxdirector.router.getRouteStore(state.routeStore, action);
      if (routeStore == state.routeStore) {
        return state;
      } else {
        return Object.assign({}, state, {
          routeStore: routeStore
        });
      }
  }
};
exports.reducer = reducer;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map