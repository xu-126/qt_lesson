module.exports = { // 抛出对象
    // 'get /': async ctx=> {  
    //     ctx.body = '用户首页'
    // },
    // 'get /detail': async ctx=> {  
    //     ctx.body = '用户详情页面'
    // }
    'get /': async (app) => {
        const name = await app.$service.user.getName()
        app.ctx.body = '用户' + name
    },
    'get /detail': async ctx=> {  
        app.ctx.body = '用户年龄' + await app.$service.user.getAge()
    }
}