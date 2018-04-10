const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const koaStatic = require('koa-static');
import {severPort} from './config'
import routers from './router'
import session from './session'
const app = new Koa();

//先进行登陆态验证 登陆成功后设置sessionId
//app.use();

//配置静态文件目录
app.use(koaStatic(__dirname + '/public'));
app.use(bodyParser());

session(app);
//todo 检查是否有登陆态
app.use(async(ctx,next)=>{
    let url = ctx.request.url;
    if(url==='/register'||url==='/login'||url==='/uploadVideo'||url==='/uploadImage'){
        await next();
    }else {
        if(ctx.session.user){
            await next();
        }else {
            ctx.body={
                status:200,
                code:-1
            }
        }
    }
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
    await next();
});

app.listen(severPort,()=>{
    console.log(`listening ${severPort} ...`)
});
