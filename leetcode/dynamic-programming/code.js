arr = [13,1,2,5,3,8,11,7]
sum = 18
// 在数组中找 两数之和等于 sum 并输出它们的下标   时间复杂度 O(n*n)
function findSum(arr,sum){
    for(let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length ; j++) {
            if(arr[i] + arr[j] === sum) {
                console.log(i,j,arr[i],arr[j])
            }
        }
    }
}
findSum(arr,sum)

// 时间复杂度为O(n)
function findSum1(){
    let obj = {
        // 5: 0,
        // 17: 1,
    }
    arr.forEach((v,i) => {
        // console.log(v,i)
        if(String(v) in obj) {
            console.log('找到了',obj[v],i)
        }
        obj[sum - v] = i
    })
}
findSum1(arr,sum)