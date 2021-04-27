import React from 'react';

// Material-UI Components
import { Box } from '@material-ui/core';

// Component Styles
import useStyles from './DashboardBody_Styles';

const DashboardBody = ({children}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.content}>
                {children}
            </Box>
        </React.Fragment>
    );
};

export default DashboardBody;