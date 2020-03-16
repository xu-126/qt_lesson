// 手动实现 promise.all
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(3)
    }, 2000);
})
// 返回 promise
Promise.all1 = function (promises) {
    let result = [];
    return new Promise((resolve,reject) => {
        promises.forEach(promise => {
            promise.then(res => {
                result.push(res);
                if (result.length === promises.length) {
                    resolve(result)
                }
            })
            .catch(err => {
                reject(err)
            })
        })
    })
}
Promise.all1([p1,p2,p3]).then(console.log)