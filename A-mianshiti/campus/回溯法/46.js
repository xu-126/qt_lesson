// 利用回溯法 全排列 [1,2,3]
var backtrack =function(nums,templist,list) {
    if (templist.length === nums.length) {
        // 组合好一次结果
        list.push([...templist]);
        // 回溯（回到上一级）
        return false; 
    }
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (templist.includes(num)) continue;   // 避免重复的数字
        templist.push(num);
        backtrack(nums,templist,list);
        templist.pop();
    }
}
var permute = function(nums) {
    var list = [];
    backtrack(nums,[],list)
    return list;
};