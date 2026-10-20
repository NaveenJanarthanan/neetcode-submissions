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
    isValidBST(root) {


        var dfs = function(node, min, max){
            if(!node){
                return true
            }

            if(node.val <= min || node.val >= max){
                return false
            }


            let leftValid = dfs(node.left, min, node.val)
            let rightValid = dfs(node.right, node.val, max)


            return leftValid && rightValid

        }


        return dfs(root, -Infinity, Infinity)
    }
}
