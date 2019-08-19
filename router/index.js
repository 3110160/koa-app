const Router = require('koa-router');
const router = new Router();
// import {uploadImg,uploadVideo} from '../fileUpload'
import {getUserById,login,userRegister,getBlogUserList} from '../controller/user'
import { addArticle,getArticleInfo} from '../controller/article'
import { viewIndex,} from '../controller/views';
import { viewList,} from '../controller/views';

//主页面信息
import {getBlogList} from '../controller/blog'

const routers = (app)=>{
    // view list.ejs
    router.get('/list',viewList);
    // view index.ejs
    router.get('/index',viewIndex);
    // todo 获取用户信息
    router.get('/api/user',getUserById);
    // todo 获取文章详细信息
    router.get('/api/getArticleInfo',getArticleInfo);
    // todo 获取主页 文章列表
    router.get('/api/getBlogList',getBlogList);
    // todo 获取主页 作者列表
    router.get('/api/getBlogUserList',getBlogUserList);
    //todo 登陆
    router.post('/api/login',login);
    // todo 注册
    router.post('/api/register',userRegister);
    // todo 添加文章
    router.post('/api/addArticle',addArticle);
    // todo 上传图片
    // uploadImg(router);
    // todo 上传视频
    // uploadVideo(router);
    app
        .use(router.routes())
        .use(router.allowedMethods());
};

export default routers;