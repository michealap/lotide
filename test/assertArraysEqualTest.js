const assertArraysEqual = require('../assertArraysEqual');

// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [1, 2]); //false
assertArraysEqual([1, 2, 3], [1, 2, "3"]); //false
assertArraysEqual([1, 2, 3], []);//false
assertArraysEqual([], []);//tru