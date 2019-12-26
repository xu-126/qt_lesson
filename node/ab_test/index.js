const cluster = require('cluster') // 开启子进程 调用多核能力
const os = require('os') // 操作系统信息
console.log(os.cpus().length)
if(cluster.isMaster) { //？ 主进程
    for(let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }
} else {
    require('./app')
}