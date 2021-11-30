const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  countLetters,
  findKey,
  findKeyByValue,
  letterPositions,
  flatten,
  map,
  takeUntil,
  without
};