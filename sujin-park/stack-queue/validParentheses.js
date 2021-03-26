/**
 * Leetcode - 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const braces = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const words = s.split('');
  const stack = [];
  if (!words.length) return false;
    
  for (word of words) {
    if (Object.keys(braces).includes(word)) {
      stack.push(braces[word]);
    } else {
      if (word === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
    
  return stack.length === 0;
};