class EventEmitter {
    constructor () {
        this._events = this._events || new Map() // 存储事件
        this._maxListeners = this._maxListeners || 10 //监听上线
    }
}

// 触发名为type的事件
EventEmitter.prototype.emit = function(type,...args) {
    let handler;
    // 从存储事件键值对的 this._events中获取对应事件回调函数
    handler = this._events.get(type)
    if(args.length > 0) {
        handler.apply(this,args)
    } else {
        handler.apply(this)
    }
    return true
}

// 监听名为type的事件
EventEmitter.prototype.addListener = function(type,fn) {
    if(!this._events.get(type)) {
        this._events.set(type,fn)
    }
}

// 触发名为type的事件
EventEmitter.prototype.emit = function(type,...args) {
    let handler;
    // 获取已订阅type事件的所有订阅者
    // 从存储事件键值对的 this._events中获取对应事件回调函数
    handler = this._events.get(type)
    if(Array.isArray(handler)) {
        for (let i = 0; i < handler.length; i++){
            if(args.length > 0){
                handler[i].apply(this,args)
            } else {
                handler[i].apply(this)
            }
        }
    } else {
        // 多位订阅者
        if(args.length > 0) {
            handler.apply(this,args)
        } else {
            handler.apply(this)
        }
    }
    return true
}

// 订阅名为type的事件
EventEmitter.prototype.addListener = function(type,fn) {
    const handle = this._events.get(type) // 获取对应事件的函数
    if(!handler) {
        this._events.set(type,fn)
    } else if (handler && typeof handler === 'function') {
        //只有一个监听者
        this._events.set(type,[handler,fn])
    } else {
        handler.push(fn)
    }
}
