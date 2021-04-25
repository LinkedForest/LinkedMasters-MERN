import React from 'react';

// Material-UI Components
import { Box } from '@material-ui/core';

// Components
import DashboardHeader from "../../../Components/Dashboard/DashboardHeader/DashboardHeader";
import DashboardSideMenu from "../../../Components/Dashboard/DashboardSideMenu/DashboardSideMenu";

const IntroDashboardContainer = () => {
    return (
        <React.Fragment>
            <Box display="flex">
                <DashboardHeader />
                <DashboardSideMenu />
            </Box>
        </React.Fragment>
    );
};

export default IntroDashboardContainer;