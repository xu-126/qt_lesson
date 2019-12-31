module.exports = app => ({
    index: async ctx => {
      app.ctx.body = await app.$model.user.findAll()
    },
    detail: async ctx => {
      ctx.body = '详情页面Ctrl'
    }
})
  