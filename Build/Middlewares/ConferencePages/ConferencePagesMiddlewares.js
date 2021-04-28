"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckConference = void 0;

var _ConferencesModels = _interopRequireDefault(require("../../Models/Conferences/ConferencesModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Check Conference
var CheckConference = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response, NextFunction) {
    var Conference;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Request.body.conference_id) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return _ConferencesModels["default"].findById(Request.body.conference_id);

          case 3:
            Conference = _context.sent;

            if (Conference) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", Response.json({
              message: "Conference Does Not Exists"
            }));

          case 6:
            NextFunction();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CheckConference(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.CheckConference = CheckConference;