/**
 * @param {string} s
 * @return {string}
 * @algorithm Sliding Window
 * @description Finds the longest substring where every character appears both in lowercase and uppercase.
 */
var longestNiceSubstring = function (s) {
    if (s.length < 2) {
        return '';
    }
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        set.add(s[i]);
    }

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (set.has(c.toLowerCase()) && set.has(c.toUpperCase())) {
            continue;
        }
        const sub1 = longestNiceSubstring(s.substring(0, i));
        const sub2 = longestNiceSubstring(s.substring(i + 1));
        return sub1.length >= sub2.length ? sub1 : sub2;
    }

    return s;
};