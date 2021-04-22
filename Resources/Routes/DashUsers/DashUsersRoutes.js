import { Router } from 'express';
const Route = Router();

// Controllers
import * as DashUsers from '../../Controllers/DashUsers/DashUsersControllers';

// Middlewares
import { VerifyDashToken } from '../../Middlewares/JWT/JWTMiddlewares';
import { DashRolesAdmin } from '../../Middlewares/DashRoles/DashRolesMiddlewares';
import { CheckDashRoles, CheckDashUsersEmail } from '../../Middlewares/DashUsers/DashUsersMiddlewares';

// Get All Dashboard Users
Route.get('/', [VerifyDashToken, DashRolesAdmin], DashUsers.GetAllDashUsers);

// Get Dashboard Users By ID
Route.get('/:DashUserID', [VerifyDashToken, DashRolesAdmin], DashUsers.GetDashUserByID);

// Create New Dashboard User
Route.post('/', [VerifyDashToken, DashRolesAdmin, CheckDashRoles, CheckDashUsersEmail], DashUsers.CreateNewDashUser);

export default Route;