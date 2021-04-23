/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const strsMap = {};
  for (str of strs) {
    const map = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const key = str.charCodeAt(i) - 97;
      map[key]++;
    }
    const key = map.reduce((acc, cur, idx) => {
      const alphabet = String.fromCharCode(idx + 97);
      return cur ? acc + alphabet + cur : acc;
    }, "");

    strsMap[key] ? strsMap[key].push(str) : (strsMap[key] = [str]);
  }
  return Object.values(strsMap);
};
