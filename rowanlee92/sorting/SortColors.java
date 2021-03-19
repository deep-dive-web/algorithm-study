package com.janjanee.algo.sorting;

import java.util.Arrays;

public class SortColors {

    public static void sortColors(int[] nums) {

        int k = 0;
        int z = 0;

        //  배열 길이 만큼 순회하며 0, 1 일 때 k번째 인덱스에 정렬
        for(int i = 0; i < nums.length; i++) {

            if (nums[i] == 0) {

                nums[i] = nums[k];
                nums[k] = 1;
                nums[z] = 0;
                k++;
                z++;

            } else if (nums[i] == 1) {

                nums[i] = nums[k];
                nums[k] = 1;
                k++;

            }
        }

    }

    public static void sortColors2(int[] nums) {

        int p1 = 0, p2 = nums.length - 1, index = 0;

        while (index <= p2) {

            if (nums[index] == 0) {
                nums[index] = nums[p1];
                nums[p1] = 0;
                p1++;
            }

            if (nums[index] == 2) {
                nums[index] = nums[p2];
                nums[p2] = 2;
                p2--;
                index--;
            }

            index++;
        }

    }

    public static void main(String[] args) {

        int[] nums = {2, 1, 1 ,0, 1, 0};
        sortColors(nums);
        System.out.println(Arrays.toString(nums));

    }
}
