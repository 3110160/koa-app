const {extend} = require('lodash');
const {join} = require('path');

const config = {
    // 静态资源目录
    staticDir = join(__dirname,'..','static'),
    // 视图层目录
    viewsDir = join(__dirname,'..','views'),
}

// 开发环境
if(process.env.NODE_ENV === 'development'){
    config=extend(config,{
        prot:3000,
    })
}

// 生产环境
if(process.env.NODE_ENV === 'production'){
    config=extend(config,{
        prot:3001,
    })
}

export {
    config,
}