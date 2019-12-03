// import { Col } from 'vant';

// // const person = {}
// // person.name = 'xiaomuzhu'
// // person.age = 20
// // 类型断言
// // interface Person {
// //     name: string,
// //     age: number
// // }
// // const person = {} as Person
// // person.name = 'xiaomuzhu'
// // person.age = 20

// // const person1 : Person = {
// //     name : 'xiaomuzhu',
// //     age : 20
// // }

// // // 双重断言
// // const person2 = 'xiaomuzhu' as any as Person
// // 类型守卫
// class Person {
//     name= 'xjy'
//     age = 18
// }
// class Animal {
//     name = 'petty'
//     color = 'pink'
// }
// function getSomething(arg: Person | Animal){
//     if(arg instanceof Animal){
//         console.log(arg.color)
//     }
//     if(arg instanceof Person){
//         console.log(arg.name)
//     }
//     if('age' in arg){
//         console.log(arg.age)
//     }
// }

// // 字面量类型守卫
// type Foo = {
//     kind : 'foo' //字面量
//     foo : number 
// }
// type Bar = {
//     kind : 'bar' //字面量
//     bar : number 
// }
// function doStuff(arg:Foo | Bar){
//     if (arg.kind === 'foo'){
//         console.log(arg.foo)
//     } else {
//         console.log(arg.bar)
//     }
// }