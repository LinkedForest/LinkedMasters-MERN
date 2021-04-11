"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EndUserModeratorToken = exports.EndUserAdminToken = void 0;

var _EndUsersModels = _interopRequireDefault(require("../../Models/Authentication/EndUsers/EndUsersModels"));

var _EndUsersPermissions = _interopRequireDefault(require("../../Models/Permissions/EndUsers/EndUsersPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Admin Token
var EndUserAdminToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response, NextFunction) {
    var UserData, EndUserPermissions, i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _EndUsersModels["default"].findById(Request.UserID);

          case 2:
            UserData = _context.sent;
            _context.next = 5;
            return _EndUsersPermissions["default"].find({
              _id: {
                $in: UserData.permissions
              }
            });

          case 5:
            EndUserPermissions = _context.sent;
            i = 0;

          case 7:
            if (!(i < EndUserPermissions.length)) {
              _context.next = 14;
              break;
            }

            if (!(EndUserPermissions[i].permission === 'Admin')) {
              _context.next = 11;
              break;
            }

            NextFunction();
            return _context.abrupt("return");

          case 11:
            i++;
            _context.next = 7;
            break;

          case 14:
            return _context.abrupt("return", Response.status(401).json({
              message: "This Route Protected For Admin"
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function EndUserAdminToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Moderator Token


exports.EndUserAdminToken = EndUserAdminToken;

var EndUserModeratorToken = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response, NextFunction) {
    var UserData, EndUserPermissions, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _EndUsersModels["default"].findById(Request.UserID);

          case 2:
            UserData = _context2.sent;
            _context2.next = 5;
            return _EndUsersPermissions["default"].find({
              _id: {
                $in: UserData.permissions
              }
            });

          case 5:
            EndUserPermissions = _context2.sent;
            i = 0;

          case 7:
            if (!(i < EndUserPermissions.length)) {
              _context2.next = 14;
              break;
            }

            if (!(EndUserPermissions[i].permission === 'Moderator')) {
              _context2.next = 11;
              break;
            }

            NextFunction();
            return _context2.abrupt("return");

          case 11:
            i++;
            _context2.next = 7;
            break;

          case 14:
            return _context2.abrupt("return", Response.status(403).json({
              message: "This Route Protected For Moderator"
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function EndUserModeratorToken(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.EndUserModeratorToken = EndUserModeratorToken;