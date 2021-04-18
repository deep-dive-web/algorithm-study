/**
 * Leetcode - 997. Find the Town Judge
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const count = Array(N).fill(0);

  trust.forEach(([a, b]) => {
    count[a - 1]--;
    count[b - 1]++;
  });

  for (let i = 0; i < count.length; i++) {
    if (count[i] === N - 1) return i + 1;
  }

  return -1;
};