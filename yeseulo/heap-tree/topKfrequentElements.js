/**
 * Leetcode - 347. Top K Frequent Elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  nums.forEach((num) => {
    map[num] = map[num] ? map[num] + 1 : 1;
  });

  const sorted = Object.entries(map).sort(
    ([key1, val1], [key2, val2]) => val2 - val1
  );

  return sorted.slice(0, k).map((num) => num[0]);
};