const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {}; 
  for (let dns of domains) {
    const addressList = dns.split('.').reverse().map((elem) => '.'+elem); // ['.ru', '.yandex', '.code']
    for (let [index, address] of Object.entries(addressList)) {
      address = addressList.slice(0, index).join('')+address;
      if (result[address]) {
        result[address]++;
      }
      else {
        result[address] = 1;
      }
    } 
  }
  return result;
}

module.exports = {
  getDNSStats
};
