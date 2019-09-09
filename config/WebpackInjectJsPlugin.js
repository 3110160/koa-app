// 将js手动插入到相应的dom中去
const pluginName = "WebpackInjectJsPlugin";
const assetsHelp = jslist => {
  let js = [];
  for (let i = 0; i < jslist.length; i++) {
    js.push(`<script src="${jslist[i]}"></script>`)
  }
  return js.join('');
};
class WebpackInjectJsPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        pluginName,
        htmlPluginData => {
          // console.log("🍊我已经生效了", htmlPluginData);
          let _html = htmlPluginData.html;
          // _html = _html.replace(/@layouts/g, "../../layouts");
          // _html = _html.replace(/@components/g, "../../../components");
          const result = assetsHelp(htmlPluginData.assets.js);
          _html = _html.replace("<!--injectjs-->", result);
          htmlPluginData.html = _html;
        }
      );
    });
  }
}

module.exports = WebpackInjectJsPlugin;
