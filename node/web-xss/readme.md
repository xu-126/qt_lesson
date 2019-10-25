## xss
cross site script 跨站脚本攻击
用不合法的途径往 web页面插入可执行的代码

攻击类型：
1. 反射型 xss代码存在url中，服务器解析请求 把xss代码一并返回 web网页得到响应执行了xss代码 过程像一次反射一样
2. 存储型：唯一区别 xss代码 有没有永久保存在 服务器(数据库，文件...)中

## 防护
编码 html entity 编码 < -> "&lt;" "" -> "&nbsp;"
过滤 onError 属性 
较正