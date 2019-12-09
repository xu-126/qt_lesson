var a = {
    name: 'wn',
    age: 18
}
var b = Object.create(a)  // b是从a继承来的
var c = a                 // c是赋值来的
console.log(b,c)
// b.__proto__

function create(obj){  // obj 为本体
    function F(){}
    F.prototype = obj
    return new F()
}

if(typeof Object.create !== 'function') {
    Object.create = function(prototype,properties){
        function Ctor(){}
        Ctor.prototype = prototype
        var o = new Ctor()
        if(prototype){o.constructor = Ctor}
        if(properties !== undefined){
            if(properties !== Object(properties)){
                throw Error()
            }
            Object.defineProperties(o,properties)
        }
        return o
    }
}