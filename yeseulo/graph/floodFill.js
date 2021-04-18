/**
 * Leetcode - 733. Flood Fill
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let start = image[sr][sc];
  if (newColor === start) return image;

  const dfs = (img, row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= img.length ||
      col >= img[0].length ||
      img[row][col] !== start
    )
      return;
    img[row][col] = newColor;

    dfs(img, row - 1, col);
    dfs(img, row + 1, col);
    dfs(img, row, col - 1);
    dfs(img, row, col + 1);

    return img;
  };

  return dfs(image, sr, sc);
};