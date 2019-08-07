
// function speak() {
//     var greeting = "Hello,I'm" + identify.call(this)
//     console.log(greeting)
// }
// var me = {
//     name:'wn'
// }
// var you = {
//     name:'mg'
// }
// console.log(identify())//会报错
// call 的作用是把 identify 里的作用域 掰到 me 里  identify.call(me) 这样identify 就可以访问 me 里的东西

// console.log(identify.call(you))

// console.log(speak.call(me))
// console.log(speak.call(you))

// function identify() {
//     return this.name.toUpperCase()
// }
// console.log(identify.call(me)) 

// this提供一种更优雅的方式来隐式“传递”一个对象
// function identify(context) {
//     return context.name.toUpperCase()
// }
// console.log(identify(me)) 


// function speak() {
//     var greeting = "Hello,I'm" + identify.call(context)
//     console.log(greeting)
// }

// console.log(speak.call(me))

//-----------------------------
function foo() {
    var a = 2
    bar()
}
function bar() {
    console.log(this.a);//不能使用this来引用一个词法作用域内部的东西
}
foo()


var foo = {
    a:1,
    b:bar()
}

function bar(){
    console.log(this)
}

foo()

//----------------------------- 栈
// function baz()  {
//     // 当前调用栈是baz 
//     // 因此，当前调用位置是全局作用域
//     console.log('baz')
//     bar()
// }
// function bar() {
//     // 当前调用栈是baz -> bar
//     // 因此，当前调用位置是 baz
//     console.log('bar')
//     foo()
// }
// function foo() {
//     console.log('foo')
// }

//-----------------------------
function foo(){
    "use strict"   //严格模式下 this 不会默认绑定到window 会Undefined
    console.log(this.a)
} 
var a = 2 
foo()

var obj = {
    a:2,
    foo:foo
}
function foo() {
    console.log(this.a)
}
obj.foo()

