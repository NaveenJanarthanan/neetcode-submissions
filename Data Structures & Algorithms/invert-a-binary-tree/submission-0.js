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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root){
            return null
        }

        let l = this.invertTree(root.left)
        let r = this.invertTree(root.right)
        root.left = r 
        root.right = l

        return root
    }
}
