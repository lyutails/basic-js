const { NotImplementedError } = require('../extensions/index.js');

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
  //const count = str.match(/[a-z]/gi).length;

  let result = 0;
  for (i = 0; i < str.length; i++){
  if (str[i] == str[i + 1])
  result++;
  return result;
  }
  return `${result[i] + str[i]}`;
}

module.exports = {
  encodeLine
};
