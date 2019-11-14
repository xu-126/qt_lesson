// setTimeout(function(argument){
//     console.log(111)
// },0)

// console.time('test')
// for(var i = 0; i < 1000000; i++){
//     i === (10000 - 1)
// }
// console.timeEnd('test')

console.log(222)

// 1. js引擎线程 2.GUI线程 3.http网络请求线程（处理用户的get,post等请求，等到返回结果后将回调函数推入到任务队列）
// 4.定时触发器线程（seTimeout,等待时间结束后把执行函数推入到任务队列） 5.浏览器事件处理线程

function test1(){
    test2()
    console.log('test1')
}
function test2(){
    console.log('test2')
}
function mian(){
    console.log('mian')
    setTimeout(() => {
        console.log('setime')
    },0)
    test1()
}
mian()

// step1: main()先执行，进入线程，进入执行栈打印'hello, I am main'
// step2: 遇见setTimeout，将回调函数放入任务队列，
// step3: main调用test1，test1进入到stack中被执行
// step4: test1执行，调用test2（test2进入到stack中被执行）
// step5: test2执行，打印'hello, I am test2'
// step6: console.log('hello, I am test1')
// step7: 主线程执行完毕，进入任务队列当中执行

