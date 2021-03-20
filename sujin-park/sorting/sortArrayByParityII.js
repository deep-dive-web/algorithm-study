/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  const arrayByParity = [];
  let even = 0;
  let odd = 1;
  
  nums.forEach(num => {
      if (num % 2 === 0) {
          arrayByParity[even] = num;
          even += 2;
      } else {
          arrayByParity[odd] = num;
          odd += 2;
      }
  })
  
  return arrayByParity;
};