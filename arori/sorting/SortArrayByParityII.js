/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let odds = [];
  let evens = [];
  let result = [];
  nums.forEach((num) => {
    num % 2 ? odds.push(num) : evens.push(num);
  });
  for (let i = 0; i < odds.length; i++) {
    result.push(evens[i]);
    result.push(odds[i]);
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let evenIndex = 0;
  let oddIndex = 1;

  let result = [];
  nums.forEach((num) => {
    if (num % 2) {
      result[oddIndex] = num;
      oddIndex += 2;
    } else {
      result[evenIndex] = num;
      evenIndex += 2;
    }
  });
  return result;
};
