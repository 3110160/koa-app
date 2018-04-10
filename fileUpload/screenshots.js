//新开子进程进行截屏
const videoToJpeg=(input)=>{
    const exec = require('child_process').exec;
    const output = input+'.jpeg';
    const command = `ffmpeg  -ss 30 -i ${input} -frames:v 1 ${output}`;
    return new Promise((resolve,reject)=>{
        exec(command, (error, stdout, stderr) => {
            if(error) return reject(error);
            if(stderr) return reject(stderr);
            resolve(output);
        });
    })
};

export default videoToJpeg;