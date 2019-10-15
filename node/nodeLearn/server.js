let http = require('http')  //引入http这个核心模块来创建web服务器
let fs = require('fs')  //操作服务器的资源文件

let server = http.createServer()
server.on('request', (req,res)=>{
    let url = req.url
    if(url === '/'){
        fs.readFile('./resource/index.html',(error,data)=>{
            if(error){
                res.setHeader('Content-Type','text/plain; charset=utf-8')
                res.end('你要的资源不存在，请稍后再试')
            } else {
                res.setHeader('Content-Type','text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else if(erl === '/img'){
        fs.readFile('./resource/hy.jpg',(error,data)=>{
            if(error){
                res.setHeader('Content-Type','text/plain; charset=utf-8')
                res.end('你要的资源不存在，请稍后再试')
            } else {
                res.setHeader('Content-Type','image/jpeg')
                res.end(data)
            }
        })
    }
})
server.listen(3001,()=>{
    console.log('服务器已启动可以访问了')
})