/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let count = 0;
  const map = {};
  if (n === 0) return tasks.length;
  tasks.forEach((item) => {
    const num = map[item];
    map[item] = num ? num + 1 : 1;
  });
  const values = Object.values(map);
  values.sort((a, b) => a - b);
  const pq = new PriorityQ(values);

  while (!pq.isEmpty()) {
    const append = [];
    for (let i = 0; i <= n; i++) {
      const value = pq.dequeue();
      if (append.length === 0 && value === null) return count;
      if (value > 1) {
        append.push(value - 1);
      }
      count++;
    }
    append.forEach((item) => {
      pq.enqueue(item);
    });
  }
  return count;
};

class PriorityQ {
  constructor(array) {
    this.data = array || [];
  }
  enqueue(value) {
    this.data.push(value);
  }
  dequeue() {
    if (this.isEmpty()) return null;
    let highestIndex = 0;
    let highest = 0;
    this.data.forEach((item, index) => {
      if (highest < item) {
        highest = item;
        highestIndex = index;
      }
    });
    this.data.splice(highestIndex, 1);
    return highest;
  }
  isEmpty() {
    return !this.data.length;
  }
}
