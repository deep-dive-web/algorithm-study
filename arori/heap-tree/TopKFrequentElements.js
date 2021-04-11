/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  const arr = [];
  
  nums.forEach((num) => {
    map[num] = map[num] ? map[num] + 1 : 1;
  });
  for (const [key, value] of Object.entries(map)) {
    arr.push({ key, value });
  }

  arr.sort((a, b) => b.value - a.value);
  return arr.slice(0, k).map((item) => item.key);
};
