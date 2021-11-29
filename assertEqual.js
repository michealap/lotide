/*
Test at least the following scenarios:

Comparing identical strings
Comparing non-identical strings
Comparing identical numbers
Comparing non-identical numbers

console.log(`Hello, ${name}!`);
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😄 Assertion Passed: ${actual} === ${expected}\n`);
  } else console.log(`💔 Assertion Failed: ${actual} !== ${expected}\n`);
};

module.exports = assertEqual;