function solution1(array, commands) {
  return commands.map((command) => {
    const [first, last, index] = command;
    const ascendingSort = (a, b) => a - b;
    return array.slice(first - 1, last).sort(ascendingSort)[index - 1];
  });
}

function solution2(array, commands) {
  return commands.reduce((answer, command) => {
    var slice = array.slice(command[0] - 1, command[1]);
    slice.sort((a, b) => {
      return a > b;
    });
    answer.push(slice[command[2] - 1]);
    return answer;
  }, []);
}
