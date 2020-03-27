// 捕获没有 catch 的 promise异常
window.addEventListener("unhandledrejection",function (e) {
    e.preventDefault();
    console.log(e.reason);
})
new Promise((resolve) => {
    resolve(123);
}).then(() => {
    throw "我来给你错误"
})
// .catch
