"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongooseDelete = _interopRequireDefault(require("mongoose-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConferencePagesSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  background: {
    type: String
  },
  conference_id: {
    type: String,
    required: true
  },
  page_components: [{
    ref: "PageComponents",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});
ConferencePagesSchema.plugin(_mongooseDelete["default"], {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: true
});

var _default = (0, _mongoose.model)('ConferencePages', ConferencePagesSchema);

exports["default"] = _default;