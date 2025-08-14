// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let i = 0; // pointer to track the index of last unique number
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

// let nums = [1,1,2];
let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));
console.log(nums);