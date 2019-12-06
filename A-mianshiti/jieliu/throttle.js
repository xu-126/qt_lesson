// 在指定的时间间隔delay内 无论你点击多少次都会等delay时间后才执行
const throttle = (fn,delay) => { //1
    let flag = true //5
    return (...args) =>{
        if(!flag) return
        flag = false
        setTimeout(() => {//3
            fn.apply(this,args)
            flag = true
        },delay)
    }
}
const oThrottle = throttle(success,2000)//2