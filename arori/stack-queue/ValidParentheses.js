/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let array = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  if (s.length % 2) return false;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      array.push(s[i]);
    } else {
      if (array.length <= 0) return false;
      const parenthesis = array.pop();
      if (map[parenthesis] !== s[i]) {
        return false;
      }
    }
  }

  return !array.length;
};
