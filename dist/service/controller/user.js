"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlogUserList = exports.userRegister = exports.login = exports.getUserById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = require("../sql/user");

var sha1 = require('sha1');

//todo id查找
var getUserById =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(ctx, next) {
    var id, info;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = ctx.query.id;

            if (id) {
              _context.next = 4;
              break;
            }

            ctx.body = {
              error: '无效的userId'
            };
            return _context.abrupt("return");

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return (0, _user.getUserInfo)(id);

          case 7:
            info = _context.sent;
            ctx.body = {
              info: info[0] || null
            };
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            ctx.body = {
              error: _context.t0
            };

          case 14:
            _context.next = 16;
            return next();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function getUserById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //todo 用户登陆


exports.getUserById = getUserById;

var login =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(ctx, next) {
    var userName, password, userInfo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userName = ctx.request.body.userName, password = sha1(ctx.request.body.password);
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _user.loginCheck)(userName);

          case 4:
            userInfo = _context2.sent;

            if (userInfo.length && userInfo[0].user_name === userName) {
              if (userInfo[0].password === password) {
                ctx.session.user = userName;
                ctx.body = {
                  code: 1,
                  msg: 'success'
                };
              } else {
                ctx.body = {
                  error: '密码错误'
                };
              }
            } else {
              ctx.body = {
                error: '用户名不存在'
              };
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            ctx.body = {
              error: _context2.t0
            };

          case 11:
            _context2.next = 13;
            return next();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //todo 用户注册


exports.login = login;

var userRegister =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(ctx, next) {
    var user_name, password, userInfo;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            user_name = ctx.request.body.userName, password = sha1(ctx.request.body.password);
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _user.loginCheck)(user_name);

          case 4:
            userInfo = _context3.sent;

            if (userInfo.length) {
              _context3.next = 12;
              break;
            }

            _context3.next = 8;
            return (0, _user.userInsert)({
              user_name: user_name,
              password: password
            });

          case 8:
            ctx.session.user = user_name;
            ctx.body = {
              code: 1,
              msg: '注册成功'
            };
            _context3.next = 13;
            break;

          case 12:
            //已存在
            ctx.body = {
              error: '用户已存在'
            };

          case 13:
            _context3.next = 18;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](1);
            ctx.body = {
              error: _context3.t0
            };

          case 18:
            _context3.next = 20;
            return next();

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 15]]);
  }));

  return function userRegister(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //todo 获取主页作者列表


exports.userRegister = userRegister;

var getBlogUserList =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(ctx, next) {
    var list;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _user.getUserList)();

          case 3:
            list = _context4.sent;
            ctx.body = {
              list: list
            };
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            ctx.body = {
              error: _context4.t0
            };

          case 10:
            _context4.next = 12;
            return next();

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getBlogUserList(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getBlogUserList = getBlogUserList;