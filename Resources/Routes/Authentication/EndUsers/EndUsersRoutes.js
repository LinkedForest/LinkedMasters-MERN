import { Router } from 'express';
const Route = Router();

// Authentication Controllers
import * as EndUsers from '../../../Controllers/Authentication/EndUsers/EndUsersControllers';

// Login
Route.post('/login', EndUsers.Login);

// Register
Route.post('/register', EndUsers.Register);

export default Route;