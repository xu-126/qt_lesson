const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaStatic = require('koa-static')
const app = new Koa();
const path = require('path')
app.use(KoaStatic(path.join(__dirname,'./static')));

var router = new KoaRouter();
 
app.use(async(ctx,next) =>{
    //  http://127.0.0.1:8080  改为  http://localhost:8080
    ctx.set('Access-Control-Allow-Origin','http://localhost:8080')
    ctx.set('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS')
    ctx.set('Access-Control-Allow-Headers','X-custume,Content-Type')
    // 允许是否发送cookie  ...凭证
    ctx.set('Access-Control-Allow-Credentials',true);
    await next()
})
router.post('/api/books', (ctx, next) => {
  // ctx.router available
//   ctx.set('Access-Control-Allow-Origin','*')
//   ctx.set('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,OPTIONS')
//   ctx.set('Access-Control-Allow-Headers','X-custume,Content-Type')
console.log(ctx.cookies.get('hello'))
  ctx.body =[
      {bookName:'php'},
      {bookName:'node'},
  ]
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000,()=>{
    console.log('server is running http://localhost:3000')
})