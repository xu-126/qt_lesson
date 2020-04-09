// prototype: 每个函数都有一个 prototype 属性
// 函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型

// __proto__ : 每个JS对象(除了 null )都有一个__proto__属性 这个属性会指向该对象的原型。
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
// 原型的原型
console.log(Person.prototype.__proto__ === Object.prototype) // ture
console.log(Object.prototype.__proto__ === null) // true