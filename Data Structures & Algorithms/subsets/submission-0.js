class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [] 

        function dfs(index, current){
            
            if(index === nums.length){
                result.push([...current])
                return
            }
            current.push(nums[index]); 
            dfs(index + 1, current);   

            current.pop();              
            dfs(index + 1, current);   

        }

        dfs(0, [])

        return result

    }
}
