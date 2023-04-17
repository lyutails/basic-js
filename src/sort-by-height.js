const { NotImplementedError } = require('../extensions/index.js');

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
function sortByHeight(arr) {
  function newSort(a, b) {
    return a - b;
  }

  let arrPositive = arr.filter(elem => elem > 0).sort(newSort);
  let sorted = [];
  let j = 0;

  // replace the positive numbers with sorted numbers

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sorted.push(arrPositive[j++]);
    } else {
      sorted.push(arr[i]);
    }
  }
  return sorted;
}

module.exports = {
  sortByHeight
};
