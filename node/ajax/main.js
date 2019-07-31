// live-server 
// index.html 提供http 访问的支持 web server
const http = require('http');
const fs = require('fs');
const index = fs.createReadStream('./index.html');
// web server 一直伺服 3000
// 向 equest 返回 response 资源
const server = http.createServer((req,res) => {
    // res.end('hello world');
    // index.html 显示出来  /
    // req 浏览器 访问网站的代理
    if(req.url == '/'){
        // res.end('index page');
        index.pipe(res);
    }else if(req.url == '/userinfo'){
        const info = {
            "name" : "徐佳影",
            "desc": "身骑白马"
        }
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf8'
        });
        res.end(JSON.stringify(info));
    }
    else{
        res.end('hello world');
    }
})

server.listen(1314);