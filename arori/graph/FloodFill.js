/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const value = image[sr][sc];
  const stack = [{ r: sr, c: sc }];

  if (value === newColor) return image;

  while (stack.length) {
    const { r, c } = stack.pop();
    image[r][c] = newColor;

    if (r + 1 < image.length && image[r + 1][c] === value) {
      stack.push({ r: r + 1, c: c });
    }
    if (r - 1 >= 0 && image[r - 1][c] === value) {
      stack.push({ r: r - 1, c: c });
    }
    if (c + 1 < image[r].length && image[r][c + 1] === value) {
      stack.push({ r: r, c: c + 1 });
    }
    if (c - 1 >= 0 && image[r][c - 1] === value) {
      stack.push({ r: r, c: c - 1 });
    }
  }
  return image;
};
