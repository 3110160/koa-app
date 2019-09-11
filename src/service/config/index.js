const {extend} = require('lodash');
const {join} = require('path');
let config = {
    // 默认端口
    port:9090,
    // 静态资源目录
    staticDir : join(__dirname,'..','assets/'),
    // 视图层目录
    viewsDir : join(__dirname,'..','views/'),
}

// 开发环境
if(process.env.NODE_ENV == 'development'){
    config=extend(config,{
        port:3001,
    })
}

// 生产环境
if(process.env.NODE_ENV == 'production'){
    config=extend(config,{
        port:8000,
    })
}

export default config;