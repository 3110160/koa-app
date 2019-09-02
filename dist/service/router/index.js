"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BooksCroller = _interopRequireDefault(require("../controller/BooksCroller"));

var Router = require('koa-router');

var router = new Router();
var booksCroller = new _BooksCroller["default"]();

var routers = function routers(app) {
  router.get('/poetry/:id', booksCroller.actionShowPoetry); // view add.ejs

  router.get('/add', booksCroller.actionAdd); // view list.ejs

  router.get('/list', booksCroller.actionList); // view index.ejs

  router.get('/index', booksCroller.actionIndex); // // todo 获取用户信息
  // router.get('/api/user',getUserById);
  // // todo 获取文章详细信息
  // router.get('/api/getArticleInfo',getArticleInfo);
  // // todo 获取主页 文章列表
  // router.get('/api/getBlogList',getBlogList);
  // // todo 获取主页 作者列表
  // router.get('/api/getBlogUserList',getBlogUserList);
  // //todo 登陆
  // router.post('/api/login',login);
  // // todo 注册
  // router.post('/api/register',userRegister);
  // // todo 添加文章
  // router.post('/api/addArticle',addArticle);
  // // todo 上传图片
  // // uploadImg(router);
  // // todo 上传视频
  // // uploadVideo(router);

  app.use(router.routes()).use(router.allowedMethods());
};

var _default = routers;
exports["default"] = _default;