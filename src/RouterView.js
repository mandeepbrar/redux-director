import React from 'react';
import { connect } from 'react-redux';
import {router} from './reduxdirector';

const RouterViewComp = ({ method = null, route = null}) => {
    return (
        <div>
          {method?method(route):null}
        </div>
    );
}

const RouterView = connect(
    (state, props) => {
        if(state.router && state.router.routename) {
            let route = router.getRoute(state.router.routename)
            if(route.components) {
                let compMethod = route.components[props.name]
                if(compMethod) {
                    return {
                        method: compMethod,
                        route: state.router
                    }
                }
            }
        }
        return {}
    }, null)(RouterViewComp);

export {RouterView as routerView}
