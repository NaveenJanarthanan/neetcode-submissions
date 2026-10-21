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
     * @return {boolean}
     */
    isBalanced(root) {

        var dfs = function(node){
            if(!node){
                return 0
            }



            let leftHeight = dfs(node.left) 
            let rightHeight = dfs(node.right)

            if(leftHeight === -1 || rightHeight === - 1){
                return -1
            }

            if(Math.abs(leftHeight - rightHeight) > 1){
                return -1
            }

            return 1 + Math.max(leftHeight, rightHeight)


        }

        if(dfs(root) === -1){
            return false
        }
        else{
            return true
        }
    }
}
