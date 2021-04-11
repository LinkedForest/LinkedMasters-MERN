"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EndUsersPermissions = void 0;

var _mongoose = require("mongoose");

var EndUsersPermissionsSchema = new _mongoose.Schema({
  permission: {
    type: String
  }
}, {
  versionKey: false
});
var EndUsersPermissions = ["User", "Moderator", "Admin"];
exports.EndUsersPermissions = EndUsersPermissions;

var _default = (0, _mongoose.model)('EndUsersPermissions', EndUsersPermissionsSchema);

exports["default"] = _default;