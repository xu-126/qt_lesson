## 帧
刷新率 60HZ
60次/1000ms  16.666ms/次
## 
主进程
插件
GPU
渲染

## 渲染
js
http
定时器
事件
页面

js和页面绘制布局 是互斥的  因为JS可以改变dom

## event loop
MacroTask(宏任务)：同步代码、setTimeOut setinterval 
MicroTask(微任务)：Promise.then nextTick

宏任务 -> 微任务 -> 渲染
