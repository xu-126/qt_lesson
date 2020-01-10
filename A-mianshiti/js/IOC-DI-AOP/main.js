// import router from './router.js'
// import req from './request.js'

class Main {
    constructor({req,router}) {
        this.req = req
        this.router = router
    }
    run(){
        const reqIns = new this.req()
        const routerIns = new this.router()
        routerIns.init()
        console.log(reqIns.req())

    }
}
// new  Main().run()
export default Main;