/*Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key 
for which the callback returns a truthy value. If no key is found, then it should return undefined. */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callback) {
  const keysArray = Object.keys(object);

  for (let i = 0; i < keysArray.length; i++) {
    const truth = callback(object[keysArray[i]]);
    if (truth === true) {
      return keysArray[i];
    } 
  }
};

//Test Cases
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), "Blue Hill");
