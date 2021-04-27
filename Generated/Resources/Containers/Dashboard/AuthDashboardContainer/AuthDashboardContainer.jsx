import React from 'react';

// React Router
import {Switch, Route} from 'react-router-dom';

// Layouts
import LoginDashboardLayout from "../../../Layouts/Dashboard/Authentication/LoginDashboard/LoginDashboardLayout";
import RegisterDashboardLayout from "../../../Layouts/Dashboard/Authentication/RegisterDashboard/RegisterDashboardLayout";

const AuthDashboardContainer = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/dashboard-auth/login" component={LoginDashboardLayout} />
                <Route exact path="/dashboard-auth/register" component={RegisterDashboardLayout} />
            </Switch>
        </React.Fragment>
    );
};

export default AuthDashboardContainer;