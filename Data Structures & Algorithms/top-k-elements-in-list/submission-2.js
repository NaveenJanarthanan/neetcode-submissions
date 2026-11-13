class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let buckets = Array.from({length: nums.length + 1}, () => [])
        let map = new Map()
        let result = []

        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            }else{
                map.set(num, 1)
            }
        }

        for(const [key, value] of map){
            buckets[value].push(key)
        }

        for(let i = buckets.length - 1; i >= 0; i--){
            
            for(const num of buckets[i]){
                result.push(num)
            }
        }

        return result.splice(0, k)
    }
}
