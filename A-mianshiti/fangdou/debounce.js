// 防止你有帕金森  你一直点点点点最后停下来了才发送请求
const debounce = (fn,delay) => { // 1
    let timer = null
    return (...args) => { //4
        clearTimeout(timer); //5 清除定时器
        timer = setTimeout(() => { 
            fn.apply(this,args) //3  把fn作用域的this绑定 args为fn里的参数
        },delay)
    }
}
const oDebounce = debounce(success,1000); //2
let btn = document.getElementById('btn');
btn.addEventListener('click',oDebounce)