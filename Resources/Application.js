import Express from 'express';
import Morgan from 'morgan';

// Settings
import EndUsersSettings from './Settings/EndUsers/EndUsersSettigs';

// Import Routes
import EndUsersRouters from "./Routes/Authentication/EndUsers/EndUsersRoutes";
import ConferencesRouters from "./Routes/Conferences/ConferencesRoutes";

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

// EndUsers Routes
Application.use(`${API_URL}/auth`, EndUsersRouters);

// Conferences Routes
Application.use(`${API_URL}/conferences`, ConferencesRouters);

export default Application;