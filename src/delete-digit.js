const { NotImplementedError } = require('../extensions/index.js');

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
  for(let i = 0; i < n.length; i++) {
    if (n.slice(i) == Math.max(n)) {
      return true;
    }
      Math.max(n.slice(n-i));
  }
}

module.exports = {
  deleteDigit
};
