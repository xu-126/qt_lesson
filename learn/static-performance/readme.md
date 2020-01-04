## 静态资源优化 
#  图片
jpg:
适用：色彩丰富的图片 banner图 焦点图 不支持透明图片
png: 
支持透明 适用: icon
webpack之图片压缩工具 ： https://www.npmjs.com/package/imagemin-webpack-plugin

# css
1. css页面头部
2. layout-paint-composite
   1. 重排一定引起重绘，重绘不一定引起重排  https://csstriggers.com/ 选择影响比较小的 比如： transform opacity
3. 使用外联(link) 避免使用 @import
   1. link(html) @import(css)
   2. @import 会在页面加载完才去引入
4. css Houdini
   1. link
   2. 没有模块化
   3. stylus 预处理器 
   4. post-css 后处理器(-webkit)
   5. css-module / scope
   6. css in js  styled-components(共享js变量)
5. 为啥 js in css
   1. js 提出一个语法很超前 过几天就可以用了 因为 babel 
   2. css flex 09提出现在才使用 为什么没有工具能够将css 转化为更低版本的实现呢？

# transform 属性
    scale
    translate
    rotate
    矩阵： transform 