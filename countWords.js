// 2085. Count Common Words With One Occurrence
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

var countWords = function(words1, words2) {
    let map1 = new Map();
    let map2 = new Map();
    for (let word of words1) {
        map1.set(word, (map1.get(word) || 0) + 1);
    }
    for (let word of words2) {
        map2.set(word, (map2.get(word) || 0) + 1);
    }
    let ans = 0;
    for (let [word, count] of map1) {
        if (count === 1 && map2.get(word) === 1) {
            ans++;
        }
    }
    return ans;
};
let words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
console.log(countWords(words1,words2));