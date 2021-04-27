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
import NewConferenceLayout from "../../../Layouts/Dashboard/Conferences/NewConference/NewConferenceLayout";
import ConferencesListLayout from "../../../Layouts/Dashboard/Conferences/ConferencesList/ConferencesListLayout";
import NewPageLayout from "../../../Layouts/Dashboard/Conferences/NewPage/NewPageLayout";
import PagesListLayout from "../../../Layouts/Dashboard/Conferences/PagesList/PagesListLayout";

const IntroDashboardContainer = () => {
    return (
        <React.Fragment>
            <Box display="flex">
                <DashboardHeader />
                <DashboardSideMenu />
                <DashboardBody>
                    <Switch>
                        <Route exact path="/dashboard" component={DashboardAnalysisLayout} />
                        <Route exact path="/dashboard/conferences" component={ConferencesListLayout} />
                        <Route exact path="/dashboard/new-conference" component={NewConferenceLayout} />
                        <Route exact path="/dashboard/pages" component={PagesListLayout} />
                        <Route exact path="/dashboard/new-page" component={NewPageLayout} />
                    </Switch>
                </DashboardBody>
            </Box>
        </React.Fragment>
    );
};

export default IntroDashboardContainer;