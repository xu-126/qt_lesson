一、css

div中三等高模型（flex）
如何充满页面
垂直居中
三角形、箭头
长宽等比例缩放
meta viewport
css预处理（less、sass、stylus）、后处理（postcss）
盒模型
rem
二、js

基础：

判断数据类型的几种方法（typeof、instanceof、constructor、Object.prototype.toString.call()）
instanceof的含义（原型链、实例），实现instanceof（__proto__）
设计模式
闭包，有哪些应用场景
垃圾回收机制（标记清除、引用计数）、内存泄漏（全局变量、闭包、定时器等）
节流、防抖，如何实现
timeout、interval、websocket
如何实现拖拽
获取所有兄弟节点
arguments，类型？
判断字符串是否为数字（正则，isNaN + parseFloat）
事件委托、DOM事件流（捕捉、目标、冒泡）、阻止冒泡
跨域，jsonp是否为ajax
new操作符具体干了什么呢?

1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。

2、属性和方法被加入到 this 引用的对象中。

3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

 Ajax原理

(1)创建对象

var xhr = new XMLHttpRequest();

(2)打开请求

xhr.open('GET', 'example.txt', true);

(3)发送请求

xhr.send(); 发送请求到服务器

(4)接收响应

xhr.onreadystatechange =function(){}

(1)当readystate值从一个值变为另一个值时，都会触发readystatechange事件。

(2)当readystate==4时，表示已经接收到全部响应数据。

(3)当status ==200时，表示服务器成功返回页面和数据。

(4)如果(2)和(3)内容同时满足，则可以通过xhr.responseText，获得服务器返回的内容。

方法：

数组方法shift、unshift、pop、push，如何设计数组使时间复杂度降低
trim方法实现（正则），去除所有空格呢
 

数据结构：

合并有序数组，合并k个有序数组（堆）
sort排序属于什么排序，快排和归并排序的复杂度
数组去重（indexof、map）
一个数组中，由1到n的数构成，有一个数只出现过一次，其他均出现过2次，找出这个数（加和），如果不是由1到n呢（map、异或）
二叉树广度优先遍历（栈）和深度优先遍历（队列），如何实现，如果不用递归呢（循环+堆／栈）
 

ES6:

...运算符，使用Math.max方法取数组最大值(...)，原生js实现Math.max方法(arguments)
箭头函数的this
async/await
promise实现原理，手写？
 

三、vue

父子组件生命周期顺序，什么时候init需要放在mounted里面执行
如何设计一个无限层的树形组件，如果是可选的呢
