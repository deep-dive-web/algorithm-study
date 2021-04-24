/**
 * 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let result = [];
  
  for (let i = 0; i < nums.length; i++) {
    const point = nums[i];
    
    for (let j = i + 1; j <= nums.length; j++) {
      if (point + nums[j] === target) {
        result = [i, j];
        break;
      }
    }
  }
  
  return result;
};