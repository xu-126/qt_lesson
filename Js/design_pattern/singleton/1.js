var getNum;
function getCounter(){
    var n = 1;
    console.log('外部上');
    return function(){
        console.log('内部');
        return n++;
    }
}
getNum = getCounter();
console.log(getNum());
console.log(getNum());
console.log(getNum());