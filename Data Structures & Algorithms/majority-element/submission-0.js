class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        const n = nums.length - 1 
        const majority = n/2
        let map = new Map();

        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            }else{
                map.set(num, 1)
            }
        }

        for(const [key, value] of map){
            if(value > majority){
                return key
            }
        }
    }
}
