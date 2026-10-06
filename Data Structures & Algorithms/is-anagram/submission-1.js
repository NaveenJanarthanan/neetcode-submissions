class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let mapS = new Map()
        let mapT = new Map()
        if(s.length !== t.length){
            return false
        }
        for(const letters of s){
            if(mapS.has(letters)){
                mapS.set(letters, mapS.get(letters) + 1)
            }else{
                mapS.set(letters, 1)
            }
        }

        for(const letters of t){
            if(mapT.has(letters)){
                mapT.set(letters, mapT.get(letters) + 1)
            }else{
                mapT.set(letters, 1)
            }
        }

        for(let i = 0; i < s.length; i++){
            if(mapS.has(s[i]) === mapT.has(s[i])){
                if(mapS.get(s[i]) !== mapT.get(s[i])){
                    return false
                }
            }else{
                return false
            }
        }
        return true
    }
}
