class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map() 

        for(const word of strs){
            const key = word.split('').sort().join('')
            if(map.has(key)){
             map.get(key).push(word)
            }else{
                map.set(key, [word])
            }
        }

        return Array.from(map.values())
    }
}
