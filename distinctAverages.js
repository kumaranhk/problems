// 2465. Number of Distinct Averages

/**
 * @param {number[]} nums
 * @return {number}
 */

var distinctAverages = function (nums) {
    nums.sort((a, b) => a - b);
    const avgs = new Set()
    while (nums.length != 0) {
        const min = nums.shift();
        const max = nums.pop();
        avgs.add((min + max) / 2);
    }
    return avgs.size;
};