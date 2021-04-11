"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckEndUsersPermissions = exports.CheckEndUsersEmail = void 0;

var _EndUsersPermissions = require("../../Models/Permissions/EndUsers/EndUsersPermissions");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Check End User Email
var CheckEndUsersEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response, NextFunction) {
    var EndUser;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return EndUsers.findOne({
              email: Request.body.email
            });

          case 2:
            EndUser = _context.sent;

            if (!EndUser) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", Response.json({
              message: "EndUser Already Existing"
            }));

          case 5:
            NextFunction();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CheckEndUsersEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Check End User Permissions


exports.CheckEndUsersEmail = CheckEndUsersEmail;

var CheckEndUsersPermissions = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response, NextFunction) {
    var Permissions, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Permissions = Request.body.permissions;

            if (!Permissions) {
              _context2.next = 9;
              break;
            }

            i = 0;

          case 3:
            if (!(i < Permissions.length)) {
              _context2.next = 9;
              break;
            }

            if (_EndUsersPermissions.EndUsersPermissions.includes(Permissions[i])) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", Response.json({
              message: "Permission ".concat(Permissions[i], " Does Not Exists")
            }));

          case 6:
            i++;
            _context2.next = 3;
            break;

          case 9:
            NextFunction();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function CheckEndUsersPermissions(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CheckEndUsersPermissions = CheckEndUsersPermissions;