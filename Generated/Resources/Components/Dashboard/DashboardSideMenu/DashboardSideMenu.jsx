import React, {useContext} from 'react';
import clsx from 'clsx';

// React Router
import { Link } from 'react-router-dom';

// Stores
import { AppearanceStore } from '../../../Sources/Stores/Appearance/AppearanceStore';

// Material-UI Components
import { Drawer, Box, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

// Material-UI Components
import { ChevronLeft, MoveToInbox } from '@material-ui/icons';

// Component Styles
import useStyles from './DashboardSideMenu_Styles';

const DashboardSideMenu = () => {
    const classes = useStyles();
    const { DashSideMenu, setDashSideMenu } = useContext(AppearanceStore);

    const handleDrawerClose = () => {
        setDashSideMenu(false);
    };

    return (
        <React.Fragment>
            <Drawer variant="permanent" className={clsx(classes.drawer, {[classes.drawerOpen]: DashSideMenu, [classes.drawerClose]: !DashSideMenu})}
                classes={{paper: clsx({[classes.drawerOpen]: DashSideMenu, [classes.drawerClose]: !DashSideMenu}) }}>
                <Box className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon><MoveToInbox /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="/dashboard/conferences">
                        <ListItemIcon><MoveToInbox /></ListItemIcon>
                        <ListItemText primary="Conferences" />
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
};

export default DashboardSideMenu;