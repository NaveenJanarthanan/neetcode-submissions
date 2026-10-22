class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let gasSum = 0
        let costSum = 0

        for(let i = 0; i < gas.length; i++){
            gasSum += gas[i]
        }
        for(let i = 0; i < cost.length; i++){
            costSum += cost[i]
        }
        if(gasSum < costSum){
            return -1 
        }

        let start = 0 
        let tank = 0

        for(let i = 0; i < gas.length; i++){
            tank += gas[i] - cost[i]
            if(tank < 0){
                start = i + 1
                tank = 0
            }
        }

        return start
    }
}
