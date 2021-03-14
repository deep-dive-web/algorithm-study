/**
 * 프로그래머스 - K번째 수
 * @param {number[]} array
 * @param {number[][]} commands
 * @return {number[]}
 */
function solution(array, commands) {
  return commands.map((c) => {
    let result = array
      .slice(c[0] - 1, c[1])
      .sort((a, b) => a - b)
      .slice(c[2] - 1, c[2]);
    return result[0];
  });
}
