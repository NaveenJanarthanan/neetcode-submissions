class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subset = []
        let result = []
        var backtrack = function(index){
            if(index === nums.length){
                result.push([...subset])
                return
            }

            subset.push(nums[index])
            backtrack(index + 1)

            subset.pop();

            backtrack(index + 1)
        }
        backtrack(0)
        return result
        
    }
}
