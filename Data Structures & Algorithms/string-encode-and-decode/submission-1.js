class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''

        for(const str of strs){
            const length = String(str.length)
            result += length + '#' + str 
        }



        return result 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let len = 0
        let result = []
        let i = 0
        while(i < str.length){
            let j = i 
            while(str[j] !== '#'){
                j++
                len += str[i]
                i++
            }
            len = Number(len)
            i = j + 1
            j = i + len
            result.push(str.substring(i, j))
            i = j
            len = 0
        }

        return result
    }
}
