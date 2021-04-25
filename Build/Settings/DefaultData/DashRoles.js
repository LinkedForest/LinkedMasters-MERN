"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DashRolesModels = _interopRequireDefault(require("../../Models/DashRoles/DashRolesModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DefaultDashRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var DashRolesCount, DefaultDashRolesData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _DashRolesModels["default"].estimatedDocumentCount();

          case 3:
            DashRolesCount = _context.sent;

            if (!(DashRolesCount > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _DashRolesModels["default"]({
              role: 'User'
            }).save(), new _DashRolesModels["default"]({
              role: 'Admin'
            }).save(), new _DashRolesModels["default"]({
              role: 'Editor'
            }).save(), new _DashRolesModels["default"]({
              role: 'Moderator'
            }).save(), new _DashRolesModels["default"]({
              role: 'Advertiser'
            }).save(), new _DashRolesModels["default"]({
              role: 'Analyst'
            }).save()]);

          case 8:
            DefaultDashRolesData = _context.sent;
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

  return function DefaultDashRoles() {
    return _ref.apply(this, arguments);
  };
}();

var _default = DefaultDashRoles;
exports["default"] = _default;