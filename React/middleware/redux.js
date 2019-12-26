// redux 的中间件
// 核心：组合
const mid1 = next => action => {
    console.log(1)
    next()
    console.log(2)
}
// mid1(mid2())
// 需要 next
// 指向下一项
// 组合 从右到左 组合完之后
const mid2 = next => action => {
    console.log(3)
    next()
    console.log(4)
}
const mids = [mid1,mid2];

/**
 * mid1() {
 *  console.log(1)
 *  next === mid2() // mid2的返回值
 *  console.log(2)
 * }
 */
// compose 组合完之后 把 mid2 交给 mid1
let fn1 = str => str.split('');
let fn2 = str => str.toLocaleLowerCase()
function compose(...funcs) {
    if(funcs.length === 0 ) {
        return arg => arg
    }
    if(funcs.length === 1 ) {
        return funcs[0]
    }
    return funcs.reduce((a,b) => (...args) => a(b(...args)))
}
const opt = compose(fn1,fn2)
console.log(opt('ABCD'))

const chain = compose(...mids);
/**
 * redux dispatch 只能 dispatch 一个对象 但是有了thunk 能够 dispatch 函数
 * if(action ==== function {
 *  if(action ==== promise) {
 *        执行最原始的 dispach
 *  }
   }
 */
let dispatch = chain(() => {
    console.log('我是最原始的 dispach')
});
dispatch()
