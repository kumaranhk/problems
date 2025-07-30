function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);  // Find the middle index
        
        if (arr[mid] === target) {
            return mid;  // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1;  // Discard the left half
        } else {
            right = mid - 1;  // Discard the right half
        }
    }

    return -1;  // Target not found
}

// Example usage:
let array = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(array, 7));  // Output: 3 (index of 7)
console.log(binarySearch(array, 4));  // Output: -1 (4 is not in the array)
