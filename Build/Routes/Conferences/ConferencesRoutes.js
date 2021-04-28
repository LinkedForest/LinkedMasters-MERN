"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var Conferences = _interopRequireWildcard(require("../../Controllers/Conferences/ConferencesControllers"));

var _JWTMiddlewares = require("../../Middlewares/JWT/JWTMiddlewares");

var _DashRolesMiddlewares = require("../../Middlewares/DashRoles/DashRolesMiddlewares");

var _ConferencesMiddlewares = require("../../Middlewares/Conferences/ConferencesMiddlewares");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Route = (0, _express.Router)(); // Controllers

// Get All Conferences
Route.get('/', Conferences.GetAllConferences); // Get Conference By ID

Route.get('/:ConferenceID', _JWTMiddlewares.VerifyDashToken, Conferences.GetConferenceByID); // Create New Conference

Route.post('/', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _ConferencesMiddlewares.CheckConferencePage], Conferences.CreateNewConference); // Update Conference By ID

Route.put('/:ConferenceID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _ConferencesMiddlewares.CheckConferencePage], Conferences.UpdateConferenceByID); // Force Delete Conference By ID

Route["delete"]('/:ConferenceID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], Conferences.ForceDeleteConferenceByID); // Soft Delete Conference By ID

Route["delete"]('/soft/:ConferenceID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], Conferences.SoftDeleteConferenceByID);
var _default = Route;
exports["default"] = _default;