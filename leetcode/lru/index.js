/**
 * 最近最少使用原则
 * @param capacity:number 容量
 */
var LRUCache = function(capacity){
    this.capacity = capacity;//空间的上限
    this.arr = [];//数据结构
    this.obj = {};// 3,3 
    // 使用的空间 arr.length
    // set  push
    // get     
};
LRUCache.prototype.get = function(key){
    //调整优先级
    if(arr.length<this.capacity){
        arr.shift(key);
        arr.push(key);
        return obj(key); 
    }else{
        return -1;
    }    
}

LRUCache.prototype.set = function(key,value){
    if(arr.length<this.capacity){
        arr.push(key,value);
     }else{
         arr.shift();
         arr.push(key,value);
     }    
    
}
new LRUCache(2);

// [] length push
// [1] push 
// [1,2] 在哪端是最常用的？push
// get(1) 读操作
// 1所在的位置，从原来的数组里移除push到队尾
// 不会带来空间使用量的增加
// [2,1]
// put [3]带来空间的分配,回收空间？
//     判断数组的 length>=容量  要 回收最前面 shift push
//               length<容量   不要 push push(3)