import React from 'react';

// Component Style
import useStyles from './DashboardAnalysisLayout_Styles';

const DashboardAnalysisLayout = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <h1 className={classes.root}>Dashboard Analysis Layout</h1>
        </React.Fragment>
    );
};

export default DashboardAnalysisLayout;