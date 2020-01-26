var removeDuplicates = function (nums) {
    const size = nums.length
    let slowP = 0 // 慢指针
    for(let fastP = 0; fastP < size; fastP++) {        
        if (nums[slowP] !== nums[fastP]) {
            slowP++  // 快慢指针的值不一样则慢指针往前移
            nums[slowP] = nums[fastP] // 设置每个位置 不重复的数
        }
    }
    return slowP + 1
}
console.log(removeDuplicates([1,1,2]))