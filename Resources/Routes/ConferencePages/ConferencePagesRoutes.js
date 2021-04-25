import { Router } from 'express';
const Route = Router();

// Controllers
import * as ConferencePages from '../../Controllers/ConferencePages/ConferencePagesControllers';

// Middlewares
import { VerifyDashToken } from '../../Middlewares/JWT/JWTMiddlewares';
import { DashRolesAdmin } from '../../Middlewares/DashRoles/DashRolesMiddlewares';
import { CheckConference } from '../../Middlewares/ConferencePages/ConferencePagesMiddlewares';

// Get All Conference Pages
Route.get('/', [VerifyDashToken, DashRolesAdmin], ConferencePages.GetAllConferencePages);

// Get All Conference Pages By Conference ID
Route.get('/conference', [VerifyDashToken, DashRolesAdmin], ConferencePages.GetAllConferencePagesByConferenceID);

// Get Conference Page By ID
Route.get('/:ConferencePageID', [VerifyDashToken, DashRolesAdmin], ConferencePages.GetConferencePageByID);

// Create New Conference Page
Route.post('/', [VerifyDashToken, DashRolesAdmin, CheckConference], ConferencePages.CreateNewConferencePage);

// Update Conference Page By ID
Route.put('/:ConferencePageID', [VerifyDashToken, DashRolesAdmin, CheckConference], ConferencePages.UpdateConferencePageByID);

// Force Delete Conference Page By ID
Route.delete('/:ConferencePageID', [VerifyDashToken, DashRolesAdmin, CheckConference], ConferencePages.ForceDeleteConferencePageByID);

// Soft Delete Conference Page By ID
Route.delete('/soft/:ConferencePageID', [VerifyDashToken, DashRolesAdmin], ConferencePages.SoftDeleteConferencePageByID);

export default Route;