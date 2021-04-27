import React, {useContext} from 'react';
import clsx from 'clsx';

// Stores
import { AppearanceStore } from '../../../Sources/Stores/Appearance/AppearanceStore';

// Material-UI Components
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

// Material-UI Components
import { Menu } from '@material-ui/icons';

// Component Styles
import useStyles from './DashboardHeader_Styles';

const DashboardHeader = () => {
    const classes = useStyles();
    const { DashSideMenu, setDashSideMenu } = useContext(AppearanceStore);

    const handleDrawerOpen = () => {
        setDashSideMenu(true);
    };

    return (
        <React.Fragment>
            <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: DashSideMenu})}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, {[classes.hide]: DashSideMenu})}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Authentication Builder
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default DashboardHeader;