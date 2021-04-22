import { Router } from 'express';
const Route = Router();

// Controllers
import * as DashAuth from '../../Controllers/DashAuth/DashAuthControllers';

// Middlewares
import { CheckDashRoles, CheckDashUsersEmail } from '../../Middlewares/DashUsers/DashUsersMiddlewares';

// Login
Route.post('/login', DashAuth.Login);

// Register
Route.post('/register', [CheckDashRoles, CheckDashUsersEmail], DashAuth.Register);

export default Route;