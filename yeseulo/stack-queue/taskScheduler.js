/**
 * Leetcode - 621. Task Scheduler
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const map = new Map();

  let max = 0;
  let maxCount = 0;

  for (let task of tasks) {
    let tVal = map.has(task) ? map.get(task) + 1 : 1;
    map.set(task, tVal);

    if (tVal > max) {
      max = tVal;
      maxCount = 1;
    } else if (tVal === max) {
      maxCount++;
    }
  }
  return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
};