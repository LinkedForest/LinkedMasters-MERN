"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ConferencesAuthPagesSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  components: [{
    ref: "ConferencesComponents",
    type: _mongoose.Schema.Types.ObjectId
  }],
  forms: [{
    ref: "ConferencesForms",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('ConferencesAuthPages', ConferencesAuthPagesSchema);

exports["default"] = _default;