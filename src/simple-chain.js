const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    chainMaker.length();
  },
  addLink(value) {
    chainMaker.add(value);
  },
  removeLink(position) {
    chainMaker.remove(position);
  },
  reverseChain() {
    chainMaker.reverse();
  },
  finishChain() {
    chainMaker.finishChain();
  }
};

module.exports = {
  chainMaker
};
