"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Database MongoDB
var Database = "mongodb+srv://".concat(process.env.DATABASE_USER, ":").concat(process.env.DATABASE_PASS, "@hooksmasters.5xct6.mongodb.net/").concat(process.env.DATABASE_NAME, "?retryWrites=true&w=majority");
var LocalDatabase = "mongodb://localhost:27017/".concat(process.env.LOCAL_DATABASE_NAME);

_mongoose["default"].connect(LocalDatabase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
  dbName: 'LinkedMasters'
}).then()["catch"](function (Error) {
  console.log('MongoDB Database Not Connected');
});