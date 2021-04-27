import React, {useContext, useState} from 'react';
import clsx from 'clsx';

// React Router
import { Link } from 'react-router-dom';

// Stores
import { AppearanceStore } from '../../../Sources/Stores/Appearance/AppearanceStore';

// Material-UI Components
import { Drawer, Box, IconButton, List, ListItem, ListItemText, Collapse, Typography, ListItemIcon, Divider } from '@material-ui/core';

// Material-UI Components
import { Adjust, ExpandLess, ExpandMore, Dashboard, EmojiFoodBeverage, Launch, Dns, PostAdd, FileCopy } from '@material-ui/icons';

// Component Styles
import useStyles from './DashboardSideMenu_Styles';

const DashboardSideMenu = () => {
    const classes = useStyles();
    const [ Conferences, setConferences ] = useState(false);
    const { DashSideMenu, setDashSideMenu } = useContext(AppearanceStore);

    // Side Menu
    const handleDrawerClose = () => {
        setDashSideMenu(false);
    };

    // Conferences Group
    const ConferencesClick = () => {
        setConferences(!Conferences)
    }

    return (
        <React.Fragment>
            <Drawer variant="permanent" className={clsx(classes.drawer, {[classes.drawerOpen]: DashSideMenu, [classes.drawerClose]: !DashSideMenu})}
                classes={{paper: clsx({[classes.drawerOpen]: DashSideMenu, [classes.drawerClose]: !DashSideMenu}) }}>

                {/* Brand Logo */}
                <Box className={classes.toolbar}>
                    <Typography variant="h6" className={clsx(classes.textLogo, {[classes.hide]: !DashSideMenu})} gutterBottom>
                        iBuilder
                    </Typography>
                    <IconButton onClick={handleDrawerClose} className={clsx(classes.slideButton, {[classes.hide]: !DashSideMenu})}>
                        <Adjust />
                    </IconButton>
                </Box>

                {/* List Menu */}
                <List>
                    {/* Dashboard */}
                    <ListItem button component={Link} to="/dashboard" className={classes.itemButton}>
                        <ListItemIcon className={classes.slideButton}>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    {/* Conferences */}
                    <ListItem button onClick={ConferencesClick} className={classes.itemButton}>
                        <ListItemIcon className={classes.slideButton}>
                            <EmojiFoodBeverage />
                        </ListItemIcon>
                        <ListItemText primary="Conferences" />
                        <Box className={clsx(classes.slideButton, {[classes.hide]: !DashSideMenu})}>
                            {Conferences ? <ExpandLess /> : <ExpandMore />}
                        </Box>
                    </ListItem>
                    <Collapse in={Conferences} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Divider variant="inset" component="li" />
                            <ListItem button component={Link} to="/dashboard/new-conference" className={classes.itemButtonNest}>
                                <ListItemIcon className={classes.slideButtonNest}>
                                    <Launch />
                                </ListItemIcon>
                                <ListItemText primary="New Conference" />
                            </ListItem>
                            <ListItem button component={Link} to="/dashboard/conferences" className={classes.itemButtonNest}>
                                <ListItemIcon className={classes.slideButtonNest}>
                                    <Dns />
                                </ListItemIcon>
                                <ListItemText primary="Conferences List" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem button component={Link} to="/dashboard/new-page" className={classes.itemButtonNest}>
                                <ListItemIcon className={classes.slideButtonNest}>
                                    <PostAdd />
                                </ListItemIcon>
                                <ListItemText primary="New Page" />
                            </ListItem>
                            <ListItem button component={Link} to="/dashboard/pages" className={classes.itemButtonNest}>
                                <ListItemIcon className={classes.slideButtonNest}>
                                    <FileCopy />
                                </ListItemIcon>
                                <ListItemText primary="Pages List" />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </React.Fragment>
    );
};

export default DashboardSideMenu;