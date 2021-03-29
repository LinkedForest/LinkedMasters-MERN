import { Router } from 'express';
const Route = Router();

// Controllers
import * as Conferences from '../../Controllers/Conferences/ConferencesControllers';

// Middlewares
import { VerifyToken } from '../../Middlewares/JWT/JWTMiddlewares';
import { EndUserAdminToken, EndUserModeratorToken } from '../../Middlewares/EndUsers/EndUsersVerified';

// Get All Conferences
Route.get('/', [VerifyToken, EndUserAdminToken], Conferences.GetAllConferences);

// Create New Conference
Route.post('/', Conferences.CreateNewConference);

// Get Conference By ID
Route.get('/:ConferenceId', [VerifyToken, EndUserModeratorToken], Conferences.GetConferenceById);

// Update Conference By ID
Route.put('/:ConferenceId', Conferences.UpdateConferenceById);

// Soft Delete Conference By ID
Route.delete('/:ConferenceId',  Conferences.SoftDeleteConferenceById);

// Force Delete Conference By ID
Route.delete('/:ConferenceId',  Conferences.ForceDeleteConferenceById);

export default Route;