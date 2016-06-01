import {router} from './reduxdirector';

const reducer = (state = router.initialState, action) => {
  switch (action.type) {
    case '@@reduxdirector/LOCATION_CHANGE':
        let newState = Object.assign({}, action.payload);
        newState.routeStore = router.changeRouteStore(newState.routeName, action);
        return newState;
    default:
        let routeStore = router.getRouteStore(state.routeStore, action)
        if(routeStore == state.routeStore) {
          return state
        } else {
          return Object.assign({}, state, {
            routeStore: routeStore
          })
        }
  }
};
export {reducer as reducer}
