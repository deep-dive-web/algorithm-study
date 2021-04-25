/**
 * Leetcode - 49. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  strs.forEach((str) => {
    const key = str.split("").sort().join();

    if (map[key]) {
      map[key].push(str);
    } else {
      map[key] = [str];
    }
  });

  return Object.values(map);
};