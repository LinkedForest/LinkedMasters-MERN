"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForceDeleteConferenceByID = exports.SoftDeleteConferenceByID = exports.UpdateConferenceByID = exports.CreateNewConference = exports.GetConferenceByID = exports.GetAllConferences = void 0;

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
            // Response
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
}(); // Get Conference By ID


exports.GetAllConferences = GetAllConferences;

var GetConferenceByID = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response) {
    var ConferenceByID;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _ConferencesModels["default"].findById(Request.params.ConferenceID);

          case 2:
            ConferenceByID = _context2.sent;
            // Response
            Response.status(200).json({
              data: ConferenceByID,
              message: "Conference Is Found"
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function GetConferenceByID(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Create New Conference


exports.GetConferenceByID = GetConferenceByID;

var CreateNewConference = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(Request, Response) {
    var _Request$body, title, description, logo_image, start_date, start_time, theme_color, auth_pages, NewConference, SaveNewConference;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _Request$body = Request.body, title = _Request$body.title, description = _Request$body.description, logo_image = _Request$body.logo_image, start_date = _Request$body.start_date, start_time = _Request$body.start_time, theme_color = _Request$body.theme_color, auth_pages = _Request$body.auth_pages;
            NewConference = new _ConferencesModels["default"]({
              title: title,
              description: description,
              logo_image: logo_image,
              start_date: start_date,
              start_time: start_time,
              theme_color: theme_color,
              auth_pages: auth_pages
            });
            _context3.next = 4;
            return NewConference.save();

          case 4:
            SaveNewConference = _context3.sent;
            // Response
            Response.status(201).json({
              data: SaveNewConference,
              message: "New Conference Has Been Created"
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function CreateNewConference(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Update Conference By ID


exports.CreateNewConference = CreateNewConference;

var UpdateConferenceByID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(Request, Response) {
    var ConferenceUpdate;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _ConferencesModels["default"].findByIdAndUpdate(Request.params.ConferenceID, Request.body, {
              "new": true
            });

          case 2:
            ConferenceUpdate = _context4.sent;
            // Response
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

  return function UpdateConferenceByID(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Soft Delete For Conference By ID


exports.UpdateConferenceByID = UpdateConferenceByID;

var SoftDeleteConferenceByID = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(Request, Response) {
    var ConferenceSoftDelete;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _ConferencesModels["default"].deleteById(Request.params.ConferenceID);

          case 2:
            ConferenceSoftDelete = _context5.sent;
            // Response
            Response.status(204).json({
              data: ConferenceSoftDelete,
              message: "Conference Has Been Soft Deleted"
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function SoftDeleteConferenceByID(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Force Delete For Conference By ID


exports.SoftDeleteConferenceByID = SoftDeleteConferenceByID;

var ForceDeleteConferenceByID = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(Request, Response) {
    var ConferenceForceDelete;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _ConferencesModels["default"].findByIdAndDelete(Request.params.ConferenceID);

          case 2:
            ConferenceForceDelete = _context6.sent;
            // Response
            Response.status(204).json({
              data: ConferenceForceDelete,
              message: "Conference Has Been Force Deleted"
            });

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function ForceDeleteConferenceByID(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.ForceDeleteConferenceByID = ForceDeleteConferenceByID;