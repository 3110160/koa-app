const Router = require('koa-router');
const router = new Router();
import BooksCroller from '../controller/BooksCroller';
const booksCroller = new BooksCroller;

const routers = (app) => {
    router.get('/poetry/:id', booksCroller.actionShowPoetry);
    // view add.ejs
    router.get('/add', booksCroller.actionAdd);
    // view list.ejs
    router.get('/list', booksCroller.actionList);
    // view index.ejs
    router.get('/index', booksCroller.actionIndex);
    // // todo 获取用户信息
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
    app
        .use(router.routes())
        .use(router.allowedMethods());
};

export default routers;