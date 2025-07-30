var flooredSqrt = function(x) {
    if(x <= 1) return x;
    let left = 1; right = x; ans = 0;
    while(left <= right){
        let num = Math.floor((right + left) / 2 );
        let square = num * num;
        if(square == x) return num;
        else if (square <= x) {
            ans = num;
            left = num + 1;
        }
        else right = num - 1;
    }
    return ans;
};

console.log(flooredSqrt(2));

var ceiledSqrt = function(x) {
    if(x <= 1) return x;
    let left = 1; right = x; ans = 0;
    while(left <= right){
        let num = Math.floor((right + left) / 2 );
        let square = num * num;
        if(square == x) return num;
        else if (square >= x) {
            ans = num;
            right = num - 1;
        }
        else left = num + 1;
    }
    return ans;
};

console.log(ceiledSqrt(2));

var isPerfectSquare = function(num) {
    if(num <= 1) return true;
    let left = 2 , right = Math.floor(num/2);
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        if(square === num ){
            return true;
        }else if (square < num){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return false;
};