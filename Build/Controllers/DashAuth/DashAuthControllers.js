"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Register = exports.Login = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _JWTConfigurations = _interopRequireDefault(require("../../Functions/JWT/JWTConfigurations"));

var _DashUsersModels = _interopRequireDefault(require("../../Models/DashUsers/DashUsersModels"));

var _DashRolesModels = _interopRequireDefault(require("../../Models/DashRoles/DashRolesModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Login
var Login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response) {
    var FindDashUserByEmail, ComparePassword, TokenJWT;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _DashUsersModels["default"].findOne({
              email: Request.body.email
            }).populate("roles");

          case 2:
            FindDashUserByEmail = _context.sent;

            if (FindDashUserByEmail) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", Response.status(400).json({
              message: "Dashboard User Not Found"
            }));

          case 5:
            _context.next = 7;
            return _DashUsersModels["default"].ComparePassword(Request.body.password, FindDashUserByEmail.password);

          case 7:
            ComparePassword = _context.sent;

            if (ComparePassword) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", Response.status(400).json({
              message: "Password Is Not Matching"
            }));

          case 10:
            _context.next = 12;
            return _jsonwebtoken["default"].sign({
              id: FindDashUserByEmail._id
            }, _JWTConfigurations["default"].SECRET, {
              expiresIn: 86400
            });

          case 12:
            TokenJWT = _context.sent;
            // Response
            Response.status(200).json({
              data: FindDashUserByEmail,
              token: TokenJWT,
              message: "Dashboard User Is Found"
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Registration


exports.Login = Login;

var Register = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(Request, Response) {
    var _Request$body, name, email, password, mobile, image, roles, NewDashUser, FindDashUserByEmail, FindDashRoles, DefaultDashRole, SaveNewDashUser, TokenJWT;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Request Data
            _Request$body = Request.body, name = _Request$body.name, email = _Request$body.email, password = _Request$body.password, mobile = _Request$body.mobile, image = _Request$body.image, roles = _Request$body.roles;
            _context2.t0 = _DashUsersModels["default"];
            _context2.t1 = name;
            _context2.t2 = email;
            _context2.next = 6;
            return _DashUsersModels["default"].EncryptPassword(password);

          case 6:
            _context2.t3 = _context2.sent;
            _context2.t4 = mobile;
            _context2.t5 = image;
            _context2.t6 = {
              name: _context2.t1,
              email: _context2.t2,
              password: _context2.t3,
              mobile: _context2.t4,
              image: _context2.t5
            };
            NewDashUser = new _context2.t0(_context2.t6);
            _context2.next = 13;
            return _DashUsersModels["default"].findOne({
              email: Request.body.email
            }).populate("roles");

          case 13:
            FindDashUserByEmail = _context2.sent;

            if (!FindDashUserByEmail) {
              _context2.next = 16;
              break;
            }

            return _context2.abrupt("return", Response.status(400).json({
              message: "Dashboard User Already Existing"
            }));

          case 16:
            if (!(roles.length > 0)) {
              _context2.next = 23;
              break;
            }

            _context2.next = 19;
            return _DashRolesModels["default"].find({
              role: {
                $in: roles
              }
            });

          case 19:
            FindDashRoles = _context2.sent;
            NewDashUser.roles = FindDashRoles.map(function (Roles) {
              return Roles._id;
            });
            _context2.next = 27;
            break;

          case 23:
            _context2.next = 25;
            return _DashRolesModels["default"].findOne({
              role: 'User'
            });

          case 25:
            DefaultDashRole = _context2.sent;
            NewDashUser.roles = [DefaultDashRole._id];

          case 27:
            _context2.next = 29;
            return NewDashUser.save();

          case 29:
            SaveNewDashUser = _context2.sent;
            // Create JWT Token
            TokenJWT = _jsonwebtoken["default"].sign({
              id: SaveNewDashUser._id
            }, _JWTConfigurations["default"].SECRET, {
              expiresIn: 86400
            }); // Response

            Response.status(200).json({
              data: NewDashUser,
              token: TokenJWT,
              message: "New Dashboard User Has Been Created"
            });

          case 32:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function Register(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.Register = Register;