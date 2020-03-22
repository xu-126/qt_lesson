// 变量的深度复制
// 利用JSON转换来复制变量。先将原来的变量转换为字符串然后再重新组装成对象，这样会产生不一样的副本/
// 缺点：变量很多时耗时耗内存
let obj = {
    a: 1,
    b: {
        c: 2,
    }
}
let newObj = JSON.parse(JSON.stringify(obj));

obj.b.c = 3;
console.log(obj); // { a: 1, b: { c: 3 } }
console.log(newObj); // { a: 1, b: { c: 2 } }

// 使用Object.assign()
// 这个也是浅复制（仅深度复制了顶层的属性）。深层属性会同样返回索引，与原变量分享一个地址。
let newObj2 = Object.assign({}, obj);
obj.a = 10;
obj.b.c = 20;
console.log(obj); // { a: 10, b: { c: 20 } }
console.log(newObj2); // { a: 1, b: { c: 20 } } c为深层属性与原变量共享地址所以被改变了

// 最简单的办法就是一个一个循环复制给新的变量
function copy(obj) {
    let newObj1 = {}
    for(let i in obj) {
        newObj1[i]= obj[i]
    }
    return newObj1;
}
console.log(copy(obj))