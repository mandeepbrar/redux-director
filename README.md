# redux-director
Redux bindings to director

##Installation


##Usage

Connect the router to the store.

index.js

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import {Router} from 'redux-director';

const store = configureStore();
//home is the default route
Router.connect(store, 'home');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


stores/index.js

import { combineReducers } from 'redux';
import {Reducer} from 'redux-director';

//router reducer should be always named router
const reducers = {
  router: Reducer

};
module.exports = combineReducers(reducers);


stores/main.js

import React from 'react';
import ReactDOM from 'react-dom';
import {Contact} from './Contact';
import {Home} from './Home';
import {Router} from 'redux-director';
import {View} from 'redux-director';

// define the routes
//route starts with the name of the router e.g. home, contact below
//route contains the patter that should be matched by director
//route contains the components that need to be displayed by the views.
//eg. View named main will display the component Home whenever route "home" is matched.
// View named contact will display the component Contact whenever route "contact is matched.
// This is somewhat similar to angular ui router.. 
const routes= {
  "home": {
    pattern:"",
    components:{
      "main": () => {
          return (
            <Home/>
          )
      }
    }
  },
  "contact": {
    pattern:"/contact",
    components:{
      "main": () => {
          return (
            <Contact/>
          )
      }
    }
  }
};

//set the routes for the router
Router.setRoutes(routes);

// use the view in display component.
// The name of the view is "main" below
//This view will display contents for the main component from the route.
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="index">
        <View name="main"/>
      </div>
    );
  }
}


