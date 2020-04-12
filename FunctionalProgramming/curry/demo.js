// 柯里化（curry）
// curry 的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

// 这里我们定义了一个 add 函数，它接受一个参数并返回一个新的函数。调用 add 之后，返回的函数就通过闭包的方式记住了 add 的第一个参数。
var add = function(x) {
    return function(y) {
      return x + y;
    };
};
var curry = require('lodash').curry;
var match = curry(function(what, str) {
    return str.match(what);
});
match(/\s+/g, "hello world");
// [ ' ' ]

var replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement);
});
var hasSpaces = match(/\s+/g);
// function(x) { return x.match(/\s+/g) }
// 这里表明的是一种“预加载”函数的能力，通过传递一到两个参数调用函数，就能得到一个记住了这些参数的新函数。
hasSpaces("hello world");
// [ ' ' ]
hasSpaces("spaceless");
// null

// ================================================
// 默认使用 ramda 这个库来把函数转为 curry 函数
var _ = require('ramda')

// 练习 1
// 通过局部调用（partial apply）移除所有参数
var words = function(str) {
    return split('',str)
}
// =>
var words = split(' ')
// 练习 1a
// 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组
var sentences = undefined;
// =>
var sentences = map(words)

// 练习 2
// 通过局部调用（partial apply）移除所有参数
var filterQs = function(xs) {
    return filter(function(x){ return match(/q/i, x);  }, xs);
  };
// =>
var filterQs = filter(match(/q/i))

// 练习 3
// 使用帮助函数 `_keepHighest` 重构 `max` 使之成为 curry 函数
// 无须改动:
var _keepHighest = function(x,y){ return x >= y ? x : y; };
// 重构这段代码:
var max = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};
// =>
var max = _.curry(_keepHighest,--Infinity)

// 练习 4
// 包裹数组的 `slice` 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
var slice = undefined;
// =>
var slice = _.curry(function(start,end,xs){ return xs.slice(start,end)})

module.exports = { words: words,
    sentences: sentences,
    filterQs: filterQs,
    max: max,
    slice: slice,
};