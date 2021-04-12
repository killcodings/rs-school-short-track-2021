/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const arr = n.toString().split('');
  const deleteOne = n
    .toString()
    .split('')
    .sort((a, b) => a - b)[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === deleteOne) {
      arr.splice(i, 1);
    }
  }
  return +arr.join('');
}

module.exports = deleteDigit;
