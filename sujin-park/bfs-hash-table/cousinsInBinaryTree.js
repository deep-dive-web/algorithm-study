/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 993. Cousins in Binary Tree
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const pushNode = (node) => {
  const nextTree = [];
  if (node.left) nextTree.push(node.left);
  if (node.right) nextTree.push(node.right);
  
  return nextTree;
}
          
const isCousins = function(root, x, y) {
  const needVisit = [root];
  
  while (needVisit.length) {
      if (needVisit.find((node) => x === node.val) && needVisit.find((node) => y === node.val)) {
          result = true;
      }
      
      const size = needVisit.length;
      for (let i = 0; i < size; i++) {
          const node = needVisit.shift();
          
          if (node.left && node.right) {
              const hasSameParent = (node.left.val === x && node.right.val === y) || (node.right.val === x && node.left.val === y);
              
              if (hasSameParent) return false;
          }
          
          const nextTree = pushNode(node);
          if (nextTree.length) {
              needVisit.push(...nextTree);    
          }
          
      }
  }
  
  return false;
}
