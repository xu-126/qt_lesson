import Router from './router.js'
import Req from './request.js'
import Main from './main.js'

// @ 装饰器
// 重写push
const originPush = Array.prototype.push;
Array.prototype.push = function(...args) {
    console.log(123)
    return originPush.call(this,...args)
}

// 通过容器  依赖注入
new Main({
    req: Req,
    router: Router
}).run()