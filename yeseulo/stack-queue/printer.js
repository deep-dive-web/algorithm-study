/**
 * 프로그래머스 - 프린터
 * @param {number[]} priorities
 * @param {number} location
 * @return {number}
 */
function solution(priorities, location) {
  let answer = 0;
  let index = location;
  const queue = priorities;

  while (priorities.length > 0) {
    const first = priorities.shift();

    if (priorities.find((item) => item > first)) {
      queue.push(first);
    } else {
      answer++;
      if (index === 0) break;
    }

    if (index === 0) {
      index = priorities.length - 1;
    } else {
      index--;
    }
  }

  return answer;
}