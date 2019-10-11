console.log(process.memoryUsage())  //0
let array = new Array( 5 * 1024* 1024)
console.log(process.memoryUsage()) //1
array = null  
global.gc();// 回收
console.log(process.memoryUsage())