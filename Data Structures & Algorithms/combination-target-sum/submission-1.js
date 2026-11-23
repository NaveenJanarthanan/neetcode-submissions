class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let result = [] 
        let subset = []
        var backtrack = function(index, total){
            if(total > target){
                return
            }
            if(total === target){
                result.push([...subset])
                return
            }
            if(index === nums.length){
                return
            }
            subset.push(nums[index])
            backtrack(index, total + nums[index])

            subset.pop();

            backtrack(index + 1, total)


        }

        backtrack(0, 0)

        return result
    }
}
