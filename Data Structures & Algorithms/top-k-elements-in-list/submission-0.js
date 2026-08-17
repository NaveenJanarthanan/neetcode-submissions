class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            }
            else{
                map.set(num, 1)
            }
        }

        const frequentElements = [...map.entries()];
        frequentElements.sort((a, b) => b[1] - a[1])
        let result = []
        for(let i = 0; i < k; i++){
            result.push(frequentElements[i][0])

        }
        return result


    }
}
