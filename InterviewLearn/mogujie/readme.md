蘑菇街备战：

var、let、const 的区别：
变量提升：var 提升声明并赋初始值undefined; let、const的声明保持未初始化；（JavaScript 引擎只会提升函数声明，并不会提升函数表达式）
块级作用域：ES6规定，如果区块中存在let和const命令，这个区块就是一个块级作用域，在区块内使用let或const声明变量之前，该变量都是不可用的，这称为“暂时性死区”。
不允许重复声明：var声明的变量可以被覆盖，let声明的变量不能重复声明；const常用来声明常量，一旦声明，常量的值不能改变。

  forEach() 和 map() 的区别：
  forEach()不会返回执行结果，直接修改原数组，map()会得到一个新数组并返回；

  <b> 和 <strong>的区别：
默认情况下它们起的均是加粗字体的作用，二者所不同的是，<b>标签是一个实体标签，它所包围的字符将被设为bold（粗体），而<strong>标签是一个逻辑标签，它的作用是加强字符的语气，强调”可以用加粗（默认情况）来强调，也可以用其它方式来强调，比如下划线，比如字体加大，比如红色，等等。

  作用域链：
在ES5中只存在两种作用域————全局作用域和函数作用域，ES6增加了块级作用域。当访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去父作用域找，直到找到该变量的标示符或者不在父作用域中，这就是作用域链。值得注意的是，每一个子函数都会拷贝上级的作用域，形成一个作用域的链条。

  JS闭包（可能出现的问题）？
红宝书定义：闭包是指有权访问另外一个函数作用域中的变量的函数。
闭包表现形式：1. 返回一个函数；2. 作为函数参数传递；3.在定时器、事件监听、Ajax请求、跨窗口通信、Web Workers或者任何异步中，只要使用了回调函数，实际上就是在使用闭包。


  对原型链的理解？
在JavaScript中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个prototype属性，这个属性指向函数的原型对象。
当函数经过new调用时，这个函数就成为了构造函数，返回一个全新的实例对象，这个实例对象有一个__proto__属性，指向构造函数的原型对象。
JavaScript对象通过prototype指向父类对象，直到指向Object对象为止，这样就形成了一个原型指向的链条, 即原型链。
对象的 hasOwnProperty() 来检查对象自身中是否含有该属性
使用 in 检查对象中是否含有某个属性时，如果对象中没有但是原型链中有，也会

  JS如何实现继承（几种继承方法）？
1. 原型链继承 Child.prototype = new Parent();
2. 寄生组合继承 Child.prototype = Object.create(Parent.prototype); Child.prototype.constructor = Child;
3. ES6 extends class 可以通过extends关键字实现继承

  js this关键字、es6 this？
this表示当前对象，this的指向是根据调用的上下文来决定的，默认指向window对象。
箭头函数没有this, 因此也不能绑定。里面的this会指向当前最近的非箭头函数的this，找不到就是window(严格模式是undefined)。

  严格模式下在全局作用域使用this会怎样？
全局上下文默认this指向window, 严格模式下指向undefined。

  null 和 Undefined 的区别：
尚未初始化：undefined；空值：null。

 了解的JS 数组？
  数组的高阶函数
1. map 
2. reduce // 适用于多个数累加
3. filter // 函数返回值为bool类型决定元素是否保留
4. sort// 数组排序（将数字转换为字符串，根据字母unicode值进行升序排序）
  把arguments转化成数组的方法：
arguments 是一个对应于传递给函数的函数的类数组对象
  Array.prototype.slice.call(arguments)
Array.from(arguments)
ES6展开运算符 [...arguments]
利用 concat + apply Array.prototype.concat.apply([ ],argument) // apply 方法会把第二个参数展开

  ‘==’和 ‘===’的区别？
== : 用于一般比较，比较时可做数据类型转换
===： 用于严格比较，类型不匹配就返回false

  em 和 rem 区别/ 怎么做自适应？
em 相对于父元素，子元素字体大小相对于父元素字体大小，元素的width/height/padding/margin用em的话相对于该元素的font-size
rem 相对于根元素<html>元素

  HTML5新增了哪些东西？
新增了语义化标签;
增加了一些表单属性，主要是input属性的增强<input type=wmail/url/date.. placeholder="提示语" autofoacus="true">
新增WebStorage储存，包括localStorage和sessionStorage。

  cookie、localStorage、sessionStorage的区别：
cookie：http是一个无状态协议，cookie用来保留状态信息；它本质上就是浏览器里面储存的文本文件，内部以键值对的方式来储存；向同一个域名发送请求就会携带相同的cookie,服务器拿到后解析便能得到客户端的状态。
Cookie的有效期通过Expires（过期时间）和Max-Age（时间间隔）来设置；
如果cookie字段带上HttpOnly...预防 XSS 攻击
SameSite 属性 预防 CSRF 攻击


  移动端适配 ：
  媒体查询（media queries）
Flex 弹性布局
 rem / vw 等比例缩放 

  Vue生命周期 ：
beforeCreate、created、befor Mount、mounted、before Update、updated、beforeDestory、destroyed。
beforeCreate调用后：初始化inject,初始化 state ->created调用后：开始挂载组件到dom上（编译template, 生成 ast 抽象语法树；优化 ast ; 根据 ast 生成 render 函数 ）->

  Vue传值方法 :
父组件-》子组件：通过标签属性名的形式，用prop接收；子组件-》父组件：通过emit传递事件名。

  为什么虚拟DOM比真实DOM性能好？
真实DOM的操作，一般都会对某块元素的整体重新渲染，采用虚拟DOM的话当数据变化时只要局部刷新变化位置就好。虚拟DOM进行频繁修改然后一次性比较并更新真实DOM中需要改变的部分。采用虚拟DOM是为了减少频繁的大面积重排和重绘引发的性能问题。

  说说 Vue 的 diff 过程：




  说说事件循环？
因为JS是单线程，js任务需要排队顺序执行，为了协调事件、用户交互...防止线程阻塞，Event Loop的方案就产生了。事件循环按 宏任务队列 -> 清空微任务队列 ->宏任务队列
console.log(）主线程作为一个宏任务
Promise构造函数立即执行 Promise.then分发到微任务

  Vue 双向绑定原理：
通过Object.defineProperty()方法进行数据劫持 + 发布订阅者模式
vue实例会遍历所有的属性，给这些属性添加get和set方法进行数据劫持，Object.defineProperty(obj,prop,descriptor)方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。








  观察者模式？单例模式？





单例模式对象的类必须保证只有一个实例存在。单例模式要素：1.私有的构造方法；2. 指向自己实例的私有静态引用；3.以自己实例为返回值的静态的公有方法。
饿汉式单例在单例类被加载时实例化一个对象；
懒汉式单例只有在真正使用时才会实例化一个对象。

  常用的跨域方式 ：
  通过jsnop 跨域 
动态创建script（script.src=" "）再请求一个带参网址实现跨域
通过 cors（跨域资源共享）
在服务端设置 set-Header Access-Control-Allow-Origin 字段

  Vue异步加载组件方法：
  webpack代码分割 require('@/component/helloword')
webpack + es6 import('./component/helloword') 主要用于异步加载返回一个promise对象

  CSS布局（清除浮动）？
  添加额外标签并设置clear: both
父级添加overflow属性
简历伪类选择器并设置clear: both清除浮动

  制作一个轮播图（纯CSS)?
@keyframes animation 

  CSS选择器权值是怎样的？
内联样式权值 1000 > ID选择器 100 > Class类选择器 10 > HTML标签选择器 1

  瀑布流布局：
瀑布流布局的特点是等宽不等高
  colunmn 多行布局实现 column-count: 2; // 列数 column-gap:10px; // 列间距
 Flex 弹性布局实现 display:flex; flex-flow : column wrap; // 横向排列并换行
 js实现

  ES6新语法 (多讲几个) /ES6语法糖？
  变量声明 let声明变量 const声明常量，若是对象，对象包含的值可以被修改，对象所指地址不可更改；
模板字符串 ` ${name} `
箭头函数 省略return 关键字 继承当前上下文 this 关键字
对象和数组的解构 对象解构用 {} 数组解构用 [] const [name,age] = student;
拓展运算符（...) :将数组展开为多个元素 const fruits = ["apple","orange"] console.log(...fruits);
剩余参数（...）：将多个元素绑定到一个数组
类（class）不是新的对象继承类型，只是原型链的语法糖的表现形式。类的声明不会提升。extends允许一个子类继承父类，子类的constructor函数中需要执行super()函数；

  http常见状态码？
200 OK 请求成功。响应头和或数据体将随此响应返回；
302 Found 临时移动。
304 Not Modified 未修改。所请求资源未修改，不会返回任何资源。（从缓存中读取信息）。
404 Not Found 客户端的所请求的资源无法找到；
503 Service Unavailable 由于超载或系统维护，服务器暂时无法处理客户端的请求；

  http 首部字段：



ES6普通方法和lodash的选择？
lodash是一套工具库，内部封装了很多字符串、数组、对象等常见数据类型的处理函数。lodash的所有函数都不会在原有的数据上进行操作，而是复制出一个新的数据而不改变原有数据，类似 immutable.js的 理念。

 POST 和 GET 请求的区别：
查询字符串是在 GET 请求的 URL 中发送的安全性低； 浏览器用GET请求来获取一个html页面/图片/css/js等资源；用POST来提交一个<form>表单，并得到一个结果的网页。
































































































































































































































































































































































































































































