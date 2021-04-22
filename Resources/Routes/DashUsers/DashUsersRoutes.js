import { Router } from 'express';
const Route = Router();

// Controllers
import * as DashUsers from '../../Controllers/DashUsers/DashUsersControllers';

// Middlewares
import { CheckDashRoles, CheckDashUsersEmail } from '../../Middlewares/DashUsers/DashUsersMiddlewares';

// Login
Route.post('/login', DashUsers.Login);

// Register
Route.post('/register', [CheckDashRoles, CheckDashUsersEmail], DashUsers.Register);

export default Route;