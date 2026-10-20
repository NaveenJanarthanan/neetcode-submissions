class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rowSet = Array.from({length: 9}, ()=> new Set())
        const colSet = Array.from({length: 9}, ()=> new Set())
        const boxes = Array.from({length: 9}, ()=> new Set())

        let rows = board.length - 1 
        let cols = board[0].length - 1 


        for(let r = 0; r <= rows; r++){
            for(let c = 0; c <= cols; c++){
                if(board[r][c] === "."){
                    continue
                }

                let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)

                if(rowSet[r].has(board[r][c]) || colSet[c].has(board[r][c]) || boxes[boxIndex].has(board[r][c])){
                    return false
                }

                rowSet[r].add(board[r][c])
                colSet[c].add(board[r][c])
                boxes[boxIndex].add(board[r][c])

            }
        }

        return true
    }
}
