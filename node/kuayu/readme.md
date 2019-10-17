## 跨域
浏览器的安全策略
a.com 请求 b.com 的时候
## cors
corss origin resource share
跨域资源共享
规定一些http的首部字段 允许服务器声明哪些站点 有资源的访问权限

## 简单请求 非简单请求
简单请求：html 原生 form 表单可以发出去的请求(application/x-www-form-urlencoded  text/plain  multipart/form-data)  1. 正式请求
非简单请求: 分两步 1.预检请求(试探一下支不支持跨域) 2.正式请求