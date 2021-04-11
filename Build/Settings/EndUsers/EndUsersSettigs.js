"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EndUsersPermissions = _interopRequireDefault(require("../../Models/Permissions/EndUsers/EndUsersPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var EndUsersSettings = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var EndUsersCount, EndUsersPermissionsValues;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _EndUsersPermissions["default"].estimatedDocumentCount();

          case 3:
            EndUsersCount = _context.sent;

            if (!(EndUsersCount > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _EndUsersPermissions["default"]({
              permission: 'User'
            }).save(), new _EndUsersPermissions["default"]({
              permission: 'Admin'
            }).save(), new _EndUsersPermissions["default"]({
              permission: 'Moderator'
            }).save()]);

          case 8:
            EndUsersPermissionsValues = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function EndUsersSettings() {
    return _ref.apply(this, arguments);
  };
}();

var _default = EndUsersSettings;
exports["default"] = _default;