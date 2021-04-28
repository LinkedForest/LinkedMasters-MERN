"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongooseDelete = _interopRequireDefault(require("mongoose-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PageComponentsSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  background: {
    type: String
  },
  image: {
    type: String
  },
  theme: {
    type: String
  },
  component_forms: [{
    ref: "ComponentForms",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});
PageComponentsSchema.plugin(_mongooseDelete["default"], {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: true
});

var _default = (0, _mongoose.model)('PageComponents', PageComponentsSchema);

exports["default"] = _default;