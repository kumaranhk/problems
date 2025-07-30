// no. of substring containing all vowels and given number of constants
function countValidSubstrings(word, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = new Map();  // Track vowel occurrences
    let consonantCount = 0;  // Number of consonants
    let left = 0;
    let totalCount = 0;

    for (let right = 0; right < word.length; right++) {
        let char = word[right];

        // Update counts based on character type
        if (vowels.has(char)) {
            vowelCount.set(char, (vowelCount.get(char) || 0) + 1);
        } else {
            consonantCount++;
        }

        // Shrink window if consonants exceed k
        while (consonantCount > k) {
            let leftChar = word[left];
            if (vowels.has(leftChar)) {
                vowelCount.set(leftChar, vowelCount.get(leftChar) - 1);
                if (vowelCount.get(leftChar) === 0) vowelCount.delete(leftChar);
            } else {
                consonantCount--;
            }
            left++;
        }

        // If all vowels are present at least once and consonants count is exactly k
        if (consonantCount === k && ["a", "e", "i", "o", "u"].every(v => vowelCount.has(v))) {
            let tempLeft = left;
            let tempVowelCount = new Map(vowelCount);

            // Count valid substrings starting from `left`
            while (tempLeft <= right && ["a", "e", "i", "o", "u"].every(v => tempVowelCount.has(v))) {
                totalCount++;
                let tempChar = word[tempLeft];
                if (vowels.has(tempChar)) {
                    tempVowelCount.set(tempChar, tempVowelCount.get(tempChar) - 1);
                    if (tempVowelCount.get(tempChar) === 0) tempVowelCount.delete(tempChar);
                }
                tempLeft++;
            }
        }
    }

    return totalCount;
}
