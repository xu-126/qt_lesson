## PWA 
1. 离线访问 cacheStorage + service-work(基于web-worker) 
2. 桌面入口 manifest.json
3. 发送通知 Notification

# web-worker
js 单线程
new Worker() 分担任务

# cacheStorage
1. 除非明确地更行缓存 否则缓存不会被更新 
   除非删除 否则缓存数据永不更新
2. 一个域下面浏览器限制了缓存数据的大小

# 更新

sw.js
install => cache.addAll
fetch => cache.match

不是每次刷新，service-work 都会重新 install -> activate
如果service-work 内容有变换才会 重新 install -> skipWaiting -> activate
用户把页面关了再进来才会到 activate 或者 调用 this.skipWaiting()