import React from 'react';

// React Router
import {Switch, Route} from "react-router-dom";

// Components
import FrontViewsHeader from "../../../Components/FrontViews/FrontViewsHeader/FrontViewsHeader";
import FrontViewsFooter from "../../../Components/FrontViews/FrontViewsFooter/FrontViewsFooter";

// Layouts
import LoginFrontViewLayout from "../../../Layouts/FrontViews/Authentication/LoginFrontView/LoginFrontViewLayout";
import RegisterFrontViewLayout from "../../../Layouts/FrontViews/Authentication/RegisterFrontView/RegisterFrontViewLayout";

const AuthFrontViewContainer = () => {
    return (
        <React.Fragment>
            <FrontViewsHeader />
            <Switch>
                <Route exact path="/auth/login" component={LoginFrontViewLayout} />
                <Route exact path="/auth/register" component={RegisterFrontViewLayout} />
            </Switch>
            <FrontViewsFooter />
        </React.Fragment>
    );
};

export default AuthFrontViewContainer;