"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateNewEndUser = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Create New End User
var CreateNewEndUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Request, Response) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const { title, description, category, image, start_date, end_date } = Request.body;
            // const NewConference = new Conferences({ title, description, category, image, start_date, end_date });
            // const SaveNewConference = await NewConference.save();
            Response.status(201).json({
              // data: SaveNewConference,
              message: "New EndUser Has Been Created"
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CreateNewEndUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.CreateNewEndUser = CreateNewEndUser;