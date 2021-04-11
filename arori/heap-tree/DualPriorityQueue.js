/**
 * @param {Array} operations
 * @returns {Array}
 */
function solution(operations) {
  let queue = [];

  const insert = (number) => {
    queue.push(number);
    queue.sort((a, b) => b - a);
  };

  const deleteMin = () => {
    if (!queue.length) return 0;
    return queue.pop();
  };

  const deleteMax = () => {
    if (!queue.length) return 0;
    return queue.splice(0, 1)[0];
  };

  operations.forEach((operation) => {
    const [command, number] = operation.split(" ");
    switch (command) {
      case "I":
        insert(parseInt(number));
        break;
      case "D":
        parseInt(number) === 1 ? deleteMax(queue) : deleteMin(queue);
        break;
    }
  });

  return [deleteMax(), deleteMin()];
}
