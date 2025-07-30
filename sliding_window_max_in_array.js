var maxSlidingWindow = function (nums, k) {
    let result = [];
    let deque = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        //condition to remove the deque's first element
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        //loop for removing the smaller element before pushing the larger one newly        
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        //adding the index to the deque
        deque.push(i);

        // condition to neglect first k indexes 
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
};