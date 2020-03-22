// 这三种种方法还无法去掉“{}”空对象

// 利用 es6 新的类数组数据结构 Set
let array = [1,2,3,4,3,2,{},{}];
function a(array) {
    // return [...new Set(array)];
    return Array.from(new Set(array))
}
console.log(a(array))

// 利用for嵌套for，然后splice去重（ES5中最常用）
// 双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。
// splice() 方法用于添加或删除数组中的元素;注意：这种方法会改变原始数组。
function b(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           if (array[i] === array[j]) {
               array.splice(j,1);
               j--;
           } 
        }   
    }
    return array;
}
console.log(b(array));  

// 利用sort()
function c(array) {
    array = array.sort();
    var arr = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i-1]) {
            arr.push(array[i])
        }   
    }
    return arr;
}
console.log(c(array));