import Vue from 'Vue'
function AVue ({methods}) {
    for(let key in methods){
        this[key] = methods[key]
    }
}
AVue.prototype.$alert = () =>{
    document.write('我是个傻傻')
}
Object.defineProperty(Vue.prototype,'$alert',{
    writable: true,
    value(){
        console.log('我是干货')
    }
})
export default AVue