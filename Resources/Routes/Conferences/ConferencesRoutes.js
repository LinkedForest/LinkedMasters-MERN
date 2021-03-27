import { Router } from 'express';
const Route = Router();

// Conferences Controllers
import * as Conferences from '../../Controllers/Conferences/ConferencesControllers';

// JWT Middlewares
import { VerifyToken } from '../../Middlewares/JWT/JWTMiddlewares';

// Get All Conferences
Route.get('/', VerifyToken, Conferences.GetAllConferences);

// Create New Conference
Route.post('/', Conferences.CreateNewConference);

// Get Conference By ID
Route.get('/:ConferenceId', Conferences.GetConferenceById);

// Update Conference By ID
Route.put('/:ConferenceId', Conferences.UpdateConferenceById);

// Soft Delete Conference By ID
Route.delete('/:ConferenceId',  Conferences.SoftDeleteConferenceById);

// Force Delete Conference By ID
Route.delete('/:ConferenceId',  Conferences.ForceDeleteConferenceById);

export default Route;