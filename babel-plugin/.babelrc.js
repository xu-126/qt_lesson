const variable = require('./plugin.js')

// arrow-plugin 将箭头函数转为普通函数
// @babel-env 包含所有0ES新特性的插件s
module.exports = {
    plugins: [variable],
    presets: []
}