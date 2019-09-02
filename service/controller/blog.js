import {getList} from "../sql/blog";

//todo 获取主页的blog列表

const getBlogList =async(ctx, next)=>{
    let pageNum = ctx.query.pageNum,
        pageSize = ctx.query.pageSize || 6;
    try {
        let list = await getList(pageNum,pageSize);
        ctx.body={
            list
        }
    }catch (e){
        ctx.body={
            error:e
        }
    }
    await next();
};


export {
    getBlogList
}