const sha1 = require('sha1');
import { getUserInfo ,loginCheck,userInsert,getUserList} from '../sql/user';

//todo id查找
const getUserById = async(ctx,next)=>{
    let id = ctx.query.id;
    if(!id){
        ctx.body={
            error:'无效的userId'
        };
        return;
    }
    try {
        let info = await getUserInfo(id);
        ctx.body={
            info:info[0] || null
        };
    }catch (err){
        ctx.body={
            error:err
        };
    }
    await next();
};

//todo 用户登陆
const login = async(ctx,next)=>{
   let userName = ctx.request.body.userName,
       password = sha1(ctx.request.body.password);
   try{
       let userInfo = await loginCheck(userName);
       if(userInfo.length&&userInfo[0].user_name===userName){
           if(userInfo[0].password===password){
               ctx.session.user = userName;
               ctx.body={
                   code:1,
                   msg:'success'
               }
           }else {
               ctx.body={
                   error:'密码错误'
               }
           }
       }else {
           ctx.body={
               error:'用户名不存在'
           }
       }
   }catch (e){
       ctx.body={
           error:e
       }
   }
    await next()
};


//todo 用户注册
const userRegister=async(ctx,next)=>{
    let user_name = ctx.request.body.userName,
        password = sha1(ctx.request.body.password);
    try {
        let userInfo = await loginCheck(user_name);
        if(!userInfo.length){
            //不存在
            await userInsert({
                user_name,
                password
            });
            ctx.session.user = user_name;
            ctx.body ={
                code:1,
                msg:'注册成功'
            }
        }else {
            //已存在
            ctx.body={
                error:'用户已存在'
            }
        }
    }catch (e){
        ctx.body={
            error:e
        }
    }
    await next();
};


//todo 获取主页作者列表
const getBlogUserList = async(ctx,next)=>{
    try{
        let list = await getUserList();
        ctx.body = {
            list
        }
    }catch (e){
        ctx.body = {
            error:e
        }
    }
    await next();
};

export {
    getUserById,
    login,
    userRegister,
    getBlogUserList
}