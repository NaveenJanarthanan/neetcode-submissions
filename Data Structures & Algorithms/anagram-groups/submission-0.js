class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map() 

        for(const word of strs){
            let sortedKey = word.split('').sort().join('');
            if(map.has(sortedKey)){
                map.get(sortedKey).push(word)
            }
            else{
                map.set(sortedKey, [word])
            }
        }

  
        return Array.from(map.values())
    }
}
