"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckConferencePage = void 0;

var _ConferencePagesModels = _interopRequireDefault(require("../../Models/ConferencePages/ConferencePagesModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Check Conference
var CheckConferencePage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response, NextFunction) {
    var ConferencePageID, i, ConferencePage;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ConferencePageID = Request.body.conference_pages;

            if (!ConferencePageID) {
              _context.next = 12;
              break;
            }

            i = 0;

          case 3:
            if (!(i < ConferencePageID.length)) {
              _context.next = 12;
              break;
            }

            _context.next = 6;
            return _ConferencePagesModels["default"].findById(Request.body.conference_pages);

          case 6:
            ConferencePage = _context.sent;

            if (ConferencePage) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", Response.json({
              message: "Conference Page Does Not Exists"
            }));

          case 9:
            i++;
            _context.next = 3;
            break;

          case 12:
            NextFunction();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CheckConferencePage(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.CheckConferencePage = CheckConferencePage;