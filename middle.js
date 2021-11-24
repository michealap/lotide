const eqArrays = function(firstList, secondList) {
  if (firstList.length !== secondList.length) {
    return false;
  }
  for (let i = 0; i < firstList.length; i++) {
    if (firstList[i] !== secondList[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  //const isEqual = eqArrays(actual,expected);
  if (eqArrays(actual, expected)) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}\n`);
  } else console.log(`${String.fromCodePoint(128148)}Assertion Failed: ${actual} !== ${expected}\n`);
};

// ACTUAL FUNCTION Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  let value = [];
  if (array.length === 0 || array.length === 1 || array.length === 2)
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

// TEST CODE

console.log(assertArraysEqual(middle([]), []));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
//console.log(assertArraysEqual([],[]));
//console.log(eqArrays([], []));
//console.log(middle([1]));
