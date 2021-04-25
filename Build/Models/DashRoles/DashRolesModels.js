"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DashRoles = void 0;

var _mongoose = require("mongoose");

var DashRolesSchema = new _mongoose.Schema({
  role: {
    type: String
  }
}, {
  versionKey: false
});
var DashRoles = ["User", "Admin", "Editor", "Moderator", "Advertiser", "Analyst"];
exports.DashRoles = DashRoles;

var _default = (0, _mongoose.model)('DashRoles', DashRolesSchema);

exports["default"] = _default;