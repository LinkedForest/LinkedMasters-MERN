import React from 'react';

// Material-UI Style
import {CssBaseline} from "@material-ui/core";

// Stores Provider
import AuthStoreProvider from "./Sources/Stores/AuthStoreProvider/AuthStoreProvider";

// Routs Provider
import RoutesProvider from "./Routes/RoutesProvider";

function Application() {
    return (
        <React.Fragment>
            <AuthStoreProvider>
                <RoutesProvider>
                    <CssBaseline />
                </RoutesProvider>
            </AuthStoreProvider>
        </React.Fragment>
    );
}

export default Application;
