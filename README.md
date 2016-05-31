# redux-director
Redux bindings to director. This has been inspired from [redux-router-director]

##Installation

npm install redux-director

##Usage

Connect the router to the store. in the app file. You can specify the default route when you are connecting the router to the store.

index.js
```
import React from 'react';
import App from './containers/App';
//import the router here
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

```

Set up the routes in a file. The routes are named and defined as a json below. The route name roughly acts like a state in angular ui router. Whenever a route is matched using "pattern" for the route, the components of the route are displayed in their View placeholders. e.g. In the below case View placeholder named "main" will display the components specified during the definition of routes. When the state of the router is "home", The view placholder named "main" will display <Home/>

stores/main.js
```
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

```

Use the view component to display the component of the route. Relevant excerpts are displayed below. e.g. "main" component of the selected route will replace the View placeholder in the below code

stores/main.js
```
//import the view from the redux-director package
import {View} from 'redux-director';

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
        <View name="main"/>   // this will display the main component of the selected route
      </div>
    );
  }
}


```


Add the router reducer to the list of reducers for the application. The router reducer should be added at the highest level with the name router.i.e. the state of the router should be accessible with state.router
stores/index.js
```
import { combineReducers } from 'redux';
import {Reducer} from 'redux-director';

//router reducer should be always named router
const reducers = {
  router: Reducer

};
module.exports = combineReducers(reducers);
```

##License
MIT