// library sort 미사용. 공간복잡도 O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const COLOR = {
    RED: 0,
    WHITE: 1,
    BLUE: 2,
  };

  let redNum = 0, whiteNum = 0, blueNum = 0;
  nums.forEach((num) => {
    if (num === COLOR.RED) redNum++;
    if (num === COLOR.WHITE) whiteNum++;
    if (num === COLOR.BLUE) blueNum++;
  });

  whiteNum += redNum;
  blueNum += whiteNum;

  for (let i = 0; i < nums.length; i++) {
    if (i < redNum) {
      nums[i] = COLOR.RED;
    } else if (i < whiteNum) {
      nums[i] = COLOR.WHITE;
    } else {
      nums[i] = COLOR.BLUE;
    }
  }
};
