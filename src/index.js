import {routerView} from './RouterView';
import {router} from './reduxdirector';
import {reducer} from './reducer';

/*import * as utils from './utils'

export const init = utils.init;
export const redirect = utils.redirect;
export const getUrl = utils.getUrl;
export const setStore = utils.setStore;

export default {
    reducer,
    RouterView: RouterView,
    init: utils.init,
    redirect: utils.redirect,
    getUrl: utils.getUrl,
    setStore: utils.setStore,
    setRoutes: utils.setRoutes
};
*/
const Reducer=reducer
const View=routerView
const Router=router

export {Reducer}
export {View}
export {Router}
/*export default {
  Reducer: reducer,
  View: routerView,
  Router: router
}
*/
