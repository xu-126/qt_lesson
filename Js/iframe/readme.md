## 代理 
线上环境解决跨域：代理  生活中：中介
live-server自带代理功能 命令行输入 live-server --proxy=/api:http://localhost:3003/api 
工具：webpack live-server / nginx
代码层面：fe -> /api/post[node server] -> /api/post[java server]

以上都是反向代理 ：代理客户端
正向代理：代理服务器

一个域 下面的 ajax 请求 有并发限制
提交数据给服务器 ajax 一般用来处理业务
日志提交 考虑到ajax并发限制属于非核心业务采用 img 的方式提交数据