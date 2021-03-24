import Express from 'express';
import Morgan from 'morgan';

// Import Routes
import AuthenticationRouters from "./Routes/Authentication/AuthenticationRoutes";
import ConferencesRouters from "./Routes/Conferences/ConferencesRoutes";

//  Main Application
const Application = Express();

// Application Settings
Application.use(Express.json());
Application.use(Morgan('tiny'));

// DotENV Variable
require('dotenv/config');

// Application Routes
const API_URL = process.env.API_URL;

// Conferences Routes
Application.use(`${API_URL}/conferences`, ConferencesRouters);

export default Application;