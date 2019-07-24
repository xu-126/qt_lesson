<<<<<<< HEAD
// Math.max()
const IMath = {} //namespace
/**
 * @params:number NaN
 * @return:number 返回最大值 
 */
// 

IMath.max = function(...args){
    // console.log(arguments,arguments.length);
    for(var i=0;i<args.length;i++){
        //类型检测
        if(typeof args[i]!=='number'){
            return NaN;
        }
    }
}
=======
// Math.max()
const IMath = {} //namespace
/**
 * @params:number NaN
 * @return:number 返回最大值 
 */
// 

IMath.max = function(...args){
    // console.log(arguments,arguments.length);
    for(var i=0;i<args.length;i++){
        //类型检测
        if(typeof args[i]!=='number'){
            return NaN;
        }
    }
}
>>>>>>> 5145978b61313a82b79a4143eb066a8ebb09ac17
console.log(IMath.max(...[2,4,3,9]));    