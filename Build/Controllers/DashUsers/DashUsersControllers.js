"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForceDeleteDashUserByID = exports.SoftDeleteDashUserByID = exports.UpdateDashUserByID = exports.CreateNewDashUser = exports.GetDashUserByID = exports.GetAllDashUsers = void 0;

var _DashUsersModels = _interopRequireDefault(require("../../Models/DashUsers/DashUsersModels"));

var _DashRolesModels = _interopRequireDefault(require("../../Models/DashRoles/DashRolesModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Get All Dashboard Users
var GetAllDashUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response) {
    var AllDashUsers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _DashUsersModels["default"].find().populate('roles');

          case 2:
            AllDashUsers = _context.sent;
            // Response
            Response.status(200).json({
              data: AllDashUsers,
              message: "These Are All Dashboard Users"
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetAllDashUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Get Dashboard User By ID


exports.GetAllDashUsers = GetAllDashUsers;

var GetDashUserByID = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response) {
    var DashUserByID;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _DashUsersModels["default"].findById(Request.params.DashUserID).populate('roles');

          case 2:
            DashUserByID = _context2.sent;
            // Response
            Response.status(200).json({
              data: DashUserByID,
              message: "Dashboard User Is Found"
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function GetDashUserByID(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Create Dashboard End User


exports.GetDashUserByID = GetDashUserByID;

var CreateNewDashUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(Request, Response) {
    var _Request$body, name, email, password, mobile, image, roles, NewDashUser, FindDashUserByEmail, FindDashRoles, DefaultDashRole, SaveNewDashUser;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Request Data
            _Request$body = Request.body, name = _Request$body.name, email = _Request$body.email, password = _Request$body.password, mobile = _Request$body.mobile, image = _Request$body.image, roles = _Request$body.roles;
            _context3.t0 = _DashUsersModels["default"];
            _context3.t1 = name;
            _context3.t2 = email;
            _context3.next = 6;
            return _DashUsersModels["default"].EncryptPassword(password);

          case 6:
            _context3.t3 = _context3.sent;
            _context3.t4 = mobile;
            _context3.t5 = image;
            _context3.t6 = {
              name: _context3.t1,
              email: _context3.t2,
              password: _context3.t3,
              mobile: _context3.t4,
              image: _context3.t5
            };
            NewDashUser = new _context3.t0(_context3.t6);
            _context3.next = 13;
            return _DashUsersModels["default"].findOne({
              email: Request.body.email
            }).populate("roles");

          case 13:
            FindDashUserByEmail = _context3.sent;

            if (!FindDashUserByEmail) {
              _context3.next = 16;
              break;
            }

            return _context3.abrupt("return", Response.status(400).json({
              message: "Dashboard User Already Existing"
            }));

          case 16:
            if (!(roles.length > 0)) {
              _context3.next = 23;
              break;
            }

            _context3.next = 19;
            return _DashRolesModels["default"].find({
              role: {
                $in: roles
              }
            });

          case 19:
            FindDashRoles = _context3.sent;
            NewDashUser.roles = FindDashRoles.map(function (Roles) {
              return Roles._id;
            });
            _context3.next = 27;
            break;

          case 23:
            _context3.next = 25;
            return _DashRolesModels["default"].findOne({
              role: 'User'
            });

          case 25:
            DefaultDashRole = _context3.sent;
            NewDashUser.roles = [DefaultDashRole._id];

          case 27:
            _context3.next = 29;
            return NewDashUser.save();

          case 29:
            SaveNewDashUser = _context3.sent;
            // Response
            Response.status(200).json({
              data: SaveNewDashUser,
              message: "New Dashboard User Has Been Created"
            });

          case 31:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function CreateNewDashUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Update Dashboard User By ID


exports.CreateNewDashUser = CreateNewDashUser;

var UpdateDashUserByID = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(Request, Response) {
    var DashUserUpdate;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _DashUsersModels["default"].findByIdAndUpdate(Request.params.DashUserID, Request.body, {
              "new": true
            });

          case 2:
            DashUserUpdate = _context4.sent;
            // Response
            Response.status(200).json({
              data: DashUserUpdate,
              message: "Dashboard User Has Been Updated"
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function UpdateDashUserByID(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Soft Delete For Dashboard User By ID


exports.UpdateDashUserByID = UpdateDashUserByID;

var SoftDeleteDashUserByID = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(Request, Response) {
    var DashUserSoftDelete;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _DashUsersModels["default"].deleteById(Request.params.DashUserID);

          case 2:
            DashUserSoftDelete = _context5.sent;
            // Response
            Response.status(204).json({
              data: DashUserSoftDelete,
              message: "Dashboard User Has Been Soft Deleted"
            });

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function SoftDeleteDashUserByID(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); // Force Delete For Dashboard User By ID


exports.SoftDeleteDashUserByID = SoftDeleteDashUserByID;

var ForceDeleteDashUserByID = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(Request, Response) {
    var DashUserForceDelete;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _DashUsersModels["default"].findByIdAndDelete(Request.params.DashUserID);

          case 2:
            DashUserForceDelete = _context6.sent;
            // Response
            Response.status(204).json({
              data: DashUserForceDelete,
              message: "Dashboard User Has Been Force Deleted"
            });

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function ForceDeleteDashUserByID(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.ForceDeleteDashUserByID = ForceDeleteDashUserByID;