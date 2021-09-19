/*Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match. 

First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
As soon as there is not a match, we can return false
Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)
*/



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //variable
  ifTrue = false
  // check if the length of the two objects keys are the same, if they are not the same it defaults to false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  // cycle through keys of object1 loop
  for (let key of Object.keys(object1)) {
    // if both [keys] are arrays, progress
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //both [keys] are arrays, use eqArrays to check if they are equal, and if equal returns true, checks if true === true and returns true to our variable
      if (eqArrays(object1[key],object2[key]) === true) {
        ifTrue = true
      }
      // both [keys] are arrays, however eqArray did not pass, therefore it will be false
      else {
        return false
      }
// checks to see if obeject1 at [key] is an array, or if object2 at [key] is an array, using Or, we can find that they will not be matching data types therefore will be false
    }
    else if (Array.isArray(object1[key]) || Array.isArray(object2)[key]) {
      return false
    }

// Returns true if both objects have identical key with identical values.
    else if (object1[key] === object2[key]) {
      ifTrue = true
    }
    // Otherwise you get back a big fat false!
    else {
      return false
    }
  }
  return ifTrue
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}`);
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
