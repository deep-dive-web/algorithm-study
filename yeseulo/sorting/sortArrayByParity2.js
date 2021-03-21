/**
 * Leetcode - 922. Sort Array By Parity II
 * @param {number[]} nums
 * @return {number[]}
 */

const sortArrayByParityII = function (nums) {
  const result = [];
  let even = 0;
  let odd = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result[even] = nums[i];
      even += 2;
    } else {
      result[odd] = nums[i];
      odd += 2;
    }
  }

  return result;
};
