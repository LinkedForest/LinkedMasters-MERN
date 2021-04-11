"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForceDeleteConferenceById = exports.SoftDeleteConferenceById = exports.UpdateConferenceById = exports.GetConferenceById = exports.CreateNewConference = exports.GetAllConferences = void 0;

var _ConferencesModels = _interopRequireDefault(require("../../Models/Conferences/ConferencesModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Get All Conferences
var GetAllConferences = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response) {
    var AllConferences;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _ConferencesModels["default"].find();

          case 2:
            AllConferences = _context.sent;
            Response.status(200).json({
              data: AllConferences,
              message: "These Are All Conferences"
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetAllConferences(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Create New Conference


exports.GetAllConferences = GetAllConferences;

var CreateNewConference = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response) {
    var _Request$body, title, description, category, image, start_date, end_date, NewConference, SaveNewConference;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _Request$body = Request.body, title = _Request$body.title, description = _Request$body.description, category = _Request$body.category, image = _Request$body.image, start_date = _Request$body.start_date, end_date = _Request$body.end_date;
            NewConference = new _ConferencesModels["default"]({
              title: title,
              description: description,
              category: category,
              image: image,
              start_date: start_date,
              end_date: end_date
            });
            _context2.next = 4;
            return NewConference.save();

          case 4:
            SaveNewConference = _context2.sent;
            Response.status(201).json({
              data: SaveNewConference,
              message: "New Conference Has Been Created"
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function CreateNewConference(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Get Conference By ID


exports.CreateNewConference = CreateNewConference;

var GetConferenceById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(Request, Response) {
    var ConferenceById;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _ConferencesModels["default"].findById(Request.params.ConferenceId);

          case 2:
            ConferenceById = _context3.sent;
            Response.status(200).json({
              data: ConferenceById,
              message: "Conference Is Found"
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function GetConferenceById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Update Conference By ID


exports.GetConferenceById = GetConferenceById;

var UpdateConferenceById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(Request, Response) {
    var ConferenceUpdate;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _ConferencesModels["default"].findByIdAndUpdate(Request.params.ConferenceId, Request.body, {
              "new": true
            });

          case 2:
            ConferenceUpdate = _context4.sent;
            Response.status(200).json({
              data: ConferenceUpdate,
              message: "Conference Has Been Updated"
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function UpdateConferenceById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Soft Delete For Ever Conference By ID


exports.UpdateConferenceById = UpdateConferenceById;

var SoftDeleteConferenceById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(Request, Response) {
    var ConferenceSoftDelete;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _ConferencesModels["default"].deleteById(Request.params.ConferenceId);

          case 2:
            ConferenceSoftDelete = _context5.sent;
            Response.status(204).json({
              data: ConferenceSoftDelete,
              message: "Conference Has Been Deleted"
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function SoftDeleteConferenceById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Force Delete For Ever Conference By ID


exports.SoftDeleteConferenceById = SoftDeleteConferenceById;

var ForceDeleteConferenceById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(Request, Response) {
    var ConferenceForceDelete;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _ConferencesModels["default"].findByIdAndDelete(Request.params.ConferenceId);

          case 2:
            ConferenceForceDelete = _context6.sent;
            Response.status(204).json({
              data: ConferenceForceDelete,
              message: "Conference Has Been Deleted"
            });

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function ForceDeleteConferenceById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.ForceDeleteConferenceById = ForceDeleteConferenceById;