import Express from 'express';
import Morgan from 'morgan';

// Import Routes
import DashAuthRoutes from "./Routes/DashAuth/DashAuthRoutes";
import DashUsersRouters from "./Routes/DashUsers/DashUsersRoutes";
import ConferencesRouters from "./Routes/Conferences/ConferencesRoutes";
import ConferencePagesRouters from "./Routes/ConferencePages/ConferencePagesRoutes";
// import PageComponentsRouters from "./Routes/PageComponents/PageComponentsRoutes";

//  Main Application
const Application = Express();

// Security Server
Application.use((Request, Response, NextFunction) => {
    Response.setHeader('Access-Control-Allow-Origin', '*');
    Response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    Response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept');
    Response.setHeader('Access-Control-Allow-Credentials', true);
    NextFunction();
});

// Application Settings
Application.use(Express.json());
Application.use(Morgan('tiny'));

// DotENV Variable
require('dotenv/config');

// Add Default Roles
import DefaultDashRoles from './Settings/DefaultData/DashRoles';
DefaultDashRoles().then();

// Application Routes
const API_URL = process.env.API_URL;

// Dashboard Auth Routes
Application.use(`${API_URL}/dash-auth`, DashAuthRoutes);

// Dashboard Users Routes
Application.use(`${API_URL}/dashboard/dash-users`, DashUsersRouters);

// Conferences Routes
Application.use(`${API_URL}/conferences`, ConferencesRouters);

// Conference Pages Routes
Application.use(`${API_URL}/conference-pages`, ConferencePagesRouters);

// Page Components Routes
// Application.use(`${API_URL}/page-components`, PageComponentsRouters);

export default Application;