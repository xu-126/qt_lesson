// 发布订阅
// 用Map数组结构来存储数据
class EventEmitter{
    constructor(){
        this.events = this.events || new Map()  // events会被赋值为方法
    }
    addEventListener(type,fn){  // 监听事件
        if(!this.events.get(type)) {
            this.events.set(type,fn)
        }
    }
    emit(type){  // 触发事件
        let handle = this.events.get(type)
        handle.apply(this,[...arguments].slice(1))
    }
}
let emitter = new EventEmitter()
emitter.addEventListener('age',age => {
    console.log(age)
})
emitter.emit('age',19)