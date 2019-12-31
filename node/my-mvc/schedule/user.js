module.exports= {
    interval: '30 * * * * *',  // cron
    handle(){
        console.log("定时任务 每分钟第三十秒执行一次"+ new Date())
    }
}