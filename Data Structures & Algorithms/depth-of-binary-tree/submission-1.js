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
    maxDepth(root) {

        var dfs = function(root){
            if(!root){
                return 0
            }


            let left = dfs(root.left) + 1
            let right = dfs(root.right) + 1

            return Math.max(left, right)
        }

        return dfs(root)
    }

    
}
