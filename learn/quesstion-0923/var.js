console.log(a)
var a = 10;    
function a() {
    console.log(123)
}
console.log(a)
// function 声明和赋值都会提升
// var 声明 提升 赋值不会
// function a
// var a
// console.log()
// a=10
var x = 1,
      y = 0,
      z = 0;
    function add(x) {
      return (x = x + 1);
    }
    y = add(x); 
    console.log(y)
    function add(x) {
      return (x = x + 3);
    }
    z = add(x); 
    console.log(z);
    console.log(x);

    // 函数声明
    function foo(a){
        a=100;
    }
    // 函数表达式
    var foo2 =function foo(){

    }
    // var foo2
    // foo2()
    // foo2= function()
