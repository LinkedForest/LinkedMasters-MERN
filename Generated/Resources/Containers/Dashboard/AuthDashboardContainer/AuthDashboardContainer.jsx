import React from 'react';

// React Router
import {Switch, Route} from 'react-router-dom';

// Components
import DashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader";
import DashboardFooter from "../../../Components/Dashboard/DashboardFooter/DashboardFooter";

// Layouts
import LoginDashboardLayout from "../../../Layouts/Dashboard/Authentication/LoginDashboardLayout/LoginDashboardLayout";
import RegisterDashboardLayout from "../../../Layouts/Dashboard/Authentication/RegisterDashboardLayout/RegisterDashboardLayout";

const AuthDashboardContainer = () => {
    return (
        <React.Fragment>
            <DashboardHeader />
            <Switch>
                <Route exact path="/dashboard-auth/login" component={LoginDashboardLayout} />
                <Route exact path="/dashboard-auth/register" component={RegisterDashboardLayout} />
            </Switch>
            <DashboardFooter />
        </React.Fragment>
    );
};

export default AuthDashboardContainer;