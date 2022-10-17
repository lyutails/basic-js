const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_OF_TWO = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string' && typeof(Number(sampleActivity)) && sampleActivity < 15 && sampleActivity > 0) { // /[a-z]/gi or /[a-zA-Z]+/g sampleActivity.match(/[a-z]/gi) or /^[a-zA-Z]+$/
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD / LOG_OF_TWO);
  } 
  else {
    return false;
  }
}

module.exports = {
  dateSample
};
