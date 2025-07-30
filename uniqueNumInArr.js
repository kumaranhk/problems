//brute force with time and space complexity as 0(n) and 0(n)
var singleNumber = function(nums) {
    const map = new Map();
    for(let num of nums){
        map.set(num,(map.get(num) || 0) + 1);
    }
    for(let [key,val] of map){
        if(val === 1){
            return key;
        }
    }
};


//Optimzed approach with time complexity as 0(n) and space complexity as 0(1)
var singleNumber = function(nums) {
    let ans = 0;
    for(let num of nums){
        ans ^= num;
    }
    return ans;
};
