class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        let buckets = Array.from({length: nums.length + 1}, ()=>[])
        let result = []

        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            }else{
                map.set(num, 1)
            }
        }

        for(const [num, frequency] of map){
            buckets[frequency].push(num)

        }

        for(let i = buckets.length - 1; i >= 0; i--){
            
            for(const num of buckets[i]){
                result.push(num)

                if(result.length === k){
                    return result
                }
            }
        }

        
    }
}
