function solution(numbers) {
  const sortFunc = (a, b) => {
    const strA = `${a}${b}`;
    const strB = `${b}${a}`;
    return parseInt(strB) - parseInt(strA);
  };
  numbers.sort(sortFunc);
  return numbers[0] === 0 ? "0" : numbers.join("");
}
