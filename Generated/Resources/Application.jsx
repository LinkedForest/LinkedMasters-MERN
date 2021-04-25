import React from 'react';

// Material-UI Style
import {CssBaseline} from "@material-ui/core";

// Stores Provider
import MasterProvider from "./Sources/Stores/MasterProvider";

// Routs Provider
import RoutesProvider from "./Routes/RoutesProvider";

function Application() {
    return (
        <React.Fragment>
            <MasterProvider>
                <RoutesProvider>
                    <CssBaseline />
                </RoutesProvider>
            </MasterProvider>
        </React.Fragment>
    );
}

export default Application;
