"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashRolesAnalyst = exports.DashRolesAdvertiser = exports.DashRolesModerator = exports.DashRolesEditor = exports.DashRolesAdmin = exports.DashRolesUser = void 0;

var _DashUsersModels = _interopRequireDefault(require("../../Models/DashUsers/DashUsersModels"));

var _DashRolesModels = _interopRequireDefault(require("../../Models/DashRoles/DashRolesModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// User Role
var DashRolesUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response, NextFunction) {
    var UserData, FindDashRoles, i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _DashUsersModels["default"].findById(Request.UserID);

          case 2:
            UserData = _context.sent;
            _context.next = 5;
            return _DashRolesModels["default"].find({
              _id: {
                $in: UserData.roles
              }
            });

          case 5:
            FindDashRoles = _context.sent;
            i = 0;

          case 7:
            if (!(i < FindDashRoles.length)) {
              _context.next = 14;
              break;
            }

            if (!(FindDashRoles[i].role === 'User')) {
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
              message: "This Route Protected For User"
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function DashRolesUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Admin Role


exports.DashRolesUser = DashRolesUser;

var DashRolesAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response, NextFunction) {
    var UserData, FindDashRoles, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _DashUsersModels["default"].findById(Request.UserID);

          case 2:
            UserData = _context2.sent;
            _context2.next = 5;
            return _DashRolesModels["default"].find({
              _id: {
                $in: UserData.roles
              }
            });

          case 5:
            FindDashRoles = _context2.sent;
            i = 0;

          case 7:
            if (!(i < FindDashRoles.length)) {
              _context2.next = 14;
              break;
            }

            if (!(FindDashRoles[i].role === 'Admin')) {
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
            return _context2.abrupt("return", Response.status(401).json({
              message: "This Route Protected For Admin"
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function DashRolesAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // Editor Role


exports.DashRolesAdmin = DashRolesAdmin;

var DashRolesEditor = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(Request, Response, NextFunction) {
    var UserData, FindDashRoles, i;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _DashUsersModels["default"].findById(Request.UserID);

          case 2:
            UserData = _context3.sent;
            _context3.next = 5;
            return _DashRolesModels["default"].find({
              _id: {
                $in: UserData.roles
              }
            });

          case 5:
            FindDashRoles = _context3.sent;
            i = 0;

          case 7:
            if (!(i < FindDashRoles.length)) {
              _context3.next = 14;
              break;
            }

            if (!(FindDashRoles[i].role === 'Editor')) {
              _context3.next = 11;
              break;
            }

            NextFunction();
            return _context3.abrupt("return");

          case 11:
            i++;
            _context3.next = 7;
            break;

          case 14:
            return _context3.abrupt("return", Response.status(401).json({
              message: "This Route Protected For Editor"
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function DashRolesEditor(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(); // Moderator Role


exports.DashRolesEditor = DashRolesEditor;

var DashRolesModerator = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(Request, Response, NextFunction) {
    var UserData, FindDashRoles, i;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _DashUsersModels["default"].findById(Request.UserID);

          case 2:
            UserData = _context4.sent;
            _context4.next = 5;
            return _DashRolesModels["default"].find({
              _id: {
                $in: UserData.roles
              }
            });

          case 5:
            FindDashRoles = _context4.sent;
            i = 0;

          case 7:
            if (!(i < FindDashRoles.length)) {
              _context4.next = 14;
              break;
            }

            if (!(FindDashRoles[i].role === 'Moderator')) {
              _context4.next = 11;
              break;
            }

            NextFunction();
            return _context4.abrupt("return");

          case 11:
            i++;
            _context4.next = 7;
            break;

          case 14:
            return _context4.abrupt("return", Response.status(403).json({
              message: "This Route Protected For Moderator"
            }));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function DashRolesModerator(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}(); // Advertiser Role


exports.DashRolesModerator = DashRolesModerator;

var DashRolesAdvertiser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(Request, Response, NextFunction) {
    var UserData, FindDashRoles, i;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _DashUsersModels["default"].findById(Request.UserID);

          case 2:
            UserData = _context5.sent;
            _context5.next = 5;
            return _DashRolesModels["default"].find({
              _id: {
                $in: UserData.roles
              }
            });

          case 5:
            FindDashRoles = _context5.sent;
            i = 0;

          case 7:
            if (!(i < FindDashRoles.length)) {
              _context5.next = 14;
              break;
            }

            if (!(FindDashRoles[i].role === 'Advertiser')) {
              _context5.next = 11;
              break;
            }

            NextFunction();
            return _context5.abrupt("return");

          case 11:
            i++;
            _context5.next = 7;
            break;

          case 14:
            return _context5.abrupt("return", Response.status(403).json({
              message: "This Route Protected For Advertiser"
            }));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function DashRolesAdvertiser(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}(); // Analyst Role


exports.DashRolesAdvertiser = DashRolesAdvertiser;

var DashRolesAnalyst = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(Request, Response, NextFunction) {
    var UserData, FindDashRoles, i;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _DashUsersModels["default"].findById(Request.UserID);

          case 2:
            UserData = _context6.sent;
            _context6.next = 5;
            return _DashRolesModels["default"].find({
              _id: {
                $in: UserData.roles
              }
            });

          case 5:
            FindDashRoles = _context6.sent;
            i = 0;

          case 7:
            if (!(i < FindDashRoles.length)) {
              _context6.next = 14;
              break;
            }

            if (!(FindDashRoles[i].role === 'Analyst')) {
              _context6.next = 11;
              break;
            }

            NextFunction();
            return _context6.abrupt("return");

          case 11:
            i++;
            _context6.next = 7;
            break;

          case 14:
            return _context6.abrupt("return", Response.status(403).json({
              message: "This Route Protected For Analyst"
            }));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function DashRolesAnalyst(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.DashRolesAnalyst = DashRolesAnalyst;