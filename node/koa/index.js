// 回调 
// async 定义函数的一个关键词
// async() => {
//     let a = await Promise()  //接promise
//     // a resolve 时候的值
// }
const Koa = require('koa')
const KoaBody = require('koa-body')
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const app = new Koa()
app.use(KoaBody({
    multipart: true,
    formidable:{
        maxFileSize:200 * 1024 * 1024,
        keepExtensions:true,
        uploadDir:path.join(__dirname,'/static/images')
    }
}))
app.use(async (ctx) => {
    //http://localhost:3000/ 上传文件的表单
    //http://localhost:3000/upload 处理表单
    const method = ctx.method;
    const path = ctx.path;
    console.log(method,path)
    if(method === 'GET' && path === '/'){
        ctx.body=`
        <form action="/upload" 
    method="post" 
    enctype="multipart/form-data">
  <input type="file" name="avatar" />
    <input type="submit" value="提交" />
  </form> `
    } else if(method === 'POST' && path === '/upload'){
        console.log(ctx.request.files)
        //fs.readDir()
        const readdir = promisify(fs.readdir)
        const files = await readdir('./static/images/','utf-8')
        const htmlTemplate = files.map(file => {
            return `
            <li>
                <a href="/images/${file}">${file}</a>
            </li>
            `
        }).join('');
        ctx.body = htmlTemplate;
    }
})
app.listen(3001,() => {
    console.log('server is running 3001')
})