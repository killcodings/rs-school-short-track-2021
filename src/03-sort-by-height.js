/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  const index = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      index.push(i);
    }
  }
  const newarr = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);
  index.forEach((elem) => {
    newarr.splice(elem, 0, -1);
  });
  return newarr;
}

module.exports = sortByHeight;
