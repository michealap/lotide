const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, showName) {
  for (const key in obj) {
    //given the value, check each pair does your calue match what is in the object
    if (showName === obj[key]) {
      return key;
    }
  } return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// //findKeyByValue(bestTVShowsByGenre);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
