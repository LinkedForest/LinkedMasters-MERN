"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoftDeleteConferencePageByID = exports.ForceDeleteConferencePageByID = exports.UpdateConferencePageByID = exports.CreateNewConferencePage = exports.GetConferencePageByID = exports.GetAllConferencePagesByConferenceID = exports.GetAllConferencePages = void 0;

var _ConferencePagesModels = _interopRequireDefault(require("../../Models/ConferencePages/ConferencePagesModels"));

var _ConferencesModels = _interopRequireDefault(require("../../Models/Conferences/ConferencesModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Get All Conference Pages
var GetAllConferencePages = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response) {
    var AllConferencePages;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _ConferencePagesModels["default"].find();

          case 2:
            AllConferencePages = _context.sent;
            // Response
            Response.status(200).json({
              data: AllConferencePages,
              message: "These Are All Conferences Pages"
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetAllConferencePages(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Get All Conference Pages By Conference ID


exports.GetAllConferencePages = GetAllConferencePages;

var GetAllConferencePagesByConferenceID = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response) {
    var AllConferencePagesByConferenceID;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _ConferencePagesModels["default"].find({
              conference_id: Request.body.conference_id
            });

          case 2:
            AllConferencePagesByConferenceID = _context2.sent;
            // Response
            Response.status(200).json({
              data: AllConferencePagesByConferenceID,
              message: "These Are All Conference Pages"
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function GetAllConferencePagesByConferenceID(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Get Conference Page By ID


exports.GetAllConferencePagesByConferenceID = GetAllConferencePagesByConferenceID;

var GetConferencePageByID = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(Request, Response) {
    var ConferencePageByID;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _ConferencePagesModels["default"].findById(Request.params.ConferencePageID);

          case 2:
            ConferencePageByID = _context3.sent;
            // Response
            Response.status(200).json({
              data: ConferencePageByID,
              message: "Conference Page Is Found"
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function GetConferencePageByID(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Create New Conference


exports.GetConferencePageByID = GetConferencePageByID;

var CreateNewConferencePage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(Request, Response) {
    var _Request$body, name, description, background, NewConferencePage, SaveNewConferencePage;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // Request Data
            _Request$body = Request.body, name = _Request$body.name, description = _Request$body.description, background = _Request$body.background;
            NewConferencePage = new _ConferencePagesModels["default"]({
              name: name,
              description: description,
              background: background
            });
            NewConferencePage.conference_id = Request.body.conference_id; // Save Data

            _context5.next = 5;
            return NewConferencePage.save().then( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ConferencePage) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _ConferencesModels["default"].findByIdAndUpdate(ConferencePage.conference_id, {
                          $addToSet: {
                            conference_pages: ConferencePage._id
                          }
                        }, {
                          safe: true,
                          upsert: true,
                          "new": true
                        });

                      case 2:
                        return _context4.abrupt("return", ConferencePage);

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x9) {
                return _ref5.apply(this, arguments);
              };
            }());

          case 5:
            SaveNewConferencePage = _context5.sent;
            // Response
            Response.status(200).json({
              data: SaveNewConferencePage,
              message: "New Conference Page Has Been Created"
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function CreateNewConferencePage(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Update Conference Page By ID


exports.CreateNewConferencePage = CreateNewConferencePage;

var UpdateConferencePageByID = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(Request, Response) {
    var ConferencePageUpdate;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _ConferencePagesModels["default"].findByIdAndUpdate(Request.params.ConferencePageID, Request.body, {
              safe: true,
              upsert: true,
              "new": true
            });

          case 2:
            ConferencePageUpdate = _context6.sent;
            // Response
            Response.status(200).json({
              data: ConferencePageUpdate,
              message: "Conference Page Has Been Updated"
            });

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function UpdateConferencePageByID(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}(); // Force Delete For Conference By ID


exports.UpdateConferencePageByID = UpdateConferencePageByID;

var ForceDeleteConferencePageByID = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(Request, Response) {
    var ConferencePageForceDelete;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _ConferencePagesModels["default"].findByIdAndDelete(Request.params.ConferencePageID).then( /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ConferencePage) {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return _ConferencesModels["default"].findByIdAndUpdate(ConferencePage.conference_id, {
                          $pull: {
                            conference_pages: ConferencePage._id
                          }
                        }, {
                          safe: true,
                          upsert: true,
                          "new": true
                        });

                      case 2:
                        return _context7.abrupt("return", ConferencePage);

                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x14) {
                return _ref8.apply(this, arguments);
              };
            }());

          case 2:
            ConferencePageForceDelete = _context8.sent;
            // Response
            Response.status(200).json({
              data: ConferencePageForceDelete,
              message: "Conference Page Has Been Force Deleted"
            });

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function ForceDeleteConferencePageByID(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}(); // Soft Delete For Conference By ID


exports.ForceDeleteConferencePageByID = ForceDeleteConferencePageByID;

var SoftDeleteConferencePageByID = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(Request, Response) {
    var ConferencePageSoftDelete;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _ConferencePagesModels["default"].deleteById(Request.params.ConferencePageID);

          case 2:
            ConferencePageSoftDelete = _context9.sent;
            // Response
            Response.status(200).json({
              data: ConferencePageSoftDelete,
              message: "Conference Page Has Been Soft Deleted"
            });

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function SoftDeleteConferencePageByID(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();

exports.SoftDeleteConferencePageByID = SoftDeleteConferencePageByID;