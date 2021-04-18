/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const trusted = [];
  let result = -1;
  if (!trust.length) {
    if (N === 1) return 1;
    else return -1;
  }
  trust.forEach((item) => {
    trusted[item[0]] = -100;
    if (trusted[item[1]]) {
      trusted[item[1]]++;
    } else {
      trusted[item[1]] = 1;
    }
  });
  for (let i = 0; i < trusted.length; i++) {
    if (trusted[i] === N - 1) return i;
  }
  return result;
};
