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
    if (Number(position) && position >= 1 && position <= this.storageChain.length) {
      this.storageChain.splice(position -1, 1);
      return this;
    }
    else {
      this.storageChain = []
        throw new Error("You can't remove incorrect link!");      
    }
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
