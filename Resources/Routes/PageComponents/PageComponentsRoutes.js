import { Router } from 'express';
const Route = Router();

// Controllers
import * as PageComponents from '../../Controllers/PageComponents/PageComponentsControllers';

// Middlewares
import { VerifyDashToken } from '../../Middlewares/JWT/JWTMiddlewares';
import { DashRolesAdmin } from '../../Middlewares/DashRoles/DashRolesMiddlewares';
import { CheckConferencePage } from '../../Middlewares/PageComponents/PageComponentsMiddlewares';

// Get All Page Components
Route.get('/', [VerifyDashToken, DashRolesAdmin], PageComponents.GetAllPageComponents);

// Get All Page Components By Conference Page ID
Route.get('/conference-page', [VerifyDashToken, DashRolesAdmin], PageComponents.GetAllPageComponentsByConferencePageID);

// Get Page Component By ID
Route.get('/:PageComponentsID', [VerifyDashToken, DashRolesAdmin], PageComponents.GetPageComponentByID);

// Create New Page Component
Route.post('/', [VerifyDashToken, DashRolesAdmin, CheckConferencePage], PageComponents.CreateNewPageComponent);

// Update Page Component By ID
Route.put('/:PageComponentsID', [VerifyDashToken, DashRolesAdmin, CheckConferencePage], PageComponents.UpdatePageComponentByID);

// Force Delete Page Component By ID
Route.delete('/:PageComponentsID', [VerifyDashToken, DashRolesAdmin, CheckConferencePage], PageComponents.ForceDeletePageComponentByID);

// Soft Delete Page Component By ID
Route.delete('/soft/:PageComponentsID', [VerifyDashToken, DashRolesAdmin], PageComponents.SoftDeletePageComponentByID);

export default Route;