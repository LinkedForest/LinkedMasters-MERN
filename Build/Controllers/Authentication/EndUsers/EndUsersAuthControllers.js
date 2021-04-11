"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Register = exports.Login = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _JWTConfigurations = _interopRequireDefault(require("../../../Functions/JWT/JWTConfigurations"));

var _EndUsersModels = _interopRequireDefault(require("../../../Models/Authentication/EndUsers/EndUsersModels"));

var _EndUsersPermissions = _interopRequireDefault(require("../../../Models/Permissions/EndUsers/EndUsersPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Login
var Login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response) {
    var FindEndUserByEmail, ComparePassword, TokenJWT;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _EndUsersModels["default"].findOne({
              email: Request.body.email
            }).populate("permissions");

          case 2:
            FindEndUserByEmail = _context.sent;

            if (FindEndUserByEmail) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", Response.status(400).json({
              message: "EndUser Not Found"
            }));

          case 5:
            _context.next = 7;
            return _EndUsersModels["default"].ComparePassword(Request.body.password, FindEndUserByEmail.password);

          case 7:
            ComparePassword = _context.sent;

            if (ComparePassword) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", Response.status(400).json({
              message: "Password is Not Matching"
            }));

          case 10:
            _context.next = 12;
            return _jsonwebtoken["default"].sign({
              id: FindEndUserByEmail._id
            }, _JWTConfigurations["default"].SECRET, {
              expiresIn: 86400
            });

          case 12:
            TokenJWT = _context.sent;
            // Response
            Response.status(200).json({
              data: TokenJWT,
              message: "EndUser Is Found"
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
    var _Request$body, full_name, email, password, mobile, image, country, birthdate, permissions, NewEndUser, FindEndUserByEmail, FindPermissions, DefaultPermission, SaveNewEndUser, TokenJWT;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Request Data
            _Request$body = Request.body, full_name = _Request$body.full_name, email = _Request$body.email, password = _Request$body.password, mobile = _Request$body.mobile, image = _Request$body.image, country = _Request$body.country, birthdate = _Request$body.birthdate, permissions = _Request$body.permissions;
            _context2.t0 = _EndUsersModels["default"];
            _context2.t1 = full_name;
            _context2.t2 = email;
            _context2.next = 6;
            return _EndUsersModels["default"].EncryptPassword(password);

          case 6:
            _context2.t3 = _context2.sent;
            _context2.t4 = mobile;
            _context2.t5 = image;
            _context2.t6 = country;
            _context2.t7 = birthdate;
            _context2.t8 = {
              full_name: _context2.t1,
              email: _context2.t2,
              password: _context2.t3,
              mobile: _context2.t4,
              image: _context2.t5,
              country: _context2.t6,
              birthdate: _context2.t7
            };
            NewEndUser = new _context2.t0(_context2.t8);
            _context2.next = 15;
            return _EndUsersModels["default"].findOne({
              email: Request.body.email
            }).populate("permissions");

          case 15:
            FindEndUserByEmail = _context2.sent;

            if (!FindEndUserByEmail) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("return", Response.status(400).json({
              message: "EndUser Already Existing"
            }));

          case 18:
            if (!permissions) {
              _context2.next = 25;
              break;
            }

            _context2.next = 21;
            return _EndUsersPermissions["default"].find({
              permission: {
                $in: permissions
              }
            });

          case 21:
            FindPermissions = _context2.sent;
            NewEndUser.permissions = FindPermissions.map(function (Permission) {
              return Permission._id;
            });
            _context2.next = 29;
            break;

          case 25:
            _context2.next = 27;
            return _EndUsersPermissions["default"].findOne({
              permission: 'User'
            });

          case 27:
            DefaultPermission = _context2.sent;
            NewEndUser.permissions = [DefaultPermission._id];

          case 29:
            _context2.next = 31;
            return NewEndUser.save();

          case 31:
            SaveNewEndUser = _context2.sent;
            // Create JWT Token
            TokenJWT = _jsonwebtoken["default"].sign({
              id: SaveNewEndUser._id
            }, _JWTConfigurations["default"].SECRET, {
              expiresIn: 86400
            }); // Response

            Response.status(200).json({
              data: TokenJWT,
              message: "New EndUser Has Been Created"
            });

          case 34:
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