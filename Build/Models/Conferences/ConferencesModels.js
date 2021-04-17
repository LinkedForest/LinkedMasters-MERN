"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongooseDelete = _interopRequireDefault(require("mongoose-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConferencesSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    "default": "New Conference"
  },
  description: {
    type: String,
    required: true,
    "default": "It's New Conference"
  },
  logo_image: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true,
    "default": new Date().toISOString()
  },
  start_time: {
    type: String,
    required: true
  },
  theme_color: {
    type: String,
    required: true
  },
  auth_pages: [{
    ref: "ConferencesAuthPages",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});
ConferencesSchema.plugin(_mongooseDelete["default"], {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: true
});

var _default = (0, _mongoose.model)('Conferences', ConferencesSchema);

exports["default"] = _default;