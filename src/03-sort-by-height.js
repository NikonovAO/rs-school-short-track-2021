/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
  return 0;
}
function sortByHeight(arr) {
  const sortArray = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      sortArray[i] = -1;
      arr.splice(i, 1, undefined);
    }
  }
  arr.sort(compareNumeric);
  for (let i = 0; i < arr.length; i++) {
    if (sortArray[i] === -1) {
      count++;
    } else {
      sortArray[i] = arr[i - count];
    }
  }
  return sortArray;
}
module.exports = sortByHeight;
