/*Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. */
function eqArrays(arr1, arr2) {
  let var1 = toString(arr1);
  let var2 = toString(arr2);
  
  if (var1 === var2) {
    return true;
  } else {
    return false;
  }
}


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);