class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rows = matrix.length 
        let cols = matrix[0].length 
        
        let zeroRows = new Set();
        let zeroCols = new Set();

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(matrix[r][c] === 0){
                    zeroRows.add(r)
                    zeroCols.add(c)
                }
            }
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(zeroRows.has(r) || zeroCols.has(c)){
                    matrix[r][c] = 0
                }
            }
        }

        return matrix
    }
}
