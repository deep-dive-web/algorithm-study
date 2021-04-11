package com.janjanee.algo.datastructure.tree_heap;

import com.janjanee.infthejavatest.TreeNode;

import java.util.LinkedList;
import java.util.Queue;

public class MaximumDepth {
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;

        Queue<TreeNode> queue = new LinkedList<>();

        queue.add(root);

        int depth = 0;

        while (!queue.isEmpty()) {
            int size = queue.size();
            depth++;

            while (size-- > 0) {
                TreeNode node = queue.remove();
                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }
        }

        return depth;
    }

    public int maxDepthRecursion(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

}
