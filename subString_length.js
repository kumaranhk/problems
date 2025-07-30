var lengthOfLongestSubstring = function(s) {
    let subStringSet = new Set();
    let left = 0;
    let max = 0;
    
    for (let right = 0; right < s.length; right++){
       
       while(subStringSet.has(s[right])){
           subStringSet.delete(s[left]);
           left++;
       }
       
        subStringSet.add(s[right]);
        // if(max < subStringSet.size) max = subStringSet.size;
        max = Math.max(max,(right - left + 1));
    }
    return max;
};

let s = "dvdf";
console.time('label');
console.log('Longest Substring length',lengthOfLongestSubstring(s))
console.timeEnd('label');