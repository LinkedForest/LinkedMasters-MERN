import { Router } from 'express';
const Route = Router();

// Conferences Controllers
import * as Conferences from '../../Controllers/Conferences/ConferencesControllers';

// Get All Conferences
Route.get('/', Conferences.GetAllConferences);

// Create New Conference
Route.post('/', Conferences.CreateNewConference);

// Get Conference By ID
Route.get('/:ConferenceId', Conferences.GetConferenceById);

// Update Conference By ID
Route.put('/:ConferenceId', Conferences.UpdateConferenceById);

// Delete Conference By ID
Route.delete('/:ConferenceId',  Conferences.DeleteConferenceById);

export default Route;