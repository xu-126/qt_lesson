global.gc()
console.log(process.memoryUsage().heapUsed)
let key = new Array(5*1024*1024)
console.log(process.memoryUsage().heapUsed)
let map = new Map()
map.set(key,1)
map.delete(key) 
key = null
global.gc()
console.log(process.memoryUsage().heapUsed)