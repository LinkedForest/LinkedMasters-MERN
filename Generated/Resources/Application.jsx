import React from 'react';

// Material-UI Style
import {CssBaseline} from "@material-ui/core";

// Material-UI Provider
import { ThemeProvider } from '@material-ui/core/styles';

// Stores Provider
import MasterProvider from "./Sources/Stores/MasterProvider";

// Routs Provider
import RoutesProvider from "./Routes/RoutesProvider";

// Application Styles
import CustomTheme from './Application_Styles';

function Application() {
    return (
        <React.Fragment>
            <ThemeProvider theme={CustomTheme}>
                <MasterProvider>
                    <RoutesProvider>
                        <CssBaseline />
                    </RoutesProvider>
                </MasterProvider>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Application;
