// koa 的中间件 
// 处理的核心流程：递归
// 洋葱模型
let middleWare1 = async function(ctx,next) {
    console.log(1)
    await next()
    console.log(2)
}
let middleWare2 = async function(ctx,next) {
    console.log(3)
}
// 1 3 2
let middleWares =[middleWare1,middleWare2];
run();
function run(){
    const dispatch = (index) => {
        const fn = middleWares[index];
        // 处理 next 让他去到下一个中间件
        fn({}, () => {
            dispatch(index + 1)
        })
    }
    /**
     * 一个async方法(ctx) 
     * async(ctx) => {
     *   console.log(1) 
     *   await async(ctx) => {
     *      console.log(3)
     *   }
     * }
     * 
     * 
     */
    dispatch(0)
}
