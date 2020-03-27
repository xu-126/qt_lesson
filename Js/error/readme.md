前端错误监控
1. 可疑区域增加 try-catch 针对于意料之中的错误，异步代码无法捕获
2. 全局监控 JS异常 window.onerror
3. 全局监控 静态资源异常 window.addEventListener()
4. 捕获没有 catch 的 promise异常