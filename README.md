# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @michealap/lotide`

**Require it:**

`const _ = require('@michealap/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first item in an array
* `middle(array)`: take in an array and return the middle-most element(s) of the given array.
* `tail(words)`: returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `assertEqual(actual, expected)`: compares strings
* `eqArrays(firstList, secondList)`: takes in two arrays and returns true or false, based on a perfect match
* `assertArraysEqual(actual, expected)`: compares arrays
* `eqObjects(object1, object2)`: take in two objects and returns true or false, based on a perfect match
* `assertObjectsEqual(actual, expected)`: compares objects
* `countLetters(string)`: returns the count of letters in a given string
* `letterPositions(sentence)`: returns the position/s of a letter in a given string
* `flatten(array)`: take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `findKey(object, callback)`: returns first item in an array
* `findKeyByValue(obj, showName)`: returns first item in an array
* `map(array, callback)`: returns first item in an array
* `without(source, itemsToRemove)`: returns first item in an array
* `takeUntil(array, callback)`: returns first item in an array
* `index(object of functions)`: calls the above functions for testing