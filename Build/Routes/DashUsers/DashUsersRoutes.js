"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var DashUsers = _interopRequireWildcard(require("../../Controllers/DashUsers/DashUsersControllers"));

var _JWTMiddlewares = require("../../Middlewares/JWT/JWTMiddlewares");

var _DashRolesMiddlewares = require("../../Middlewares/DashRoles/DashRolesMiddlewares");

var _DashUsersMiddlewares = require("../../Middlewares/DashUsers/DashUsersMiddlewares");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Route = (0, _express.Router)(); // Controllers

// Get All Dashboard Users
Route.get('/', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], DashUsers.GetAllDashUsers); // Get Dashboard Users By ID

Route.get('/:DashUserID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], DashUsers.GetDashUserByID); // Create New Dashboard User

Route.post('/', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin, _DashUsersMiddlewares.CheckDashRoles, _DashUsersMiddlewares.CheckDashUsersEmail], DashUsers.CreateNewDashUser); // Update Dashboard User By ID

Route.put('/:DashUserID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], DashUsers.UpdateDashUserByID); // Soft Delete Dashboard User By ID

Route["delete"]('/:DashUserID', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], DashUsers.SoftDeleteDashUserByID); // Force Delete Conference By ID

Route["delete"]('/:ConferenceID/force-delete', [_JWTMiddlewares.VerifyDashToken, _DashRolesMiddlewares.DashRolesAdmin], DashUsers.ForceDeleteDashUserByID);
var _default = Route;
exports["default"] = _default;