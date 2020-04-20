什么是跨域？
当协议、域名、端口号其中一个或一个以上不同时，访问并获取数据的现象称为跨域访问。同源策略限制下 cookie、 localStorage、 dom、 ajax、 IndexDB 都是不支持跨域的。
同源策略：
同源策略/SOP (Same Origin Policy)是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到 XSS、CSRF 等攻击。所谓同源是指 "协议 + 域名 + 端口" 三者相同。