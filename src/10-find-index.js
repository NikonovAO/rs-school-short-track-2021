/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while ((endIndex - startIndex) > 1) {
    const centerIndex = Math.floor((endIndex + startIndex) / 2);
    if (array[centerIndex] === value) {
      return centerIndex;
    }
    if (array[centerIndex] > value) {
      endIndex = centerIndex;
    } else {
      startIndex = centerIndex;
    }
  }

  if (array[endIndex] === value) {
    return endIndex;
  }
  return startIndex;
}

module.exports = findIndex;
