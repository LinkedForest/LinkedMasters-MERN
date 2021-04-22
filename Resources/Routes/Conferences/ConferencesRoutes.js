import { Router } from 'express';
const Route = Router();

// Controllers
import * as Conferences from '../../Controllers/Conferences/ConferencesControllers';

// Middlewares
import { VerifyDashToken } from '../../Middlewares/JWT/JWTMiddlewares';
import { DashRolesAdmin } from '../../Middlewares/DashRoles/DashRolesMiddlewares';

// Get All Conferences
Route.get('/', Conferences.GetAllConferences);

// Get Conference By ID
Route.get('/:ConferenceID', VerifyDashToken, Conferences.GetConferenceByID);

// Create New Conference
Route.post('/', [VerifyDashToken, DashRolesAdmin], Conferences.CreateNewConference);

// Update Conference By ID
Route.put('/:ConferenceID', [VerifyDashToken, DashRolesAdmin], Conferences.UpdateConferenceByID);

// Soft Delete Conference By ID
Route.delete('/:ConferenceID', [VerifyDashToken, DashRolesAdmin], Conferences.SoftDeleteConferenceByID);

// Force Delete Conference By ID
Route.delete('/:ConferenceID/force-delete', [VerifyDashToken, DashRolesAdmin], Conferences.ForceDeleteConferenceByID);

export default Route;