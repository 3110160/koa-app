const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const koaStatic = require('koa-static');
const render = require('koa-ejs');
const log4js = require('log4js');
import {
    error
} from './middleware/errorHandler';
import config from './config';
import routers from './router';

const app = new Koa();

// 错误日志配置
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: __dirname + '/log/error.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
// 将logger 挂在app.context上下文上 方便调用
app.context.logger = log4js.getLogger('cheese');

//配置静态文件目录
app.use(koaStatic(config.staticDir));
app.use(bodyParser());

// 加载模板引擎
render(app, {
    layout: '',
    root: config.viewsDir,
    viewExt: 'html',
    cache: false,
    debug: false
});

// 错误处理
error(app);

// 路由
routers(app);
app.use(json());



app.listen(config.port, () => {
    console.log(`listening ${config.port} ...`)
});