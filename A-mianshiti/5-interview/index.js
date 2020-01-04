// a = '34'; b = '12345';
function isContain(a,b) {
    for (let i in b) {
        if (a[0] === b[i]) {
            let tmp = true
            for(let j in a) {
                if(a[j]!== b[~~i + ~~j]) {
                    tmp = false
                }
            }
            if(tmp) {
                return i
            }
        }
    }
    return -1
}
console.log(isContain('4','123456'))