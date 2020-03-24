const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const baseConfig = require('./webpack.base.js');
const templatePath = path.join(__dirname, '../public/index.html')

// entry -> 引入的资源全打包一个 js 文件
// MPA: 多个入口（多个html） entry2的js会覆盖掉entry1的js  解决： plugins中 手动配置多入口对应的html文件 filename
// 使 entry1.js 和 entry2.js 分离开来 解决： plugins中 chunks
// 再添加 entry3 的话  怎么更加自动化？ 解决： 生成 entry对象 生成 webpack plugins
function setUpMpa() {
  // src/*/index.js 入口
  const entry = {};
  let htmlWebPackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, '../src/*/index.js'));
  // console.log(entryFiles);
  // js 
  for (let filePath of entryFiles) {
    // '/Users/zhaomeng/Downloads/personal-project/blog/webpack/mpa-student/src/entry1/index.js',
    const match = filePath.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = filePath;
    const htmlTemplatePath = path.join(__dirname, `../src/${pageName}/index.html`)
    htmlWebPackPlugins.push(new HtmlWebPackPlugin({
      template: htmlTemplatePath,
      filename: `${pageName}.html`,
      chunks: [`${pageName}`]
    }))
  }
  return {
    entry,
    htmlWebPackPlugins
  }
}
const { entry, htmlWebPackPlugins } = setUpMpa();
module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  entry: entry,
  plugins: [
    ...htmlWebPackPlugins
  ]
});