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
  const arrStr = str.split('');
  const arrEncode = [];
  let count = 1;
  let encodeStr = '';
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i - 1]) {
      count++;
      arrEncode.pop();
      arrEncode.push(count + arrStr[i]);
    } else {
      count = 1;
      arrEncode.push(arrStr[i]);
    }
  }
  encodeStr = arrEncode.join('');
  return encodeStr;
}

module.exports = encodeLine;
