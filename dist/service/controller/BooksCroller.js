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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _BaseCrotroller2 = _interopRequireDefault(require("./BaseCrotroller"));

var _BooksModels = _interopRequireDefault(require("../porxyModels/BooksModels"));

var booksModels = new _BooksModels["default"]();

var _require = require('fs'),
    readFile = _require.readFile;

var _require2 = require('path'),
    join = _require2.join;

var asyncReadFile = function asyncReadFile(path) {
  return new Promise(function (resolve, reject) {
    readFile(path, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
};
/**
 * @class BooksCroller
 * @description 图书页面控制
 */


var BooksCroller =
/*#__PURE__*/
function (_BaseCrotroller) {
  (0, _inherits2["default"])(BooksCroller, _BaseCrotroller);

  function BooksCroller() {
    (0, _classCallCheck2["default"])(this, BooksCroller);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BooksCroller).call(this));
  }
  /**
   * @function actionIndex
   * @param {*} ctx 
   * @param {*} next 
   * @description 渲染首页的view
   */


  (0, _createClass2["default"])(BooksCroller, [{
    key: "actionIndex",
    value: function () {
      var _actionIndex = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(ctx, next) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ctx.render('index');

              case 2:
                _context.next = 4;
                return next();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function actionIndex(_x, _x2) {
        return _actionIndex.apply(this, arguments);
      }

      return actionIndex;
    }()
    /**
     * @function actionList
     * @param {*} ctx 
     * @param {*} next 
     * @description 渲染列表的view
     */

  }, {
    key: "actionList",
    value: function () {
      var _actionList = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(ctx, next) {
        var goods;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return booksModels.getBookList();

              case 2:
                goods = _context2.sent;
                _context2.next = 5;
                return ctx.render('demo', {
                  goods: goods,
                  title: '测试'
                });

              case 5:
                _context2.next = 7;
                return next();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function actionList(_x3, _x4) {
        return _actionList.apply(this, arguments);
      }

      return actionList;
    }()
    /**
     * @function actionList
     * @param {*} ctx 
     * @param {*} next 
     * @description 渲染列表的view
     */

  }, {
    key: "actionAdd",
    value: function () {
      var _actionAdd = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(ctx, next) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return ctx.render('add');

              case 2:
                _context3.next = 4;
                return next();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function actionAdd(_x5, _x6) {
        return _actionAdd.apply(this, arguments);
      }

      return actionAdd;
    }()
    /**
     * @function actionShowPoetry
     * @param {*} ctx 
     * @param {*} next 
     * @description 渲染诗句的view
     */

  }, {
    key: "actionShowPoetry",
    value: function () {
      var _actionShowPoetry = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(ctx, next) {
        var id, data;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = +ctx.params.id > 10 ? Math.ceil(Math.random(0, 1) * 10) : +ctx.params.id;
                _context4.next = 3;
                return asyncReadFile(join(__dirname, '../', "/poetry/poetry".concat(id, ".txt")));

              case 3:
                data = _context4.sent;
                _context4.next = 6;
                return ctx.render('poetry', {
                  data: data
                });

              case 6:
                _context4.next = 8;
                return next();

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function actionShowPoetry(_x7, _x8) {
        return _actionShowPoetry.apply(this, arguments);
      }

      return actionShowPoetry;
    }()
  }]);
  return BooksCroller;
}(_BaseCrotroller2["default"]);

var _default = BooksCroller;
exports["default"] = _default;