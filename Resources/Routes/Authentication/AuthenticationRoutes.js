import { Router } from 'express';
const Route = Router();

// Authentication Controllers
import * as Authentication from '../../Controllers/Authentication/AuthenticationControllers';

// Login
Route.post('/', Authentication.Login);

// Registration
Route.post('/', Authentication.Registration);

export default Route;