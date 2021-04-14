/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  // array.filter((el, index) => (el === value ? index : 0));
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === value) return i;
  // }
  // return 0;
  // let i = 0;
  // while (i < array.length) {
  //   if (array[i] === value) return i;
  //   i++;
  // }
  // return 0;

  return value - array[0];
}

module.exports = findIndex;
