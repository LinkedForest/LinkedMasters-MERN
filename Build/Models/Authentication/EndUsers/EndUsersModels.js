"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _mongoose = require("mongoose");

var _mongooseDelete = _interopRequireDefault(require("mongoose-delete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var EndUsersSchema = new _mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  birthdate: {
    type: Date,
    required: false
  },
  permissions: [{
    ref: "EndUsersPermissions",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
}); // Encrypt Password

EndUsersSchema.statics.EncryptPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Password) {
    var GenSalt;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcryptjs["default"].genSalt(10);

          case 2:
            GenSalt = _context.sent;
            _context.next = 5;
            return _bcryptjs["default"].hash(Password, GenSalt);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(); // Compare Password


EndUsersSchema.statics.ComparePassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Password, ReceivedPassword) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _bcryptjs["default"].compare(Password, ReceivedPassword);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

EndUsersSchema.plugin(_mongooseDelete["default"], {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: true
});

var _default = (0, _mongoose.model)('EndUsers', EndUsersSchema);

exports["default"] = _default;