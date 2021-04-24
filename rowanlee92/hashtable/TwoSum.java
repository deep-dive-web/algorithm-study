package com.janjanee.algo.hashtable;

import java.util.*;

public class TwoSum {

    /** 2-pass */
    public static int[] twoSumTwoPass(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int[] result = new int[]{0, 1};
        if (nums.length == 2)
            return result;

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            map.put(num, i);
        }

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            if (num == target - num) {
                int val = map.get(num);
                if (val != i) {
                    result[0] = i;
                    result[1] = val;
                    break;
                }
            } else {
                if (map.containsKey(target - num)) {
                    result[0] = i;
                    result[1] = map.get(target - num);
                    break;
                }
            }
        }

        return result;
    }

    /** 1-pass */
    public static int[] twoSumOnePass(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int[] result = new int[]{0, 1};
        if (nums.length == 2)
            return result;

        map.put(nums[0], 0);
        for (int i = 1; i < nums.length; i++) {
            int num = nums[i];

            if (map.containsKey(target - num)) {
                result[0] = map.get(target - num);
                result[1] = i;
                break;
            }
            map.put(num, i);

        }

        return result;
    }

}
