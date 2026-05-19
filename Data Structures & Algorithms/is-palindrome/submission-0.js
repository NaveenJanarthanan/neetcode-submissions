class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            let l = 0 
    
    const lower = s.toLowerCase();
    const cleaned = lower.replace(/[^a-z0-9]/gi, '')
    console.log(cleaned)
    let r = cleaned.length - 1

    while(l < r){
        if(cleaned[l] === cleaned[r]){
            l++ 
            r--
        }
        else{
            return false
        }
    }

    return true
    }
}
