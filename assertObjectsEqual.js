/**Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console. */

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  // ...
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(object1,object2)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${object1}  ===  ${object2}`);
  } else {
    console.log(`🤨🤨🤨    Assertion Failed: ${object1}  !==  ${object2}`);
  }
};

