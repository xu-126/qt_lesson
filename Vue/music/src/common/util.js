export function debounce (func,delay) {  //防抖函数
    let timer
    return function(...arg){
        if(timer){
            clearTimeout(timer)
        }else{
            timer = setTimeout(() => {
                func.apply(this,arg)
            },delay)
        }
        
    }
}