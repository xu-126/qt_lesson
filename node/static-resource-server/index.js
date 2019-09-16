const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req,res)=>{
    console.log(req.url);
    // if(req.url === '/demo.jpg'){
    //     fs.readFile('/demo.jpg','binary',(err,file) => {
    //         res.write(file,'binary'),
    //         res.end();
    //     })
    //     return false;
    // }
    // if(req.url === '/tianshi.png'){
    //     fs.readFile('/tianshi.png','binary',(err,file) => {
    //         res.write(file,'binary'),
    //         res.end();
    //     })
    //     return false;
    // }
    const reqUrl = req.url;
    //    /static/
    if(/^\/static\//.test(reqUrl)) {
        staticServer(req,res);
        return false;
    }

    fs.readFile('./index1.html','binary',(err,file) => {
        res.write(file,'binary'),
        res.end();
    })
}).listen(9090,()=>{
    console.log('server is running 9090');
})
function staticServer(req,res){
    const reqUrl = req.url;
    const filePath = path.join(__dirname,reqUrl);
    fs.exists(filePath,exists=>{
        if(!exists){
            res.writeHead(404);
            res.end();
            return false;
        }
        fs.readFile(filePath,'binary',(err,file)=>{
            res.write(file,'binary');
            res.end();
        });
    });
}