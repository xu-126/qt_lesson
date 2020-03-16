// 输入 1,2,3,4,5,6
// 6为target 两数相加和为target 的 下表之和
// 输出 8
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function solution(input) {
    var arr = input.split(',');
    var arrInt = arr.map(e => parseInt(e));
    var result = 0;
    var target = arrInt.pop();
    // [1,2,3,4,5 , 6]
    for(let i = 0; i < arrInt.length - 1; i++){
        for(let j = i + 1; j < arrInt.length; j++){
            if(arrInt[i] + arrInt[j] == target){
                 // i,j 满足 
                result += (i + j)
            }
        }
    }
    return result;
}
rl.on('line', (line) => {
    console.log(solution(line))
})