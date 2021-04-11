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
function getEmailDomain(email) {
  const arrSite = email.split('@');
  const domain = arrSite[arrSite.length - 1];
  return domain;
}

module.exports = getEmailDomain;
