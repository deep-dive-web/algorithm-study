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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root.left || root.right) {
    return traversal(root.left, root.right);
  } else {
    return true;
  }
};

const traversal = (left, right) => {
  if (left && right) {
    // 비교 값이 다르므로 false
    if (left.val !== right.val) return false;
  } else if (left || right) {
    // 둘중 하나가 null이 아니면 값이 다르므로 false
    return false;
  }

  if (left.left || right.right) {
    const result = traversal(left.left, right.right);
    if (!result) return result;
  }

  if (left.right || right.left) {
    const result = traversal(left.right, right.left);
    if (!result) return result;
  }

  return true;
};
