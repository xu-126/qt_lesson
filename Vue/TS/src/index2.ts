import Second from '@/components/Second.vue';
import { extend } from '../../vue-next-master/vue-next-master/packages/shared/src/index';
import child1 from '@/components/common/child1.vue';
// const add : (a:number , b:number) => 
// number = (a:number , b:number) => a+b

// //...rest 由number组成的数组
// const adda = (a:number , ...rest:number[])=> rest.reduce((a,b) =>a + b)


//重载
// interface Direction {
//     top: number
//     right: number
//     bottom: number
//     left: number
// }

// function assigned(all:number):Direction
// function assigned(topAndBottom :number,leftAndRight: number):Direction
// function assigned(top:number,left: number,bottom: number,right:number):Direction
// //代码实现函数不可被调用
// function assigned (a: number, b?: number,c?:number, d?:any): Direction{
//     if(b === undefined && c === undefined && d === undefined){
//         b = c = d = a
//     }else if(c === undefined && d ===undefined){
//         c = a
//         d = b
//     }
//     return {
//         top : a ,
//         right : b,
//         bottom: c,
//         lefe:d
//     }
// }

// assigned(1)
// assigned(1,2)
// assigned(1,2,3,4)


// // function returnItem(para: number) :number{
// //     return para
// // }
// //泛型
// // function returnItem<T>(para:T):T {
// //     return para
// // }
// function swap<T,U>(tuple:[T,U]):[U,T]{
//     return [tuple[1],tuple[0]]
// }
// // 泛型变量
// function getArrayLength<T>(arg: Array<T>):Array<T> {
//     console.log((arg as Array<any>).length)
//     return arg
// }
// //泛型接口
// interface ReturnItemFn<T>{
//     (para: T):T
// }
// const returnItem:ReturnItemFn<number> = para => para
//泛型类
// class Stack <T>{
//     private arr:T[] = []

//     public push(item : T){
//         this.arr.push(item)
//     }

//     public pop(){
//         this.arr.pop
//     }
// }
//泛型约束
// type Params = number | string 
// class Stack <T extends Params>{
//     private arr:T[] = []

//     public push(item : T){
//         this.arr.push(item)
//     }

//     public pop(){
//         this.arr.pop
//     }
// }
// const stack1 = new Stack<string>()
// console.log(stack1)
interface FirstInterFace {
    doSomething():number
}
interface SecondInterFace {
    doSomethingElse():string
}
// class Demo<T extends FirstInterFace,T extends SecondInterFace>{
//     private test: T

//     useT(){
//         this.test.doSomething()
//         this.test.doSomethingElse()
//     }
// }
// interface ChildInterface extends FirstInterFace,SecondInterFace{

// }
// class Demo<T extends ChildInterface>{
//     private test: T

//     useT(){
//         this.test.doSomething()
//         this.test.doSomethingElse()
//     }
// }
// new
// function factory<T>(type:{new(): T}):T {
//     return new type()
// }
