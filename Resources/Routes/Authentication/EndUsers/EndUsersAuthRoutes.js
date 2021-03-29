import { Router } from 'express';
const Route = Router();

// Controllers
import * as EndUsers from '../../../Controllers/Authentication/EndUsers/EndUsersAuthControllers';

// Login
Route.post('/login', EndUsers.Login);

// Register
Route.post('/register', EndUsers.Register);

export default Route;