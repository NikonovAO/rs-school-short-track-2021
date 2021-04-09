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
  const arrayN = String(n).split('');
  const newArray = [];
  let maxDigit = 0;
  for (let i = 0; i < arrayN.length; i++) {
    newArray[i] = '';
    for (let j = 0; j < arrayN.length; j++) {
      if (i !== j) {
        newArray[i] += arrayN[j];
      }
    }
  }
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = Number(newArray[i]);
  }
  maxDigit = Math.max.apply(null, newArray);
  return maxDigit;
}
module.exports = deleteDigit;
