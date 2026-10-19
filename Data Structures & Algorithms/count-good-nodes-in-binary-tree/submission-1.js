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
     * @return {number}
     */
    goodNodes(root) {
        if(!root){
            return 0
        }

        let queue = [[root, root.val]]

        let count = 0
        while(queue.length > 0){
            const levelSize = queue.length

            for(let i = 0; i < levelSize; i++){
                let [curr, max] = queue.shift()

                if(curr.val >= max){
                    count++
                }
                max = Math.max(max, curr.val)
                if(curr.left){
                    queue.push([curr.left, max])
                }
                if(curr.right){
                    queue.push([curr.right, max])
                }

            }
        }

        return count
    }
}
