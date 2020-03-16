const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function solution(s) {
    var rightSymbols = []; // 定义存放右括号的数组
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            rightSymbols.push(")");
        } else if (s[i] == "{") {
            rightSymbols.push("}");
        } else if (s[i] == "[") {
            rightSymbols.push("]");
        } else if ( s[i] != rightSymbols.pop()) { // 取出栈顶元素和当前字符比较
            return false;
        }
    }
    return !rightSymbols.length; // 如果还有未匹配的括号就返回 false
}
rl.on('line', (line) => {
    console.log(solution(line))
})