const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const {resolve} = require('path');
module.exports = {
  output: {
    filename: "scripts/[name].bundle.js",
    publicPath: "/"
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
      logo: resolve(__dirname,"../timg.jpeg"),
      suppressSuccess: true
    })
  ],
};
