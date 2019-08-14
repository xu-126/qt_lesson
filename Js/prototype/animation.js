function Animl(planet) {
    this.planet = planet;
}
// 函数是JS的一等对象
// 原型对象  return {planet:}
Animl.prototype.getPlanet = function() {
    return this.planet;
}
function Person(name){
    this.name = name;
}
// 人类也在地球
// 原型链跑 animl => Animal.prototype => Object
Person.prototype = new Animl('earth');
Person.prototype.getName = function () {
    return this.name;
}
const person = new Person("三水清");
console.log(person.getPlanet());
console.log(person.getName());
console.log(Person.prototype.__proto__ ===Animl.prototype);