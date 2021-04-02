package com.janjanee.algo.datastructure.tree_heap;

import java.util.LinkedList;
import java.util.Queue;

public class SymmetricTree {

    public static int sum;

    public static boolean isSymmetric(TreeNode root) {
        sum = 0;
        comp(root.left, root.right);
        return sum == 0;
    }

    private static void comp(TreeNode left, TreeNode right) {

        if (left == null && right == null) {
            return;
        } else if (left == null || right == null) {
            sum += 1;
            return;
        }

        comp(left.left, right.right);
        sum += Math.abs(left.val - right.val);
        comp(left.right, right.left);

    }

    public static boolean isSymmetricSolution1(TreeNode root) {
        return isMirror(root, root);
    }

    public static boolean isMirror(TreeNode t1, TreeNode t2) {
        if (t1 == null && t2 == null) return true;
        if (t1 == null || t2 == null) return false;
        System.out.println(t1 != null ? t1.val : null);
        System.out.println(t2 != null ? t2.val : null);
        return (t1.val == t2.val)
                && isMirror(t1.right, t2.left)
                && isMirror(t1.left, t2.right);
    }

    public static boolean isSymmetricSolution2(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);
        q.add(root);
        while(!q.isEmpty()) {
            TreeNode t1 = q.poll();
            TreeNode t2 = q.poll();
            if (t1 == null && t2 == null) continue;
            if (t1 == null || t2 == null) return false;
            q.add(t1.left);
            q.add(t2.right);
            q.add(t1.right);
            q.add(t2.right);
        }
        return true;
    }


}


