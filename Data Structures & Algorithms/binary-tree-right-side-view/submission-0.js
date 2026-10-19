/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root){
            return []
        }
        const queue = [root]
        let result = []

        while(queue.length > 0){
            const levelSize = queue.length
            let currentLevel = []
            
            for(let i = 0; i < levelSize; i++){
                let node = queue.shift()
                currentLevel.push(node.val)

                if(node.left){
                    queue.push(node.left)
                  
                }
                if(node.right){
                    queue.push(node.right)
                   
                }
            }

            result.push(currentLevel.pop())
        }

        return result

}
}
