// 请用console.log打印，通过a和b两个变量组合成以下内容(注意：两句话中间需要换行，单词之间需要用空格进行分割)：
// Welcome to Lexin !
// Let us make the future together !
var a = ["Welcome", "to", "Lexin", "!"];
var b = ["Let", "us", "make", "the", "future", "together", "!"];
function formatArr(...eles) {
    return eles.map(arr => {
        return arr.join(' ')
    })
    .join('\n')
}
console.log(formatArr(a,b))