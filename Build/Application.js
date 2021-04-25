"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _DashAuthRoutes = _interopRequireDefault(require("./Routes/DashAuth/DashAuthRoutes"));

var _DashUsersRoutes = _interopRequireDefault(require("./Routes/DashUsers/DashUsersRoutes"));

var _DashRoles = _interopRequireDefault(require("./Settings/DefaultData/DashRoles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import Routes
// import ConferencesRouters from "./Routes/Conferences/ConferencesRoutes";
// import ConferencesAuthPagesRouters from "./Routes/Conferences/ConferencesAuthRoutes/ConferencesAuthRoutes";
//  Main Application
var Application = (0, _express["default"])(); // Security Server

Application.use(function (Request, Response, NextFunction) {
  Response.setHeader('Access-Control-Allow-Origin', '*');
  Response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  Response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept');
  Response.setHeader('Access-Control-Allow-Credentials', true);
  NextFunction();
}); // Application Settings

Application.use(_express["default"].json());
Application.use((0, _morgan["default"])('tiny')); // DotENV Variable

require('dotenv/config'); // Add Default Roles


(0, _DashRoles["default"])().then(); // Application Routes

var API_URL = process.env.API_URL; // Dashboard Auth Routes

Application.use("".concat(API_URL, "/dash-auth"), _DashAuthRoutes["default"]); // Dashboard Users Routes

Application.use("".concat(API_URL, "/dashboard/dash-users"), _DashUsersRoutes["default"]); // Conferences Routes
// Application.use(`${API_URL}/conferences`, ConferencesRouters);
// Conferences Auth. Pages Routes
// Application.use(`${API_URL}/conferences/:ConferenceId`, ConferencesAuthPagesRouters);

var _default = Application;
exports["default"] = _default;