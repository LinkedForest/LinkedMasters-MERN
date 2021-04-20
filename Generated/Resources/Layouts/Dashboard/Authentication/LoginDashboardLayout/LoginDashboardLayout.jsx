import React from 'react';

// Material-UI Components
import {Button, CircularProgress, TextField} from '@material-ui/core';

// Operations
import LoginDashboardFunctions from '../../../../Functions/Dashboard/AuthDashboardFunctions/LoginDashboardFunctions';

const LoginDashboardLayout = () => {
    const {loginDashboard, FormData, FormValid, FormSubmit, Loading, Error} = LoginDashboardFunctions();

    return (
        <React.Fragment>
            <form noValidate autoComplete="off">
                <TextField value={loginDashboard.email || ''} onChange={FormData} type="email" name="email" label="Email" variant="outlined"/>
                <TextField value={loginDashboard.password || ''} onChange={FormData} type="password" name="password" label="Password" variant="outlined"/>
                {Error && <p>{Error.message}</p>}
                <Button onClick={FormSubmit} id="Submit" disabled={FormValid || Loading} variant="contained" color="primary" disableElevation>
                    {(Loading)? <CircularProgress /> : <React.Fragment>Login</React.Fragment>}
                </Button>
            </form>
        </React.Fragment>
    );
};

export default LoginDashboardLayout;