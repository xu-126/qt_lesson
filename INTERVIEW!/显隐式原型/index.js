// __proto__ 隐式原型
// prototype 显式原型
// function Person(name){
//     this.name = name
// }
// let p = new Person('wn')
// p.__proto__ == Person.prototype
// console.log(p.__proto__)
// console.log(Function.__proto__)
// console.log(Function.prototype == Object.__proto__) // true

// // obj -> Function -> {}
// var foo = {}  //    var foo = new Object()
// var F = function(){}
// Object.prototype.a ='valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)   // valA
// console.log(foo.b)  // undefined
// console.log(F.a)   // valA
// console.log(F.b)   // valB

// new实现原理
// 1.创建空对象
// function Person(name){
//     this.name = name
//     return { a:'aa'}
// }
// let p = new Person('wn')
// console.log(p)

// 可以用 for in 遍历数组吗？ 
// Array.prototype.method = function(){}
// var myArray = [1,2,3,4,5,6,7]
// myArray.name = '蜗牛'
// for(let index in myArray){
//     console.log(index)
// }
// for in
// 1.index是索引为字符串型数字，不能进行几何运算
// 2.遍历的顺序有可能不是按照实际数组的内部顺序运行
// 3.使用for in 会遍历数组所有可枚举属性，包括原型  所以for in 适合遍历对象
//for of
// 遍历的是数组的元素
// 不包括数组原型和索引

// 数组扁平化
let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
let oArr = [1,2,3,4,5,6,7,3,2,8]
function a(gArr){
    var res = []
    gArr.map((item) => {
        if(Array.isArray(item)){
            res = res.concat(a(item))
        } else {
            res.push(item)
        }
    })
    // for(let i = 0; i < gArr.length; i++){
    //     if(Array.isArray(gArr[i])){
    //         res = res.concat(a(gArr[i]))
    //     } else {
    //         res.push(gArr[i])
    //     }
    // }
    return res   
}

function a(gArr){
    return gArr.reduce(function(pre,item){
        return pre.concat(Array.isArray(item) ? a(item) : item)
    },[])
}
console.log(a(gArr))