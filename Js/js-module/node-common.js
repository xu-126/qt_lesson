console.log(exports === module.exports)
var counter = 3;
var obj = {
    name:'David'
}
function changeValue(){
    counter ++;
    obj.name = 'Tom'
}
module.exports = {
    counter,
    obj,
    changeValue
}
// module.exports.counter = counter