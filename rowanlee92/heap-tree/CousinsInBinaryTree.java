package com.janjanee.algo.tree_heap;


import java.util.LinkedList;
import java.util.Queue;

public class CousinsInBinaryTree {

    public static boolean isCousins(TreeNode root, int x, int y) {
        Queue<TreeNode> queue = new LinkedList<>();

        queue.add(root);

        int xIndex = 0;
        int yIndex = 0;
        int index;

        while (!queue.isEmpty()) {
            int oriSize = queue.size();
            int size = queue.size();

            while (size-- > 0) {
                TreeNode node = queue.remove();
                if (node == null) continue;

                index = oriSize - size;

                if (node.val == x || node.val == y) {
                    if (xIndex == 0) {
                        xIndex = index;
                    } else {
                        yIndex = index;
                    }
                }
                queue.add(node.left);
                queue.add(node.right);

            }

            // cousins check
            if (xIndex != 0 && yIndex != 0) {
                return xIndex % 2 == 0 || yIndex != xIndex + 1;
            } else if (xIndex != 0)
                return false;
        }

        return false;
    }

}
