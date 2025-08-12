//2562. Find the Array Concatenation Value

var findTheArrayConcVal = function(nums) {
    if (nums.length == 1) return nums[0];
    let ans = 0;
    let left = 0;
    let right = nums.length - 1
    while (left < right){
        ans += parseInt(nums[left].toString() + nums[right].toString());
        console.log(ans);
        left++;
        right--;
    }
    if (left === right) {
        ans += nums[left];
    }
    return ans;
};
let nums = [7,52,2,4];
console.log(findTheArrayConcVal(nums));