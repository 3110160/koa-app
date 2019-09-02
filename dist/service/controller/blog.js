"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlogList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _blog = require("../sql/blog");

//todo 获取主页的blog列表
var getBlogList =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(ctx, next) {
    var pageNum, pageSize, list;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pageNum = ctx.query.pageNum, pageSize = ctx.query.pageSize || 6;
            _context.prev = 1;
            _context.next = 4;
            return (0, _blog.getList)(pageNum, pageSize);

          case 4:
            list = _context.sent;
            ctx.body = {
              list: list
            };
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            ctx.body = {
              error: _context.t0
            };

          case 11:
            _context.next = 13;
            return next();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function getBlogList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getBlogList = getBlogList;