 // 纯函数-副作用
 function sum(a,b) {
     return a + b
 }
 // i/o dom Math.ramdon 
 //React 生命周期 的 render 阶段 和 commit 阶段
 // render 阶段 不连续 中止 重新运行 所以不推荐在这个阶段有副作用
 // commit 阶段 连续的 一次运行完