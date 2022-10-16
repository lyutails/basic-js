const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */ 
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new NotImplementedError(`\'arr\' parameter must be an instance of the Array!`);    
  }
  const result = [];  
  for (let i = 0; i < arr.length; i++) {    
    if (arr[i] == `--discard-next` && i + 1 < arr.length) {
      i++;
      continue;
    }
    else if (arr[i] == '--discard-prev' && i - 1 >= 0 && arr[i - 2] != `--discard-next`) {
      result.pop();
    }
    else if (arr[i] == '--double-next' && i + 1 < arr.length) {
      result.push(arr[i + 1]);            
    }        
    else if (arr[i] == `--double-prev` && i - 1 >= 0 && arr[i - 2] != `--discard-next`) {
      result.push(arr[i - 1]);
    }
    else if (!['--double-next', '--discard-prev', `--discard-next`, `--double-prev`].includes(arr[i])) {
      result.push(arr[i]);
    }
  }    
  console.log(arr, result);
  return result;  
}


module.exports = {
  transform
};
