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
  // const number1 = Number(String(n).slice(1));
  // const number2 = Number(String(n).slice(0, -1));
  // return Math.max(number1, number2);
  if (n == Math.max) {
    return n;
  }
    const number = Number(String(n).slice(n));
}

module.exports = {
  deleteDigit
};
