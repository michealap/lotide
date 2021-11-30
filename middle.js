const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  let value = [];
  if (array.length === 0){
    return undefined;
  }
  if (array.length > 0 && array.length <= 2)
    return value;
  if (array.length > 2 && array.length % 2 === 0) {//execute for all even number length
    let theMiddle = (array.length - 2) / 2; //1st of the middle
    let middleTwo = theMiddle + 1; //second of the middle
    let value = [array[theMiddle], array[middleTwo]];
    //console.log(value); 
    return value;
  } else {//execute middle for all odd number length
    let theMiddle = (array.length - 1) / 2; // index ?
    let value = [array[theMiddle]]; // value ?
    return value;
  }
};

module.exports = middle;