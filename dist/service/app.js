"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _errorHandler = require("./middleware/errorHandler");

var _config = _interopRequireDefault(require("./config"));

var _router = _interopRequireDefault(require("./router"));

var Koa = require('koa');

var bodyParser = require('koa-bodyparser');

var json = require('koa-json');

var koaStatic = require('koa-static');

var render = require('koa-ejs');

var log4js = require('log4js');

var app = new Koa(); // 错误日志配置

log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: __dirname + '/log/error.log'
    }
  },
  categories: {
    "default": {
      appenders: ['cheese'],
      level: 'error'
    }
  }
}); // 将logger 挂在app.context上下文上 方便调用

app.context.logger = log4js.getLogger('cheese'); //配置静态文件目录

app.use(koaStatic(_config["default"].staticDir));
app.use(bodyParser()); // 加载模板引擎

render(app, {
  layout: '',
  root: _config["default"].viewsDir,
  viewExt: 'html',
  cache: false,
  debug: false
}); // 错误处理

(0, _errorHandler.error)(app); // 路由

(0, _router["default"])(app);
app.use(json());
app.listen(_config["default"].port, function () {
  console.log("listening ".concat(_config["default"].port, " ...2.."));
});