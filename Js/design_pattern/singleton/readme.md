- 单例模式 是设计模式的最基本模式 不管new多少次 永远返回一个对象 instance
- 立即执行函数 + 闭包
instance 全局？  也可以解决问题但是会污染命名空间
var instance = null;
function Singleton(){
        if(instance){
            return instance
        }
        return instance = this; 
    }