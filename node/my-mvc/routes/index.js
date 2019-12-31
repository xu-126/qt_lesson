module.exports = app => ({  // 抛出函数
    // 'get /': async ctx=> {  
    //     ctx.body = '首页'
    // },
    // 'get /detail': async ctx=> {  
    //     ctx.body = '详情页面'
    // }
    'get /': app.$ctrl.home.index,
    'get /detail': app.$ctrl.home.detail,
})