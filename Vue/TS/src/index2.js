// const add : (a:number , b:number) => 
// number = (a:number , b:number) => a+b
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        this.arr.pop;
    };
    return Stack;
}());
var stack1 = new Stack();
console.log(stack1);
