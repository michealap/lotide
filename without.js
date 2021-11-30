const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const sourceWithout = [];
  for (let i = 0; i < source.length; i++) {
    //loop through the length of 1st array
    if (!itemsToRemove.includes(source[i])) {
      sourceWithout.push(source[i]);
    }
  }
  console.log(sourceWithout);
  return sourceWithout;
};

module.exports = without;

// without([1, 2, 3], [1]); // => [2, 3]
// without([1, 2, 3, 1], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// //without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // =>true
// assertArraysEqual(words, ["hel", "world", "lighthouse"]); // =>false
