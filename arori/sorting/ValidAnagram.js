/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let check = new Map();
  for (let i = 0; i < s.length; i++) {
    const key = s.charAt(i);
    if (check.get(key)) {
      check.set(key, check.get(key) + 1);
    } else {
      check.set(key, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const key = t.charAt(i);
    if (check.get(key)) {
      if (check.get(key) === 1) {
        check.delete(key);
      } else {
        check.set(key, check.get(key) - 1);
      }
    } else {
      return false;
    }
  }
  return check.size === 0;
};
