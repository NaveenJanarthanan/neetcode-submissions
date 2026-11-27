class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [] 
        let subset = []
        candidates = candidates.sort((a,b) => a - b)
        var backtrack = function(index, total){
            if(total === target){
                result.push([...subset])
                return
            }
            if(total > target){
                return
            }
            if(index === candidates.length){
                return
            }
            subset.push(candidates[index])
            backtrack(index + 1, total + candidates[index])

            subset.pop()

            let next = index + 1;

            while (next < candidates.length && candidates[next] === candidates[index]) {
                next++;
            }
            backtrack(next, total)

        }

        backtrack(0, 0)
        return result
    }
}
