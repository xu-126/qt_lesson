

// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释:
// 向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]
// 说明:

// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。

// let arr = ['a','b','c','d','e','f','g','h']
// function RShift(list,k){
//     const copy = [...list]
//     const n = copy.length
//     if(k % n === 0) return list
//     for(let i = 0 ; i < n; i++){
//         list[(k + i) % n] = copy[i]  //[c,d,c,d...]   事件复杂度和空间复杂度都是n
//     }
//     return list
//     }
// console.log(RShift(arr,2))


// let arr = ['a','b','c','d','e','f','g','h']
// function RShift(list,k){
//     const n = list.length
//     if(k % n === 0) return list
//     let cnt = Math.abs( k > 0 ? k % n : n + (k % n))
//     let t = null
//     while (cnt --){
//         t = list[n -1] 
//         // 右移一位
//         for(let i = n - 1; i > 0; i--) {
//             list[i] = list[i-1]
//         }
//         list[0] = t
//     }
//     return list
    
// }
// console.log(RShift(arr,2))

// 数组拼接
// ['a','b','c','d','e','f','g','h']  ['a','b','c','d','e','f','g','h']  
// let arr = ['a','b','c','d','e','f','g','h']  
// function RShift(list,k){
//     const n = list.length
//     let i = Math.abs( k > 0 ? k % n : n + (k % n))
//     return list.concat([...list]).slice(n - i,n * 2 - i)
// }
// console.log(RShift(arr,2))


let arr = ['a','b','c','d','e','f','g','h']

function reverse(list,start,end){
    let t = null
    while(start < end){
        t = list[start]
        list[start] = list[end]
        list[end] = t
        start++
        end--
    }
}
function RShift(list,k){            
    const n = list.length
    if(k % n === 0) return list   //a b c d e f g h
    reverse(list,0,n-k-1)         //f e d c b a g h
    reverse(list,n-k,n-1)         //            h g
    reverse(list,0,n-1)           //g h a b c d e f
    return list
}
console.log(RShift(arr,2))