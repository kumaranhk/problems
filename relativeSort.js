var relativeSortArray = function(arr1, arr2) {
    let res = [];
    for (let num of arr2){
        res.push(...arr1.filter(number => num === number));
        arr1 = arr1.filter(number => num !== number);
    }
    if (arr1.length){
        res.push(...arr1.sort((a,b) => a - b));
    }
    return res;
};
// let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
let arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6];
console.log(relativeSortArray(arr1,arr2));

//optimised version

/**
 * Sorts arr1 by the order of arr2; extras in ascending order
 *
 * @param {number[]} arr1 - Array to sort
 * @param {number[]} arr2 - Reference order
 *
 * @returns {number[]} - Sorted array
 */
const relativeSortArray = (arr1, arr2) => {
    // Create a mapping object to store the index of each element in arr2
    const orderMap = {}

    // Populate the mapping object with arr2 values and their indices (offset by 1 to avoid 0 as falsy)
    for (let i = 0; i < arr2.length; i++) orderMap[arr2[i]] = i + 1

    // Sort arr1 based on the custom order defined in arr2
    return arr1.sort((a, b) => {
        // If both elements exist in arr2, sort by their mapped order
        if (orderMap[a] && orderMap[b]) return orderMap[a] - orderMap[b]
        // If neither element exists in arr2, sort numerically in ascending order
        if (!orderMap[a] && !orderMap[b]) return a - b
        // If only 'a' does not exist in arr2, place it after 'b'
        if (!orderMap[a]) return 1

        // If only 'b' does not exist in arr2, place 'a' before 'b'
        return -1
    })
}