const session = require('koa-session-minimal');

// 配置存储session信息的mysql

// 存放sessionId的cookie配置
const cookie = {
    maxAge: '', // cookie有效时长
    expires: '',  // cookie失效时间
    path: '', // 写cookie所在的路径
    domain: '', // 写cookie所在的域名
    httpOnly: '', // 是否只用于http请求中获取
    overwrite: '',  // 是否允许重写
    secure: '',
    sameSite: '',
    signed: '',

};
const sessions =(app)=>{
// 使用session中间件
    app.use(session({
        key: 'SESSION_ID',
        //store: store,
        cookie: cookie
    }))
};

export default sessions;