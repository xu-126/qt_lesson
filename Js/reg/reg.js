//一个字符
// let phoneReg = /^1[3-9][0-9]{9}$/     
// console.log(phoneReg.test("18070415106"));

let phoneReg = /(1[3-9][0-9])[0-9]{8}/
let str = "我的号码是18070415106,收下吧";
// console.log(phoneReg.test(str)); //true
// console.log(phoneReg.exec(str));
// 得到手机号，判断服务商
// console.log(str.match(phoneReg)[1]); //180

// 1264930795@qq.com
let emailReg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;
console.log(emailReg.test("1264930795@qq.com"));
