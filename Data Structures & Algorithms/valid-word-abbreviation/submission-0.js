class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let n = word.length
        let m = abbr.length
        let i = 0
        let j = 0 

        while(i < n && j < m){
            if(abbr[j] === '0') return false

            if(isNaN(abbr[j])){
                if(word[i] !== abbr[j]){
                    return false 
                }else{
                i++
                j++
                }
            }else{
                let len = 0
                while(j < m && !isNaN(abbr[j]) && abbr[j] !== ' '){
                    len = len * 10 + parseInt(abbr[j]);
                    j++;
                }
                i += len
            }
        }

        return i === n && j === m

    }
}
