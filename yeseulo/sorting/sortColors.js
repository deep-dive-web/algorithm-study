/**
 * Leetcode - 75. Sort Colors
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = function (nums) {
  nums.sort((a, b) => a - b);
};