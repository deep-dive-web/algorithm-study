package com.janjanee.algo.sorting;

import java.util.Arrays;

public class SortArrayByParityII {

    public static int[] sortArrayByParityII(int[] nums) {

        // 홀수 번째 인덱스 j 초기화
        int j = 1;
        int tmp;

        // 짝수 번째 인덱스를 조사한다.
        for (int i = 0; i < nums.length; i += 2) {

            // 짝수 번째 인덱스에 홀수가 있어?
            if (nums[i] % 2 == 1) {

                // 짝수가 나올 때 까지 홀수 번째 인덱스 조사
                while (nums[j] % 2 == 1) {
                    j += 2;
                }

                // 짝수가 나오면 둘을 교환.
                tmp = nums[j];
                nums[j] = nums[i];
                nums[i] = tmp;

            }
        }

        return nums;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(sortArrayByParityII(new int[]{3, 1, 0, 7, 8, 4})));
    }

}
