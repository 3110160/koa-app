const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ mode }) => {
  return {
      mode,
      entry: {
        // 多入口文件
        a: './web/static/js/index.js',
    },
    output: {
      path:path.resolve(__dirname, 'dist/web/static'),
      publicPath: '',
      filename: './js/[name].bundle.js'
  },
      plugins: [
          new HtmlWebpackPlugin({
              filename: '../views/index.html', 
              template: './web/views/index.html',
              chunks:['a']
          }),
          new CopyWebpackPlugin([
            {
              context: './web/static/lib/',
              from: './*.js',
              to: 'static/lib'
            }
          ])
      ],
      devtool: mode === 'development' ? 'source-map' : 'none'
  };
};