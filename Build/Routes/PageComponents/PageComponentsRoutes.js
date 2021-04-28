"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var PageComponents = _interopRequireWildcard(require("../../Controllers/PageComponents/PageComponentsControllers"));

var _JWTMiddlewares = require("../../Middlewares/JWT/JWTMiddlewares");

var _DashRolesMiddlewares = require("../../Middlewares/DashRoles/DashRolesMiddlewares");

var _PageComponentsMiddlewares = require("../../Middlewares/PageComponents/PageComponentsMiddlewares");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Route = (0, _express.Router)(); // Controllers

// Get All Page Components
Route.get('/', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], PageComponents.GetAllPageComponents); // Get All Page Components By Conference Page ID

Route.get('/conference-page', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], PageComponents.GetAllPageComponentsByConferencePageID); // Get Page Component By ID

Route.get('/:PageComponentsID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], PageComponents.GetPageComponentByID); // Create New Page Component

Route.post('/', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _PageComponentsMiddlewares.CheckConferencePage], PageComponents.CreateNewPageComponent); // Update Page Component By ID

Route.put('/:PageComponentsID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _PageComponentsMiddlewares.CheckConferencePage], PageComponents.UpdatePageComponentByID); // Force Delete Page Component By ID

Route["delete"]('/:PageComponentsID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _PageComponentsMiddlewares.CheckConferencePage], PageComponents.ForceDeletePageComponentByID); // Soft Delete Page Component By ID

Route["delete"]('/soft/:PageComponentsID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], PageComponents.SoftDeletePageComponentByID);
var _default = Route;
exports["default"] = _default;