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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        

        var dfs = function(p, q){
            if(!p && !q){
                return true
            }

            if(!p || !q || p.val !== q.val){
                return false

            }

            let right = dfs(p.right, q.right)
            let left = dfs(p.left, q.left)


            return left && right

        }


        return dfs(p, q)
    }
}
