import React from 'react';

// Material-UI Components
import {Box, Button, CircularProgress, TextField, Typography} from '@material-ui/core';

// Operations
import LoginDashboardFunctions from '../../../../Functions/Dashboard/AuthDashboardFunctions/LoginDashboardFunctions';

// Component Style
import useStyles from './LoginDashboardLayout_Styles';

const LoginDashboardLayout = () => {
    const classes = useStyles();
    const {loginDashboard, FormData, FormValid, FormSubmit, Loading, Error} = LoginDashboardFunctions();

    // Submit With Enter Key
    window.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("Submit").click();
        }
    });

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Typography variant="h4" className={classes.title} gutterBottom>
                    Login
                </Typography>
                <form noValidate autoComplete="off" className={classes.container}>
                    <TextField className={classes.input} value={loginDashboard.email || ''} onChange={FormData} type="email" name="email" label="Email" variant="outlined"/>
                    <TextField className={classes.input} value={loginDashboard.password || ''} onChange={FormData} type="password" name="password" label="Password" variant="outlined"/>
                    {Error &&
                        <Typography variant="overline" display="block" gutterBottom className={classes.errorText}>
                            {Error.message}
                        </Typography>
                    }
                    <Button onClick={FormSubmit} id="Submit" disabled={FormValid || Loading} variant="contained" className={classes.button} disableElevation>
                        {(Loading) ? <CircularProgress /> : <React.Fragment>Login</React.Fragment>}
                    </Button>
                </form>
            </Box>
        </React.Fragment>
    );
};

export default LoginDashboardLayout;