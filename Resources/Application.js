import Express from 'express';
import Morgan from 'morgan';

// Settings
import EndUsersSettings from './Settings/EndUsers/EndUsersSettigs';

// Import Routes
import EndUsersAuthRouters from "./Routes/Authentication/EndUsers/EndUsersAuthRoutes";
import ConferencesRouters from "./Routes/Conferences/ConferencesRoutes";
import EndUsersRouters from "./Routes/EndUsers/EndUsersRoutes";

//  Main Application
const Application = Express();

// Application Settings
Application.use(Express.json());
Application.use(Morgan('tiny'));

// DotENV Variable
require('dotenv/config');

// End Users Creator
EndUsersSettings().then();

// Application Routes
const API_URL = process.env.API_URL;

// End Users Auth Routes
Application.use(`${API_URL}/auth`, EndUsersAuthRouters);

// Conferences Routes
Application.use(`${API_URL}/conferences`, ConferencesRouters);

// End User Routes
Application.use(`${API_URL}/end-user`, EndUsersRouters);

export default Application;