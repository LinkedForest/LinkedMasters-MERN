"use strict";

var _Application = _interopRequireDefault(require("./Application"));

var _address = _interopRequireDefault(require("address"));

require("./Database/MongoDBConnection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Database
// Connection Port
var Port = process.env.API_PORT || 8000; // IP Address
// const IPAddress = Address.ip();
// console.log(IPAddress);
// IPv6 Address
// const IPVAddress = Address.ipv6();
// console.log(IPVAddress);
// MAC Address
// Address.mac((Error, MACAddress) => {
//     console.log(MACAddress);
// });

_Application["default"].listen(Port, function () {
  console.log("Server is running http://localhost:".concat(Port));
});