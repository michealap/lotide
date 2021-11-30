/*Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.

The important bit above is that our map (higher-order) function can call the callback function. This callback function is the one that is passed 
in as its second argument and conveniently called callback.

Since map is passing in the original item to it, our test code which calls map knows to pass in a callback function which accepts that one and only argument.
 */
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
//Test Cases
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// //console.log(results1);
// assertArraysEqual(results1[1],'c'); //-->true
// assertArraysEqual(results1[0],'f');//fail check
// assertArraysEqual(results1[2],'t');//true
