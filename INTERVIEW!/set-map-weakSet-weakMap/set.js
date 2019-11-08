// const s = new Set();
// [1,2,3,4,5,3,2,1].forEach(x => s.add(x)); // 去重
// console.log(s)

// let set = new Set([1,2,3,2,1])
// console.log(set.size)

// let set = new Set()
// set.add(1).add(2)
// console.log(set)
// console.log(set.has(1))
//  set去重后返回的对象而不是数组所以要转化 Array.from 将类数组转化为数组
// let obj = new Set([1,2,3,2])
// const arr = Array.from(obj)
// console.log(arr)

// Set 的遍历顺序是根据插入顺序来定的
// keys() 包含集合中所有键的迭代器
// values() 包含集合中所有值的迭代器
// entries() 包含Set对象中所有值的迭代器 entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)
// forEach(callbackFn,thisArg)

let set = new Set([1,6,3])
console.log(set)
console.log(set.values())
// for(let item of set.entries()){
//     console.log(item)
// }
// console.log(set.keys())
// set.forEach((key,value) => {
//     console.log(key  + ':' + value)
// })