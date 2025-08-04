var uncommonFromSentences = function(s1, s2) {
    const map = new Map();
    let i = 0;
    const a1 = s1.split(' ');
    const a2 = s2.split(' ');
    const res = [];
    while(a1.length > i || a2.length > i){
        a1[i] && map.set(a1[i],(map.get(a1[i]) || 0) + 1);
        a2[i] && map.set(a2[i],(map.get(a2[i]) || 0) + 1);
        i++;
    }
    for (let [word,count] of map){
        if (count == 1){
            res.push(word);
        }
    }
    return res;
};
 let s1 = "apple apple", s2 = "banana";
 console.log(uncommonFromSentences(s1,s2));