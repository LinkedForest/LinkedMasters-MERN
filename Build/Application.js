"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _EndUsersSettigs = _interopRequireDefault(require("./Settings/EndUsers/EndUsersSettigs"));

var _EndUsersAuthRoutes = _interopRequireDefault(require("./Routes/Authentication/EndUsers/EndUsersAuthRoutes"));

var _ConferencesRoutes = _interopRequireDefault(require("./Routes/Conferences/ConferencesRoutes"));

var _EndUsersRoutes = _interopRequireDefault(require("./Routes/EndUsers/EndUsersRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Settings
// Import Routes
//  Main Application
var Application = (0, _express["default"])(); // Application Settings

Application.use(_express["default"].json());
Application.use((0, _morgan["default"])('tiny')); // DotENV Variable

require('dotenv/config'); // End Users Creator


(0, _EndUsersSettigs["default"])().then(); // Application Routes

var API_URL = process.env.API_URL; // End Users Auth Routes

Application.use("".concat(API_URL, "/auth"), _EndUsersAuthRoutes["default"]); // Conferences Routes

Application.use("".concat(API_URL, "/conferences"), _ConferencesRoutes["default"]); // End User Routes

Application.use("".concat(API_URL, "/end-user"), _EndUsersRoutes["default"]);
var _default = Application;
exports["default"] = _default;