/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const j = map[target - nums[i]];
    if (typeof j === "number" && i !== j) {
      return [i, j];
    }
    map[nums[i]] = i;
  }
};
