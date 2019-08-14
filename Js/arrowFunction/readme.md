##
1. 箭头函数不支持重名形参 普通函数可以
2. 箭头函数 没有this this指向定义时候所处上下文（外部函数）的this


## 类数组
1. length
2. 索引 获取值
3. arguments
4. 类数组转为真正的数组: 1.Array.from()
Array.prototype.slice().call(arguments)
