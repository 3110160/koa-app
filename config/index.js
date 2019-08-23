const {extend} = require('lodash');
const {join} = require('path');
let config = {
    // 静态资源目录
    staticDir : join(__dirname,'..','static'),
    // 视图层目录
    viewsDir : join(__dirname,'..','views'),
}

// 开发环境
if(process.env.NODE_ENV == 'development'){
    config=extend(config,{
        port:3000,
    })
}

// 生产环境
if(process.env.NODE_ENV == 'production'){
    config=extend(config,{
        port:3001,
    })
}

export default config;