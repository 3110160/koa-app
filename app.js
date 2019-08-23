const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const koaStatic = require('koa-static');
const render = require('koa-ejs');

import {config} from './config';
import routers from './router';

const app = new Koa();

//先进行登陆态验证 登陆成功后设置sessionId
//app.use();

//配置静态文件目录
app.use(koaStatic(config.staticDir));
app.use(bodyParser());

// 加载模板引擎
render(app, {
    root: config.viewsDir,
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: false
});



routers(app);
app.use(json());

//todo 统一包装一层
app.use(async(ctx,next)=>{
    if(ctx.body){
        if(!ctx.body.error){
            ctx.body={
                status:200,
                result:ctx.body
            }
        }else{
            ctx.body={
                status:200,
                error:ctx.body.error
            }
        }
    }
    if(ctx.status === 404){
        await ctx.render('404', {
            title:'404',
        })
    }
    await next();
});

app.listen(config.port,()=>{
    console.log(`listening ${config.port} ...`)
});
