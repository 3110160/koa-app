import {save,getArticleInfoById} from '../sql/article'

//todo 保存文章
const addArticle =async(ctx,next)=>{
    let article_title = ctx.request.body.title,
        article_content = ctx.request.body.content,
        article_desc = ctx.request.body.desc;
    try {
        await save({
            article_title,
            article_content,
            article_desc
        });
        ctx.body={
            msg:'success'
        }
    }catch (e){
        ctx.body={
            error:e
        }
    }
    await next();
};


//todo 获取文章
const getArticleInfo =async(ctx,next)=>{
    let id = ctx.query.id;
    try{
        let result =  await getArticleInfoById(id);
        let content = result[0].article_content,
            title = result[0].article_title;
        ctx.body={
            content,
            title
        }
    }catch (e){
        ctx.body={
            error:e
        }
    }
    await next();
};

export {
    addArticle,
    getArticleInfo
}