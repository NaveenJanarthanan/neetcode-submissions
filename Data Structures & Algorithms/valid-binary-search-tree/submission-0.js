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

            if(node === null){
                return true
            }

            if(node.val <= min || node.val >= max){
                return false
            }



            const leftValidate = dfs(node.left, min, node.val)
            const rightValidate = dfs(node.right, node.val, max)


            return leftValidate && rightValidate

        }


        return dfs(root, -Infinity, Infinity)
    }
}
