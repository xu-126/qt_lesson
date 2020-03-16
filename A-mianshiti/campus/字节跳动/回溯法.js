// getAllCombine([4,5,6])
// getAllCombine([3,4,5,6])
// getAllCombine([2,3,4,5,6])
function getAllCombine(array, n, sum, temp) { 
    if (temp.length === n) {
        if (temp.reduce((a, b) => a + b) === sum) {
            return temp
        }
        return false;
    }
    // 递归
    for (let i = 0; i < array.length; i++) {
        const current = array.shift();
        temp.push(current)
        let result = getAllCombine(array, n, sum, temp);
        if (result) {
            return result
        }
        temp.pop();
        array.push(current);
    }
}
console.log(getAllCombine([1,2,3,4,5,6],3,15,[]))