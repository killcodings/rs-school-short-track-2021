/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  let newStr = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      if (counter === 1) {
        newStr += str[i];
      } else {
        newStr += String(counter) + str[i];
      }
      counter = 1;
    }
  }
  return newStr;
}

module.exports = encodeLine;
