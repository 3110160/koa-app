"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _require = require('lodash'),
    extend = _require.extend;

var _require2 = require('path'),
    join = _require2.join;

var config = {
  // 默认端口
  port: 9090,
  // 静态资源目录
  staticDir: join(__dirname, '../../', '/web/static'),
  // 视图层目录
  viewsDir: join(__dirname, '../../', '/web/views') // 开发环境

};

if (process.env.NODE_ENV == 'development') {
  config = extend(config, {
    port: 3000
  });
} // 生产环境


if (process.env.NODE_ENV == 'production') {
  config = extend(config, {
    port: 8000
  });
}

var _default = config;
exports["default"] = _default;