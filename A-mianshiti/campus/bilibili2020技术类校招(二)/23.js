const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const maxLine = 2
let input = [];
function solution(input) {
    let arr = input[0].split(' ')
    arr.pop();
    let len = arr.length;
    let k = parseInt(input[1]);
    const q = Math.floor(len / k)
    for (let i = 0; i < Math.floor(len / k); i++) {
        let left = i * k;
        let right = (i * k) + k - 1;
        while(left < right) {
            [ arr[left] , arr[right] ] = [ arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('->')
}

rl.on('line', (line) => {
    input.push(line);
    if(input.length === maxLine){
        console.log(solution(input));
        rl.close();
    }
})