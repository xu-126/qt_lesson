module.exports= {
    interval: '*/3 * * * * *',  // cron
    handle(){
        console.log("定时任务 3秒执行一次"+ new Date())
    }
}