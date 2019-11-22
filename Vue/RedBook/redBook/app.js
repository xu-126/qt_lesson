const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const cors = require('koa2-cors')

// error handler
onerror(app)

app.use(cors({
  origin:function(ctx){
    return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

// app.use(async (ctx,next)=>{
//     ctx.set('Access-Control-Allow-Origin','http://127.0.0.1:8080')
//     ctx.set('Access-Control-Allow-Headers','X-custom,Content-Type')
//     ctx.set('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS')
//     // 是否允许发送cookies
//     ctx.set('Access-Control-Allow-Credentials',true)
//     ctx.body = '123456'
//     await next()
//   })
  
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
