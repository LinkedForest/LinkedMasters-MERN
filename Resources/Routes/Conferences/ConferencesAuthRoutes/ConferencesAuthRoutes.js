import { Router } from 'express';
const Route = Router();

// Controllers
import * as ConferencesAuthPages from '../../../Controllers/Conferences/ConferencesAuthPages/ConferencesAuthPagesControllers';

// Get All Conferences Auth. Pages
Route.get('/', ConferencesAuthPages.GetAllConferencesAuthPages);

// Create New Conference
Route.post('/', ConferencesAuthPages.CreateNewConferenceAuthPage);

export default Route;