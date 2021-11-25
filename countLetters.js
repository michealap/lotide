const inspect = require('util').inspect;

const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`${String.fromCodePoint(128512)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}\n`);
  } else console.log(`${String.fromCodePoint(128148)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}\n`);
};

const countLetters = function(string) {
  const newObj = {};   // .replace removes the space from the string, converts to lower case and .split returns each invidual character as an array
  let sentence = string.replace(/\s+/g, '').toLowerCase().split('');
  console.log(sentence);
  
  for (let letter of sentence) {
    if (!newObj[letter]) {
      newObj[letter] = 1;
    } else {
      newObj[letter] = newObj[letter] + 1;
    }
  }
  console.log(newObj);
  return newObj;
};

//Test Cases
assertEqual(countLetters("LHL"), { l: 2, h: 1});//passes due .toLowerCase()
assertEqual(countLetters("lhl"), {l:2, h: 1});//fail check only 1 l
assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
