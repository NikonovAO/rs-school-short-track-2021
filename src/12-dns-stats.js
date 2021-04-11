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
  const dnsStats = {};
  const arrSite = [];
  const subDomain = [];
  for (let i = 0; i < domains.length; i++) {
    arrSite[i] = domains[i].split('.');
  }
  for (let i = 0; i < arrSite.length; i++) {
    arrSite[i].reverse();
  }
  for (let i = 0; i < arrSite.length; i++) {
    subDomain[i] = [];
    for (let j = 0; j < arrSite[i].length; j++) {
      if (j === 0) {
        subDomain[i][j] = `.${arrSite[i][j]}`;
      } else {
        subDomain[i][j] = `${subDomain[i][j - 1]}.${arrSite[i][j]}`;
      }
    }
  }
  for (let i = 0; i < subDomain.length; i++) {
    for (let j = 0; j < subDomain[i].length; j++) {
      if (subDomain[i][j] in dnsStats) {
        dnsStats[subDomain[i][j]]++;
      } else {
        dnsStats[subDomain[i][j]] = 1;
      }
    }
  }
  return dnsStats;
}

module.exports = getDNSStats;
