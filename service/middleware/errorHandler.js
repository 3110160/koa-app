export const error = (app)=>{
    // 一般程序错误使用 log4js 记录
    app.use(async(ctx,next)=>{
        try{
            await next();
        }catch(e){
            ctx.logger.error(e);
        }
    });

    // 404 错误处理
    app.use(async(ctx,next)=>{
        await next();
        // 如果status 不为 404 则让继续执行
        if(ctx.status !== 404){
            return;
        }
        ctx.status = 404;
        ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="回到我的主页"></script>`; 
    })
}