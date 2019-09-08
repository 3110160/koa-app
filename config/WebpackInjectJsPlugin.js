const pluginName = "WebpackInjectJsPlugin";

class WebpackInjectJsPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        pluginName,
        htmlPluginData => {
           console.log("🍊我已经生效了", htmlPluginData);
          // let _html = htmlPluginData.html;
          // _html = _html.replace(/@layouts/g, "../../layouts");
          // _html = _html.replace(/@components/g, "../../../components");
          // const result = assetsHelp(htmlPluginData.assets);
          // _html = _html.replace("<!--injectjs-->", result.js.join(""));
          // htmlPluginData.html = _html;
        }
      );
    });
  }
}

module.exports = WebpackInjectJsPlugin;
