/*function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to 
represent all the places in the string that it shows up.*/

const eqArrays = function(firstList, secondList) {
  console.log(firstList, secondList);
  if (firstList.length !== secondList.length) {
    return false;
  }
  for (let i = 0; i < firstList.length; i++) {
    if (firstList[i] !== secondList[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual,expected);
  if (isEqual) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}\n`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}\n`);
};

const letterPositions = function(sentence) {
  // empty array
  const results = {};
  for (let j = 0; j < sentence.length; j++) {
  // letter equal to word index
    let letter = sentence[j];
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [j];
      } else {
        results[letter].push(j);
      }
    }
  }
  return results;
};

//console.log(letterPositions("lighthouse in the house"))
//Test Code
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello").o, [3]); //fail check
