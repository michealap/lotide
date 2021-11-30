const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

// const countLetters = require('./countLetters');
// const findKey = require('./findKey');
// const findKeyByValue = require('./findKeyByValue');
// const letterPositions = require('./letterPositions');
// const map = require('./map');
// const takeUntil = require('./takeUntil');
// const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual
};