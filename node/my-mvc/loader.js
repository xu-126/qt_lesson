// 启动文件
const fs = require('fs')
const path = require('path') 
const Router = require('koa-router')

// 读取目录和文件
function load(dir,cb){  // dir 要读取的文件夹  // cb 读取后的回调
    // 获取文件的绝对路径
    const url = path.resolve(__dirname, dir)
    // 读取目录
    const files = fs.readdirSync(url)
    // 遍历
    files.forEach((fileName) => {
        // 去掉扩展名
        fileName = fileName.replace('.js','')
        const file = require(url + '/' + fileName)
        cb(fileName,file) // file 读取的文件的内容
    })
}


// 加载路由
function initRouter(app){
    const router = new Router()
    load('routes',(fileName,routes) => {
        const prefix = fileName === 'index' ? '' : `/${fileName}` // 除index文件以外其他文件都加上前缀
        // console.log(routes)
        routes = typeof routes === 'function' ? routes(app) : routes
        Object.keys(routes).forEach(key => {
            const [method,path] = key.split(' ')
            // console.log(`正在映射地址：${method.toLocaleUpperCase()} ${prefix}${path}`)

            // 注册路由
            // app.get('/',ctx => {})
            // router[method](prefix + path , routes[key])
            router[method](prefix + path , async ctx => {
                app.ctx = ctx
                await routes[key](app)
            })
        })
    })
    return router
}

function initController(app){
    const controllers = {}
    // 读取控制器目录
    load('controller',(filename,controller)=>{
        // console.log(filename)
        // 添加路由
        controllers[filename] = controller(app)
    })
    return controllers;
}

function initService() {
    const services = {}
    // 读取控制器目录
    load('service', (filename, service) => {
      // 添加路由
      services[filename] = service
    })
    // console.log(services)
    return services
  }
  
// initRouter()
// load('routes',fileName => console.log('routers:' + fileName))
// initController()

const Sequelize = require('sequelize')
function loadConfig(app){
    load('config',(filename,conf) => {
        if(conf.db){
            app.$db = new Sequelize(conf.db) // 初始化db操作

            // 加载模型
            app.$model = {}
            load('model',(filename,{schema,options}) => {
                console.log(filename)
                app.$model[filename] = app.$db.define(filename,schema,options) // 将 sequelize一个个模型 全部加载
            })
            app.$db.sync() // 模块同步
        }
        if(conf.middleware) {
            conf.middleware.forEach(mid => {
                const midPath = path.resolve(__dirname,'middleware',mid)
                app.$app.use(require(midPath))
            })
        }
    })
}
const schedule = require('node-schedule')
//初始化定时任务
function initSchedule(){
    load('schedule',(filename,{interval,handle}) => {
        schedule.scheduleJob(interval,handle)
    })
}

module.exports = {
    initRouter,
    initController,
    initService,
    loadConfig,
    initSchedule
}