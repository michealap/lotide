/*Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console. */

const eqArrays = function(firstList, secondList) {
  console.log(firstList, secondList);
  if (firstList.length !== secondList.length) {
    return false;
  }
  for (i = 0; i < firstList.length; i++) {
    if (firstList[i] !== secondList[i]) {
      return false;
    }
  }
  return true;
};

function assertArraysEqual(actual, expected) {
  const isEqual = eqArrays(actual,expected);
  if (isEqual) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}\n`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}\n`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [1, 2]); //false
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //false
assertArraysEqual([1, 2, 3], []);//false
assertArraysEqual([], []);//true
