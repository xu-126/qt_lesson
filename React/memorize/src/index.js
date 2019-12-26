import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 纯函数 同样的输入会有同样的输出
let map = new Map();
function  add(a,b) {
    let key = JSON.stringify(Array.from(arguments));
    if (map.get(key)) return map.get(key)
    let res =  a + b;
    map.set(key,res);
    return res
}
function reduce(c,d) {
    return c - d
}

// 高阶函数 函数是一等公民 

function memorize (fn) {
    let map1 = new Map();
    // 返回有缓存功能的函数
    return function (...args) {
        let key = JSON.stringify(args);
        if(map1.get(key)) return map1.get(key);
        let res = fn(...args);
        map1.set(key,res);
        // console.log(res)
        return res;
        
    }
}
const mReduce= memorize(reduce)
mReduce(3,2)
mReduce(3,2,undefined)
mReduce(3,2,null)