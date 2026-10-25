class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let len = s.length
        let end = 0 
        let start = 0  
        let map = new Map()
        let count = 0 

        for(end; end < s.length; end++){
            while(map.has(s[end])){
                map.delete(s[start])
                start++

            }
            map.set(s[end], 1)
            count = Math.max(count, end - start + 1)
        }
        return count
    }
}