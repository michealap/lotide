/*Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console. */

const eqArrays = require('./eqArrays');

function assertArraysEqual(actual, expected) {
  const isEqual = eqArrays(actual,expected);
  if (isEqual) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}\n`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}\n`);
};

module.exports = assertArraysEqual;
