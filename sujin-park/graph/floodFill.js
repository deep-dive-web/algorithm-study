/**
 * * Leetcode - 733. Flood Fill
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const modifyImage = (image, sr, sc, color, newColor) => {
  if (image[sr][sc] === color) {
    image[sr][sc] = newColor;
  
    if (sr >= 1) modifyImage(image, sr - 1, sc, color, newColor);
    if (sc >= 1) modifyImage(image, sr, sc - 1, color, newColor);
    if (sr + 1 < image.length) modifyImage(image, sr + 1, sc, color, newColor);
    if (sc + 1 < image[0].length) modifyImage(image, sr, sc + 1, color, newColor);
  }
}

const floodFill = function(image, sr, sc, newColor) {
  let color = image[sr][sc];
  
  if (color !== newColor) {
    modifyImage(image, sr, sc, color, newColor);
  }
  
  return image;
};

