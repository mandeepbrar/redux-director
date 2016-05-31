import {router} from './reduxdirector';

const reducer = (state = router.initialState, action) => {
  switch (action.type) {
    case '@@reduxdirector/LOCATION_CHANGE':
        return action.payload;
    default:
        return state;
  }
};

export default reducer;
