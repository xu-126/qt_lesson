var {counter,obj,changeValue} = require('./node-common.js');

console.log(counter,obj)
changeValue()
console.log(counter,obj)

var a=1;var b=a;b=2;console.log(a)
var aa={}
var bb=aa
bb.name='bbname'
console.log(aa)