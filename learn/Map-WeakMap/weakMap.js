global.gc()
console.log(process.memoryUsage().heapUsed)
let key = new Array(5*1024*1024)
console.log(process.memoryUsage().heapUsed)
let wp = new WeakMap()
wp.set(key,1)
key = null
global.gc()
console.log(process.memoryUsage().heapUsed)