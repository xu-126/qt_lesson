// 实现一个render方法 使得可以这样调用
// const year = '2017';
// const month = '09';
// const day = '21';
// const str = render(`${year}-${month}-${day}`)({year,month,day});
// console.log(str); 
// 输出2017-09-21

// const year = '2017';
// const month = '09';
// const day = '21';
// let datas = {year,month,day};
// function render(text) {
//     return function(datas) {
//         for (let i in datas) {
//             text = text.replace('${'+ i + '}',datas[i])   
//         }
//         return text;
//     }
// }
// render('${year}-${month}-${day}');


function render(){
    let str = '${year}-${month}-${day}';
    let reg = /\$\{([a-z]+)\}/g;
    const year = '2017';
    const month = '09';
    const day = '21';
    let obj = {year,day, month}
    str = str.replace(reg, (...rest) => {
        // console.log('reg ' + reg)
        // console.log('rest '+ rest)
        // console.log('rest[1] ' + rest[1])
      return obj[rest[1]]
    })
    console.log(str)
}
render()