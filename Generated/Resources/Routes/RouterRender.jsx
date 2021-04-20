import React from 'react';

// React Router
import {Route, Switch} from "react-router-dom";

// Errors Routes
import Error404Route from '../Containers/ErrorsRoutes/Error404Route/Error404Route';

// Routes Permission
function PrivatePermission(route) {
    document.title = route.title || 'LinkedMasters';

    return (
        <Route path={route.path} exact={route.exact} render={(props) => <route.component {...props} RoutesMap={route.PermissionsRoute} />} />
    );
}

// Routes Render
const RouterRender = ({RoutesMap}) => {
    return (
        <Switch>
            {RoutesMap.map((route, index) => {
                return (
                    <PrivatePermission key={index} {...route} />
                );
            })}
            <Route exact component={Error404Route} />
        </Switch>
    );
}

export default RouterRender;