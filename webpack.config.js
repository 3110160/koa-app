const { join, resolve } = require("path");
const argv = require("yargs-parser")(process.argv.slice(2));
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackInjectJsPlugin = require("./config/WebpackInjectJsPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const glob = require("glob");
const merge = require("webpack-merge");
// 分别导入开发和生产环境的配置
// 通过进程参数来区分当前是在什么环境 process.argv
const { mode } = argv;
const config = require(`./config/webpack.${mode}.js`);

const _entry = {};
const _plugins = [];
// 使用glob库来获取books模块下的.entry.js
const files = glob.sync("./src/web/views/books/**/*.entry.js");
const regexp = /.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/;
// 通过正则匹配到 **/*.entry.js 取出文件名
for (let item of files) {
  if (regexp.test(item)) {
    const entryKey = RegExp.$1;
    _entry[entryKey] = item;
    // 将模块文件夹名称和文件名结构出来
    const [dist, template] = entryKey.split("-");
    _plugins.push(
      new HtmlWebpackPlugin({
        filename: `../views/${dist}/${template}.html`,
        template: `./src/web/views/${dist}/pages/${template}.html`,
        inject: false
      })
    );
  }
}

const defaultConfig = {
  entry: _entry,
  output: {
    path: resolve(__dirname, "dist/assets"),
    publicPath: "",
    filename: "scripts/[name].bundle.js"
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/web/")
    }
  },
  plugins: [..._plugins, new WebpackInjectJsPlugin()],
  devtool: mode === "development" ? "source-map" : "none"
};

module.exports = merge(defaultConfig, config);
