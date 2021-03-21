/**
 * Leetcode - 242. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const arrS = s.split('').sort().join('');
  const arrT = t.split('').sort().join('');

  return arrS === arrT;
};