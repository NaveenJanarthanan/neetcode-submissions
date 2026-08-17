class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //loop through nums
        //check if nums[i] is in map 
        //
        let map = new Map() 

        for(let i = 0; i < nums.length; i++){
            let newTarget = target - nums[i]
            if(map.has(newTarget)){
                return [i, map.get(newTarget)]
            }
            else{
                map.set(nums[i], i)
            }

        }

    }
}
