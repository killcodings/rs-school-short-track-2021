/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// module.exports = getEmailDomain;
function getEmailDomain(email) {
  // throw new Error('Not implemented');
  return email.slice(email.lastIndexOf('@') + 1);
}

module.exports = getEmailDomain;
