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

// Update Dashboard User By ID
Route.put('/:DashUserID', [VerifyDashToken, DashRolesAdmin], DashUsers.UpdateDashUserByID);

// Force Delete Conference By ID
Route.delete('/:DashUserID', [VerifyDashToken, DashRolesAdmin], DashUsers.ForceDeleteDashUserByID);

// Soft Delete Dashboard User By ID
Route.delete('/soft/:DashUserID', [VerifyDashToken, DashRolesAdmin], DashUsers.SoftDeleteDashUserByID);

export default Route;