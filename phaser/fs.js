const fs = require('fs');
// I/O 找文件 读入内存 向控制台输出 callback  
//异步 callback 匿名函数
 fs.readFile('./index.html','utf8',/*function(err,data)*/(err,data) => {
    // if(err){
    //     console.log(err);
    // }else{
    //     console.log(data);
    // }
    if(!err){
        console.log(data);
    }
})