class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map(); 
        let maxFreq = 0 
        let start = 0 
        let end = 0 
        let result = 0

        for(end; end < s.length; end++){

            count.set(s[end], (count.get(s[end]) || 0) + 1)

            maxFreq = Math.max(maxFreq, count.get(s[end]))

            while((end - start + 1) - maxFreq > k){
                count.set(s[start], count.get(s[start]) - 1)
                start++
            }

            result = Math.max(result, end - start + 1)
        }

        return result
    }
}
