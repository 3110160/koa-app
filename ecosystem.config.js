module.exports = {
  apps: [{
    name: 'koa-app',
    script: './index.js',
    watch: true,
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: [],
    instances: 4,
    "exec_mode": "cluster_mode", 
    "ignore_watch": [ // 不用监听的文件
      "node_modules",
      "log"
    ],
    env: {
      NODE_ENV: 'production'
    },
  }]
};