"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticleInfo = exports.addArticle = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _article = require("../sql/article");

//todo 保存文章
var addArticle =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(ctx, next) {
    var article_title, article_content, article_desc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            article_title = ctx.request.body.title, article_content = ctx.request.body.content, article_desc = ctx.request.body.desc;
            _context.prev = 1;
            _context.next = 4;
            return (0, _article.save)({
              article_title: article_title,
              article_content: article_content,
              article_desc: article_desc
            });

          case 4:
            ctx.body = {
              msg: 'success'
            };
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            ctx.body = {
              error: _context.t0
            };

          case 10:
            _context.next = 12;
            return next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function addArticle(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //todo 获取文章


exports.addArticle = addArticle;

var getArticleInfo =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(ctx, next) {
    var id, result, content, title;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = ctx.query.id;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _article.getArticleInfoById)(id);

          case 4:
            result = _context2.sent;
            content = result[0].article_content, title = result[0].article_title;
            ctx.body = {
              content: content,
              title: title
            };
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            ctx.body = {
              error: _context2.t0
            };

          case 12:
            _context2.next = 14;
            return next();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function getArticleInfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getArticleInfo = getArticleInfo;