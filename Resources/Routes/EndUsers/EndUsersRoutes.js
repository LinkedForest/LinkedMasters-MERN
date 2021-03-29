import { Router } from 'express';
const Route = Router();

// Controllers
import * as EndUsers from '../../Controllers/EndUsers/EndUsersControllers';

// Middlewares
import { VerifyToken } from '../../Middlewares/JWT/JWTMiddlewares';
import { EndUserAdminToken } from '../../Middlewares/EndUsers/EndUsersVerified';
import { CheckEndUsersPermissions, CheckEndUsersEmail } from '../../Middlewares/EndUsers/EndUsersPermissions';

// Create New End User
Route.post('/', [VerifyToken, EndUserAdminToken, CheckEndUsersPermissions, CheckEndUsersEmail], EndUsers.CreateNewEndUser);

export default Route;