// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let bracket of s) {
        if (bracket == '(' || bracket == '{' || bracket == '[') {
            stack.push(bracket);
        } else {
            if (stack.pop() !== map[bracket]) return false;
        }
    }
    return stack.length === 0;
};