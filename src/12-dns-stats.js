/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new Error('Not implemented');
  const obj = {};
  domains.forEach((item) => {
    const arr = item.split('.');
    let key = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      key += `.${arr[i]}`;
      obj[key] = obj[key] ? (obj[key] += 1) : 1;
    }
  });
  return obj;
}

module.exports = getDNSStats;
