"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewAdd = exports.viewList = exports.viewDemo = exports.viewIndex = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _demo = require("../porxyModels/demo");

var viewIndex =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(ctx) {
    var title;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            title = 'hello koa2';
            _context.next = 3;
            return ctx.render('index', {
              title: title
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function viewIndex(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.viewIndex = viewIndex;

var viewDemo =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(ctx) {
    var title, goods;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            title = 'demo';
            _context2.next = 3;
            return (0, _demo.demoGet)();

          case 3:
            goods = _context2.sent;
            _context2.next = 6;
            return ctx.render('demo', {
              title: title,
              goods: goods
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function viewDemo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.viewDemo = viewDemo;

var viewList =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(ctx) {
    var list;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            list = [{
              bookName: '书名1',
              author: '李白',
              creatTime: '2017-12-22'
            }];
            _context3.next = 3;
            return ctx.render('list', {
              list: list,
              title: 'viewList'
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function viewList(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.viewList = viewList;

var viewAdd =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(ctx) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return ctx.render('add', {
              title: 'viewAdd'
            });

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function viewAdd(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.viewAdd = viewAdd;