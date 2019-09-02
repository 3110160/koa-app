"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _request = _interopRequireDefault(require("./../utils/request"));

/**
 * @class BooksModels
 * @description 图书相关的数据来源
 */
var BooksModels =
/*#__PURE__*/
function () {
  function BooksModels() {
    (0, _classCallCheck2["default"])(this, BooksModels);
  }
  /**
   * @function getBookList
   * @description 获取图书列表
   */


  (0, _createClass2["default"])(BooksModels, [{
    key: "getBookList",
    value: function () {
      var _getBookList = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _request["default"].get('/home/hotGoods'));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getBookList() {
        return _getBookList.apply(this, arguments);
      }

      return getBookList;
    }()
  }]);
  return BooksModels;
}();

var _default = BooksModels;
exports["default"] = _default;