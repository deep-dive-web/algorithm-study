/**
 * 997. Find the Town Judge
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(N, trust) {
  const truster = Array(N).fill(0);
  const trustee = Array(N).fill(0);
  
  for(let i = 0; i < trust.length; i++) {
    let [a, b] = trust[i];

    truster[a - 1]++;
    trustee[b - 1]++;
  }
  
  for (let i = 0; i < N; i++) {
      if (!truster[i] && trustee[i] === N - 1) {
        return i + 1;
      }
  }
  
  return -1;
};