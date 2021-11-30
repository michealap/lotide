const inspect = require('util').inspect;
const assertEqual = require('./assertEqual');


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

module.exports = countLetters;

