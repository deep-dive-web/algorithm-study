/**
 * 프로그래머스 - 이중우선순위큐
 * @param {string[]} operations
 * @return {number[]}
 */
function solution(operations) {
  const heap = [];

  operations.map((operation) => {
    const [action, value] = operation.split(' ');

    if (action === 'I') {
      heap.push(Number(value));
    } else {
      let standard, id;

      if (value === '1') {
        standard = Math.max(...heap);
        id = heap.indexOf(standard);
      } else {
        standard = Math.min(...heap);
        id = heap.indexOf(standard);
      }

      heap.splice(id, 1);
    }
  });

  return heap.length === 0 ? [0, 0] : [Math.max(...heap), Math.min(...heap)];
}