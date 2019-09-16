- 链接带来了页面的互联
 一切皆资源 链接表示 URL
 重新刷新 坏事  体验有点差
SPA Single Page Application
## 路由的做法 框架的实现
单页应用的结构
一个页面分为不动的部分和动的部分
导航 nav a #/page1
# /page1 path 页面切换 锚链接 
URL 改变了的事件，container元素里 DOM 大型页面方便跳转
锚链接让点击页面不跳转 #/page1 #开头
路由接管一切 new HashRouter();
constructor 订阅hashChange事件

新的前端世界在打开 要有新的秩序 管住所有路由  #/page hashRouter
hash => cb() 动态的将container 显示
class HashRouter
this.routers = {}
向外提供一个 register（hash,callback = function(){}）方法 
load 
window.addEventListener('hashChange',this.load.bind(this))返回一个新的函数 适合事件执行时