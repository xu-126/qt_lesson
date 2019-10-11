let obj = {
    a: 'aaa',
    b: 'bbb',
    c: 'ccc',
    [Symbol('d')]:1
}
Object.defineProperty(obj,'e',{
    value:'eee',
    enumerable:true  //默认 不可被枚举
})
console.log(Object.values(obj))
for(let key in obj){
    console.log(key)
    console.log(typeof(key))
}