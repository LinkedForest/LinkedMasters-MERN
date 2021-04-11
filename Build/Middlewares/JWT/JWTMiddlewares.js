"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _JWTConfigurations = _interopRequireDefault(require("../../Functions/JWT/JWTConfigurations"));

var _EndUsersModels = _interopRequireDefault(require("../../Models/Authentication/EndUsers/EndUsersModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Verify Token
var VerifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response, NextFunction) {
    var Token, JWTData, EndUserData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            Token = Request.headers["authorization"] && Request.headers["authorization"].split("Bearer ")[1];

            if (Token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", Response.status(403).json({
              message: 'This Route Need Token Provider'
            }));

          case 4:
            JWTData = _jsonwebtoken["default"].verify(Token, _JWTConfigurations["default"].SECRET);
            Request.UserID = JWTData.id;
            _context.next = 8;
            return _EndUsersModels["default"].findById(Request.UserID, {
              password: 0
            });

          case 8:
            EndUserData = _context.sent;

            if (EndUserData) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", Response.status(404).json({
              message: 'EndUser Not Found'
            }));

          case 11:
            NextFunction();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", Response.status(401).json({
              message: 'This EndUser Not Unauthorized'
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function VerifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.VerifyToken = VerifyToken;