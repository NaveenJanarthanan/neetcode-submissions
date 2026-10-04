class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map() 

      
        for(const num of nums){
            if(map.has(num)){
                return true 
            }else{
                map.set(num, map.get(num) + 1 || 1)
            }
        }
        return false
    }
}
