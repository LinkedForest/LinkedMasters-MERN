import { Router } from 'express';
const Route = Router();

// Controllers
import * as EndUsers from '../../../Controllers/Authentication/EndUsers/EndUsersAuthControllers';

// Middlewares
import { CheckEndUsersPermissions, CheckEndUsersEmail } from '../../../Middlewares/EndUsers/EndUsersPermissions';

// Login
Route.post('/login', EndUsers.Login);

// Register
Route.post('/register', [CheckEndUsersPermissions, CheckEndUsersEmail], EndUsers.Register);

export default Route;