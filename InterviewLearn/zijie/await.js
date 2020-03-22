console.log('script start')

async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()

setTimeout(function() {
    console.log('setTimeout')
}, 0)

new Promise(resolve => {
    console.log('Promise')
    resolve()
})
.then(function() {
    console.log('promise1')
})
.then(function() {
    console.log('promise2')
})

console.log('script end')
// 执行代码，输出script start。
// 执行async1(),会调用async2(),然后输出async2 end,此时将会保留async1函数的上下文，然后跳出async1函数。
// 遇到setTimeout，产生一个宏任务
// 执行Promise，输出Promise。遇到then，产生第一个微任务
// 继续执行代码，输出script end
// 代码逻辑执行完毕(当前宏任务执行完毕)，开始执行当前宏任务产生的微任务队列，输出promise1，该微任务遇到then，产生一个新的微任务
// 执行产生的微任务，输出promise2,当前微任务队列执行完毕。执行权回到async1
// 执行await,实际上会产生一个promise返回，即执行完成，执行await后面的语句，输出async1 end
// 最后，执行下一个宏任务，即执行setTimeout，输出setTimeout

 // 旧版输出如下，但是请继续看完本文下面的注意那里，新版有改动
// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout
