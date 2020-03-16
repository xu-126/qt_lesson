// 给定已旋转的排序数组求最小值  12345  34512
function findMin(nums) {
    let len = nums.length;
    if(len == 0 ) return 0;
    let low = 0, high = len - 1; 
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] < nums[high]) {
            high = mid;
        } else if (nums[mid] === nums[high]) {
            low = low + 1; // high = high - 1;
        } else {
            low = mid + 1;
        }
    }
    return nums[low];
}