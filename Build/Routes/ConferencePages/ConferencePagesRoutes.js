"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var ConferencePages = _interopRequireWildcard(require("../../Controllers/ConferencePages/ConferencePagesControllers"));

var _JWTMiddlewares = require("../../Middlewares/JWT/JWTMiddlewares");

var _DashRolesMiddlewares = require("../../Middlewares/DashRoles/DashRolesMiddlewares");

var _ConferencePagesMiddlewares = require("../../Middlewares/ConferencePages/ConferencePagesMiddlewares");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Route = (0, _express.Router)(); // Controllers

// Get All Conference Pages
Route.get('/', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], ConferencePages.GetAllConferencePages); // Get All Conference Pages By Conference ID

Route.get('/conference', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], ConferencePages.GetAllConferencePagesByConferenceID); // Get Conference Page By ID

Route.get('/:ConferencePageID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], ConferencePages.GetConferencePageByID); // Create New Conference Page

Route.post('/', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _ConferencePagesMiddlewares.CheckConference], ConferencePages.CreateNewConferencePage); // Update Conference Page By ID

Route.put('/:ConferencePageID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _ConferencePagesMiddlewares.CheckConference], ConferencePages.UpdateConferencePageByID); // Force Delete Conference Page By ID

Route["delete"]('/:ConferencePageID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _ConferencePagesMiddlewares.CheckConference], ConferencePages.ForceDeleteConferencePageByID); // Soft Delete Conference Page By ID

Route["delete"]('/soft/:ConferencePageID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], ConferencePages.SoftDeleteConferencePageByID);
var _default = Route;
exports["default"] = _default;