/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 1안 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return traversal(root, 0);
};

const traversal = (node, count) => {
    if(!node) return count;
    return Math.max(
        traversal(node.left, count + 1),
        traversal(node.right, count + 1)
    );
}

/**
 * 2안 
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    return root ? Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1) : 0;
};