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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  traversal(root1, root2);
  return root1;
};

const traversal = (root1, root2) => {
  if (!root1 && !root2) return;
  root1.val += root2 ? root2.val : 0;

  if (!root2) {
    return;
  }

  if (!root1.left) {
    root1.left = root2.left;
    root2.left = null;
  } else {
    traversal(root1.left, root2.left);
  }

  if (!root1.right) {
    root1.right = root2.right;
    root2.right = null;
  } else {
    traversal(root1.right, root2.right);
  }
};

/**
 * 2안
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) {
    // 각자의 맨 첫번째 root의 결과에 유효한 리턴값, 그 이외에는 return으로 끊는 용도
    return root1 || root2;
  }
  root1.val += root2.val;

  if (!root1.left) {
    root1.left = root2.left;
    root2.left = null;
  } else {
    mergeTrees(root1.left, root2.left);
  }

  if (!root1.right) {
    root1.right = root2.right;
    root2.right = null;
  } else {
    mergeTrees(root1.right, root2.right);
  }

  return root1;
};


/**
 * 3안
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function (root1, root2) {
    if(!root1 || !root2) {
        return root1 || root2;
    }
    root1.val += root2.val;   

    root1.left = mergeTrees(root1.left, root2.left);        
    root1.right = mergeTrees(root1.right, root2.right);
    
    return root1;
};