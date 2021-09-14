/*
Test at least the following scenarios:

Comparing identical strings
Comparing non-identical strings
Comparing identical numbers
Comparing non-identical numbers
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(128512) + " Assertion Passed: " + actual + " === " + expected);
  } else console.log(String.fromCodePoint(128148) + " Assertion Failed: " + actual + " !== " + expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, -1);