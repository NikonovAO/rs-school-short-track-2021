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
  console.log(domains);
  const arrSite = [];
  const arrayDomain = [];
  let count = 0;
  for (let i = 0; i < domains.length; i++) {
    arrSite[i] = domains[i].split('.');
  }
  console.log(arrSite);
  for (let i =0; i < arrSite.length; i++) {
    let count = 0;
    arrayDomain.push(arrSite[i][arrSite.length]);
  }
  console.log(arrayDomain);

  return 0;
}
console.log(getDNSStats([
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ]));

module.exports = getDNSStats;
