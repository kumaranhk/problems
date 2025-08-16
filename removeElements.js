// 27. Remove Element in js

var removeElement = function(nums, val) {
    let left = 0;
    let right = 0;
    while (right < nums.length){
        if(nums[right] != val){
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    console.log(nums);
    return left;
};

let nums = [3,2,2,3], val = 3;
// let nums = [0,1,2,2,3,0,4,2], val = 2;
console.log(removeElement(nums,val));