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
    app
        .use(router.routes())
        .use(router.allowedMethods());
};

export default routers;