class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) { 
        let start = 0 
        let end = 1
        let maxProfit = 0 
        while(end < prices.length){
            let profit = prices[end] - prices[start]
            maxProfit = Math.max(maxProfit, profit)
            if(prices[start] > prices[end]){
                start++ 
            }else{
                end++
            }
        }

        return maxProfit
    }
}
