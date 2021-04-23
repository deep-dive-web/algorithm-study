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
var isCousins = function (root, x, y) {
  if (root.val === x || root.val === y) return false;

  let xParent = 0;
  let yParent = 0;
  const queue = [root, null];

  while (queue.length) {
    node = queue.shift();
    if (node === null) {// 한 줄 완료됨
      if (xParent || yParent) return false;
      queue.push(null);
      continue;
    }

    if (node.left) {
      queue.push(node.left);
      if (node.left.val === x) xParent = node.val;
      if (node.left.val === y) yParent = node.val;
    }
    if (node.right) {
      queue.push(node.right);
      if (node.right.val === x) xParent = node.val;
    }
    if (xParent && yParent) return xParent !== yParent;
  }
};
