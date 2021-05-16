import React from "react";

// React Router
import {Redirect} from "react-router-dom";

// Authenticated Check
import AuthFrontViewMiddle from '../Middlewares/FrontView/AuthFrontViewMiddle';
import AuthDashboardMiddle from '../Middlewares/Dashboard/AuthDashboardMiddle';

// Routes Permissions
import RouterRender from './RouterRender';

// Containers
// Front Views
import AuthFrontViewContainer from "../Containers/FrontViews/AuthFrontViewContainer/AuthFrontViewContainer";
import IntroFrontViewContainer from "../Containers/FrontViews/IntroFrontViewContainer/IntroFrontViewContainer";

// Dashboard
import AuthDashboardContainer from "../Containers/Dashboard/AuthDashboardContainer/AuthDashboardContainer";
import IntroDashboardContainer from "../Containers/Dashboard/IntroDashboardContainer/IntroDashboardContainer";

// Routes List
const RoutesMaster = [

    // Master Route
    {
        path: '/',
        component: (props) => {
            return (
                <RouterRender {...props} />
            )
        },
        // Front Views Routes
        PermissionsRoute: [
            {
                path: '/',
                exact: true,
                title: 'LinkedMasters',
                authRequired: false,
                component: IntroFrontViewContainer
            },
            {
                path: '/auth',
                component: (props) => {
                    if (AuthFrontViewMiddle()) {
                        return (
                            <Redirect to={'/'} />
                        )
                    } else {
                        return (
                            <RouterRender {...props} />
                        )
                    }
                },
                // Front Views Auth Routes
                PermissionsRoute: [
                    {
                        path: '/auth/login',
                        exact: true,
                        title: 'LinkedMasters - Login',
                        authRequired: false,
                        component: AuthFrontViewContainer
                    },
                    {
                        path: '/auth/register',
                        exact: true,
                        title: 'LinkedMasters - Register',
                        authRequired: false,
                        component: AuthFrontViewContainer
                    }
                ]
            },
            {
                path: '/dashboard',
                component: (props) => {
                    if (AuthDashboardMiddle()) {
                        return (
                            <RouterRender {...props} />
                        )
                    } else {
                        return (
                            <Redirect to={'/dashboard-auth/login'} />
                        )
                    }
                },
                // Dashboard Routes
                PermissionsRoute: [
                    {
                        path: '/dashboard',
                        exact: true,
                        title: 'LinkedMasters - Dashboard',
                        authRequired: false,
                        component: IntroDashboardContainer
                    },
                    {
                        path: '/dashboard/conferences',
                        exact: true,
                        title: 'LinkedMasters - Conferences',
                        authRequired: false,
                        component: IntroDashboardContainer
                    },
                    {
                        path: '/dashboard/new-conference',
                        exact: true,
                        title: 'LinkedMasters - New Conferences',
                        authRequired: false,
                        component: IntroDashboardContainer
                    },
                    {
                        path: '/dashboard/pages',
                        exact: true,
                        title: 'LinkedMasters - Pages',
                        authRequired: false,
                        component: IntroDashboardContainer
                    },
                    {
                        path: '/dashboard/new-page',
                        exact: true,
                        title: 'LinkedMasters - New Page',
                        authRequired: false,
                        component: IntroDashboardContainer
                    }
                ]
            },
            {
                path: '/dashboard-auth',
                component: (props) => {
                    if (AuthDashboardMiddle()) {
                        return (
                            <Redirect to={'/dashboard'} />
                        )
                    } else {
                        return (
                            <RouterRender {...props} />
                        )
                    }
                },
                // Dashboard Auth Routes
                PermissionsRoute: [
                    {
                        path: '/dashboard-auth/login',
                        exact: true,
                        title: 'LinkedMasters - Dashboard - Login',
                        authRequired: false,
                        component: AuthDashboardContainer
                    },
                    {
                        path: '/dashboard-auth/register',
                        exact: true,
                        title: 'LinkedMasters - Dashboard - Register',
                        authRequired: false,
                        component: AuthDashboardContainer
                    }
                ]
            }
        ]
    },
]

export default RoutesMaster;