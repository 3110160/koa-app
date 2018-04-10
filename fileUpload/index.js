const multer = require('koa-multer');//加载koa-multer模块
import videoToJpeg from './screenshots'
const path = require('path');
//文件上传
//配置
const storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
//加载配置
const upload = multer({ storage: storage });

//上传图片路由
const uploadImg =(router)=>{
    router.post('/uploadImage', upload.single('file'), async (ctx, next) => {
        ctx.body = {
            imageUrl: `http://localhost:3000/uploads/${ctx.req.file.filename}`//返回文件名
        };
        await next();
    });
};


//上传视频路由
const uploadVideo =(router)=>{
    router.post('/uploadVideo', upload.single('file'), async (ctx, next) => {
        try{
            await videoToJpeg(path.resolve(__dirname, '..')+`/public/uploads/${ctx.req.file.filename}`);
        }catch (e){
            console.log(e)
        }
        ctx.body = {
            videoUrl: `http://localhost:3000/uploads/${ctx.req.file.filename}`,
            videoPngUrl: `http://localhost:3000/uploads/${ctx.req.file.filename}.jpeg`,
        };
        await next();
    });
};

export {uploadImg,uploadVideo}