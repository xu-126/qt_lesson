const fs = require('fs');//文件模块
// IO
fs
   .createReadStream('./sample.txt')
   .pipe(process.stdout); // 输出设备的一种 交互  后端process相当于前端的window 