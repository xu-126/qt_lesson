// w: 重量 val : 价值 capacity: 容量 n: 商品的总件数
function pack(w,val,capacity,n){    
    let T = []
    for(let i = 0 ; i < n ; i++ ) {
        // [ [], [], [] ]
        T[i] = []
        for(let j = 0 ; j <= capacity ; j++) {
            if (j === 0){ // 容量为0
                T[i][j] = 0;
                continue;
            }
            if ( j < w[i]) { //容量小于物品的重量 即 书包无法存放任何商品
                if(i === 0) {
                    T[i][j] = 0
                } else {
                    T[i][j] = T[i - 1][j] // 只放一件商品
                }
                continue;
            }
            if ( i === 0 ) {   // 就只能选第一件商品
                T[i][j] = val[i]
            } else {
                T[i][j] = Math.max(val[i] + T[i - 1][j - w[i]], T[i - 1][j]) // 放两件商品和一件商品价值哪个更大
            }
        }
    }
    // console.log(123,T)
    findValue(w,val,capacity,n,T)
    return T
}
function findValue(w,val,capacity,n,T){
    var i = n - 1, j = capacity;
    while(i > 0 && j > 0) {
        if(T[i][j] != T[i - 1][j]) {
            console.log('选中物品' + i + '重量为' + w[i] ,'价值为' + val[i])
            j = j - w[i];
            i--;
        } else {
            i--;
        }
    }
    if(i === 0){
        if( T[i][j] != 0){
            console.log('选中物品' + i + '重量为' + w[i] ,'价值为' + val[i])
        }
    }
}

var val = [3,4,5],
     w = [2,3,4]
     capacity = 5,
     n = val.length;

     pack(w,val,capacity,n)