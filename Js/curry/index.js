const curry = require('./b.js');

function checkByRegExp(reg, string){
    return reg.test(string);
}

let checkCellPhone = curry(checkByRegExp)(/^1[3-9]\d{9}$/);
console.log(checkCellPhone('18162102400'));

let checkEmail = curry(checkByRegExp)(/^(\w)+(\.\w+)*@\w+((\.\w+)+)$/);
console.log(checkEmail('2991369090.e_dn@qq.com.cn'));

console.log(checkByRegExp(/^1[3-9]\d{9}$/, '18162102400'));
console.log(checkByRegExp(/^(\w)+(\.\w+)*@\w+((\.\w+)+)$/, '2991369090.e_dn@qq.com.cn'));


