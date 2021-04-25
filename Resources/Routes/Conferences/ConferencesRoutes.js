import { Router } from 'express';
const Route = Router();

// Controllers
import * as Conferences from '../../Controllers/Conferences/ConferencesControllers';

// Middlewares
import { VerifyDashToken } from '../../Middlewares/JWT/JWTMiddlewares';
import { DashRolesAdmin } from '../../Middlewares/DashRoles/DashRolesMiddlewares';
import { CheckConferencePage } from '../../Middlewares/Conferences/ConferencesMiddlewares';

// Get All Conferences
Route.get('/', Conferences.GetAllConferences);

// Get Conference By ID
Route.get('/:ConferenceID', VerifyDashToken, Conferences.GetConferenceByID);

// Create New Conference
Route.post('/', [VerifyDashToken, DashRolesAdmin, CheckConferencePage], Conferences.CreateNewConference);

// Update Conference By ID
Route.put('/:ConferenceID', [VerifyDashToken, DashRolesAdmin, CheckConferencePage], Conferences.UpdateConferenceByID);

// Force Delete Conference By ID
Route.delete('/:ConferenceID', [VerifyDashToken, DashRolesAdmin], Conferences.ForceDeleteConferenceByID);

// Soft Delete Conference By ID
Route.delete('/soft/:ConferenceID', [VerifyDashToken, DashRolesAdmin], Conferences.SoftDeleteConferenceByID);

export default Route;