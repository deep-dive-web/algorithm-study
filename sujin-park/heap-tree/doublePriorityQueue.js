/**
 * 프로그래머스 - 이중우선순위큐
 * @param {string[]} operations 
 * @return {number[]}
 */
function solution(operations) {
  const answer = [];

  operations.forEach(operation => {
    const { 0: word, 1: value } = operation.split(' ');

    if (word === 'I') {
      answer.push(Number(value));
    } else {
      const index = answer.indexOf((Number(value) === 1 ? Math.max : Math.min)(...answer));
      answer.splice(index, 1);
    }
  });

  return answer.length ? [Math.max(...answer), Math.min(...answer)] : [0, 0];
}