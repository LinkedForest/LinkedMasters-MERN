import React from 'react';

// React Router
import {BrowserRouter} from "react-router-dom";

// Routes Master
import RoutesMaster from './RoutesMaster';

// Routes Render
import RouterRender from './RouterRender';

const RoutesProvider = ({children}) => {
    return (
        <React.Fragment>
            {children}
            <BrowserRouter>
                <RouterRender RoutesMap={RoutesMaster} />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default RoutesProvider;