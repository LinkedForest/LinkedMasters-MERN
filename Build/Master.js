"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Application = (0, _express["default"])(); // DotENV Variable

require('dotenv/config');

var Port = process.env.API_PORT || 5000;
Application.listen(Port, function () {
  console.log("Server is running http://localhost:".concat(Port));
});