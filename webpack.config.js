const { resolve } = require("path");
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
        filename: `../views/${dist}/pages/${template}.html`,
        template: `./src/web/views/${dist}/pages/${template}.html`,
        inject: false,
        chunks: ["runtime", entryKey]
      })
    );
  }
}

const defaultConfig = {
  entry: _entry,
  output: {
    path: resolve(__dirname, "dist/assets"),
    publicPath: "/",
    filename: "scripts/[name].bundle.js"
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/web/")
    }
  },
  // 优化持久化缓存的, runtime 指的是 webpack 的运行环境(具体作用就是模块解析, 加载) 和 模块信息清单, 模块信息清单在每次有模块
  // 变更(hash 变更)时都会变更, 所以我们想把这部分代码单独打包出来, 配合后端缓存策略, 这样就不会因为某个模块的变更导致包含模块信
  // 息的模块(通常会被包含在最后一个 bundle 中)缓存失效. optimization.runtimeChunk 就是告诉 webpack 是否要把这部分单独打包出来.
  optimization: {
    runtimeChunk: {
      name: "runtime"
    }
  },
  plugins: [
    ..._plugins,
    new WebpackInjectJsPlugin(),
    new CopyWebpackPlugin([
      {
        from: "./src/web/views/books/layouts/layout.html",
        to: "../views/books/layouts/layout.html"
      },
      {
        from: "./src/web/lib/",
        to: "lib/"
        // 复制过程中对文件内容进行优化
        // transform(content, path) {
        //   return Promise.resolve(optimize(content));
        // },
      }
    ])
  ],
  devtool: mode === "development" ? "source-map" : "none"
};

module.exports = merge(defaultConfig, config);
