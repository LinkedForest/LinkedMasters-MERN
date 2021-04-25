"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckDashUsersEmail = exports.CheckDashRoles = void 0;

var _DashUsersModels = _interopRequireDefault(require("../../Models/DashUsers/DashUsersModels"));

var _DashRolesModels = require("../../Models/DashRoles/DashRolesModels");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Check Dashboard Roles
var CheckDashRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response, NextFunction) {
    var Roles, i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Roles = Request.body.roles;

            if (!Roles) {
              _context.next = 9;
              break;
            }

            i = 0;

          case 3:
            if (!(i < Roles.length)) {
              _context.next = 9;
              break;
            }

            if (_DashRolesModels.DashRoles.includes(Roles[i])) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", Response.json({
              message: "".concat(Roles[i], " Role Does Not Exists")
            }));

          case 6:
            i++;
            _context.next = 3;
            break;

          case 9:
            NextFunction();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CheckDashRoles(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Check Dashboard User Email


exports.CheckDashRoles = CheckDashRoles;

var CheckDashUsersEmail = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response, NextFunction) {
    var FindDashUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _DashUsersModels["default"].findOne({
              email: Request.body.email
            });

          case 2:
            FindDashUser = _context2.sent;

            if (!FindDashUser) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", Response.json({
              message: "Dashboard User Already Existing"
            }));

          case 5:
            NextFunction();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function CheckDashUsersEmail(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CheckDashUsersEmail = CheckDashUsersEmail;