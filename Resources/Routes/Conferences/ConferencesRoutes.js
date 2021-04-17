import { Router } from 'express';
const Route = Router();

// Controllers
import * as Conferences from '../../Controllers/Conferences/ConferencesControllers';

// Middlewares
import { VerifyToken } from '../../Middlewares/JWT/JWTMiddlewares';
import { EndUserAdminToken, EndUserModeratorToken } from '../../Middlewares/EndUsers/EndUsersVerified';

// Get All Conferences
Route.get('/', Conferences.GetAllConferences);

// Create New Conference
Route.post('/', [VerifyToken, EndUserModeratorToken], Conferences.CreateNewConference);

// Get Conference By ID
Route.get('/:ConferenceId', VerifyToken, Conferences.GetConferenceById);

// Update Conference By ID
Route.put('/:ConferenceId', [VerifyToken, EndUserAdminToken], Conferences.UpdateConferenceById);

// Soft Delete Conference By ID
Route.delete('/:ConferenceId', [VerifyToken, EndUserAdminToken], Conferences.SoftDeleteConferenceById);

// Force Delete Conference By ID
Route.delete('/:ConferenceId/force-delete', [VerifyToken, EndUserAdminToken], Conferences.ForceDeleteConferenceById);

export default Route;