// function Singleton() {
//     let instance = null;
//     return instance;
// }
const Singleton = (function(){
    // 闭包 closure
    let instance = null; //闭包区域  只在第一次实例的时候执行
    console.log('......闭包区域');
    return function(){
        //construct
        console.log('....new');
        if(instance){
            return instance
        }
        return instance = this; 
    }
})(); //立即执行并且返回一个函数
// 实例 return 单例模式
const a = new  Singleton()
const b = new  Singleton();
console.log(Singleton,typeof Singleton);
console.log(a);
console.log(b);
console.log(a == b );