const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const maxLine = 2
let input = [];
function isRun(year) {
    if(year % 400 === 0) return true;
    return year % 4 === 0 && year % 100 !== 0;
}
function solution(input) {
    const arr = input.split('-')
    const year = parseInt(arr[0]);
    const month = parseInt(arr[1]);
    const day = parseInt(arr[2]);
    const map = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    let res = 0;
    if(isRun(year)) {
        map[2] = 29;
    }
    for (let i = 1; i<  month; i++ ) {
        res += map[i];
    }
    res += day;
    return res;
}

rl.on('line', (line) => {
    console.log(solution(line));
})