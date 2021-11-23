/*Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. */
const eqArrays = function(firstList, secondList) {
  console.log(firstList, secondList);
  if (firstList.length !== secondList.length) {
    return false;
  }
  for (i = 0; i < firstList.length; i++) {
    if (firstList[i] === secondList[i]) {
      return true;
    } else {
      return false;
    }
  } 
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}`);
};
