/**
 * Leetcode -993. Cousins in Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const queue = [root];

  while(queue.length) {
    const size = queue.length;
    let foundX = false;
    let foundY = false;

    for (let i = 0; i < queue.length; i++) {
      const {left, right, val} = queue.shift();

      if (left && right) {
        if (
          (left.val === x && right.val === y) ||
          (left.val === y && right.val === x)
        )
        return false;
      }

      if (val === x) foundX = true;
      if (val === y) foundY = true;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    if (foundX && foundY) {
      return true;
    }
  }

  return false;
};