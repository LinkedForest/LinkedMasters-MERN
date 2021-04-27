import React from 'react';

// React Router
import {Switch, Route} from 'react-router-dom';

// Material-UI Components
import { Box } from '@material-ui/core';

// Components
import DashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader";
import DashboardSideMenu from "../../../Components/Dashboard/DashboardSideMenu/DashboardSideMenu";
import DashboardBody from "../../../Components/Dashboard/DashboardBody/DashboardBody";

// Layouts
import DashboardAnalysisLayout from "../../../Layouts/Dashboard/Analysis/DashboardAnalysis/DashboardAnalysisLayout";
import DashboardConferencesLayout from "../../../Layouts/Dashboard/Conferences/DashboardConferences/DashboardConferencesLayout";

const IntroDashboardContainer = () => {
    return (
        <React.Fragment>
            <Box display="flex">
                <DashboardHeader />
                <DashboardSideMenu />
                <DashboardBody>
                    <Switch>
                        <Route exact path="/dashboard" component={DashboardAnalysisLayout} />
                        <Route exact path="/dashboard/conferences" component={DashboardConferencesLayout} />
                    </Switch>
                </DashboardBody>
            </Box>
        </React.Fragment>
    );
};

export default IntroDashboardContainer;