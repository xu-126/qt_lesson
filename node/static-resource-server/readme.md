## 静态资源
静态：不会随着服务器运行而改变的资源,放到服务器上的
常见的静态资源：html css js jpg

## 浏览器
file://.html  文件的查找
http://localhost:9090/
支持了两个不同的协议
1. 浏览器知道这是一个html
2. script img link scr属性 浏览器会请求对应的src得到结果
3. 服务器 要返回对应的内容 js/css
4. http://127.0.0.1:8080/demo.jpg 和磁盘路径一一对应
req.url === c:demo.jpg
作用：统一处理了静态资源的请求

异步：
1. 回调
2. promise