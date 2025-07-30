// Using binary search

function isPerfectSquare(num) {
    if (num < 2) return true;  // 0 and 1 are perfect squares

    let left = 2, right = Math.floor(num / 2);
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === num) return true;
        else if (square < num) left = mid + 1;
        else right = mid - 1;
    }
    
    return false;  // No perfect square found
}

// Example usage:
console.log(isPerfectSquare(49));  // true (7 * 7 = 49)
console.log(isPerfectSquare(50));  // false

// simple solution:
// Number.isInteger(Math.sqrt(num));