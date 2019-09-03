const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({
    mode ='production'
}) => {
    return {
        mode,
        entry: {
            // 多入口文件
            a: './web/static/js/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist/web/static'),
            publicPath: '',
            filename: 'js/[name].bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: '../views/index.html', //输出到哪个目录 相对output 路径
                template: './web/views/index.html', // 相对.config 路径
                inject: 'body',
                favicon: './web/static/timg.jpeg',
                chunks: ['a']
            }),
            new CopyWebpackPlugin([{
                context: './web/static/lib/', // 相对.config 路径
                from: './*.js', // 相对 context 路径
                to: 'lib' // 相对output 路径
            }])
        ],
        devtool: mode === 'development' ? 'source-map' : 'none'
    };
};