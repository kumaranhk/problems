// 2264. Largest 3-Same-Digit Number in String

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = "";
    for (let i = 2; i < num.length; i++) {
        if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
            const subString = num[i].repeat(3);
            if (subString > max) {
                max = subString;
            }
        }
    }
    return max;
};
