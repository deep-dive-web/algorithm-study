/**
 * 프로그래머스 - 프린터
 * @param {number[]} priorities 
 * @param {number} location
 * @return {number}
 */
function solution(priorities, location) {
  let order = 0;
  let queue = priorities.map((value, i) => ({ location: i === location, value }));

  while (queue.length) {
    const current = queue.shift();
    const isLargerThanCurrent = queue.some(item => item.value > current.value);

    if (isLargerThanCurrent) {
      queue.push(current);
    } else {
      order++;
        
      if (current.location) return order;
    } 
  }
}