/* retrieve the first element from the array returning the element itself and testing using assertEqual function*/
const head = function(array) {
  return (array !== null && array.length)
  ? array[0]
  : undefined
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}`);
};

//Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 7);
assertEqual(head([]), 5); //returns undefined
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Labs"]), "Hello");//returns the only element 
