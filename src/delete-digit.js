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
  let result = 0;
  number = [];
  while (n) {
    number.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let index = 0; index < number.length; index++) {
    let n = 0; 
    for (let i = number.length - 1; i >= 0; i--) {
      if (i !== index) {
        n = n * 10 + number[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};
