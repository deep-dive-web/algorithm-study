/**
 * 프로그래머스 - K번째 수
 * @param {number[]} numbers
 * @return {string}
 */
function solution(numbers) {
  const answer = numbers
    .map((item) => item + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}