/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * Leetcode - 101. Symmetric Tree
 * @param {TreeNode} leftTree
 * @param {TreeNode} rightTree
 * @return {boolean}
 */
const isMirrorNode = (leftTree, rightTree) => {
  if (leftTree === null && rightTree === null) return true;
  if (leftTree === null || rightTree === null) return false;
  
  return leftTree.val === rightTree.val && isMirrorNode(rightTree.left, leftTree.right) && isMirrorNode(leftTree.right, rightTree.left);
}

/**
* @param {TreeNode} root
* @return {boolean}
*/
const isSymmetric = function(root) {
  return isMirrorNode(root, root);
};
