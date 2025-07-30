//sliding window

var findMaxAverage = function(nums, k) {
    if (nums.length < k){
        return 'Invalid input: k is larger than the array length';
    }
    let maxAvg = -Infinity;
    let tempSum = 0;
    for (let i = 0; i < k ; i++){
        tempSum += nums[i];
    }
    maxAvg = tempSum / k;
    console.log(maxAvg,tempSum);
    for(let i = k ; i < nums.length; i++){
        tempSum += nums[i] - nums[i - k];
        console.log(`Current sum: ${tempSum}, Current average: ${tempSum / k}`);
        maxAvg = Math.max(maxAvg, tempSum / k);
    }
    return maxAvg;
};

let nums = [1,12,-5,-6,50,3], k = 4
console.log(findMaxAverage(nums,k));