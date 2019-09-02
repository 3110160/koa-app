"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demoGet = void 0;

var _request = _interopRequireDefault(require("./../utils/request"));

// demo
var demoGet = function demoGet() {
  return _request["default"].get('/home/hotGoods');
};

exports.demoGet = demoGet;