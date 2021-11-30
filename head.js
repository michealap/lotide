/* retrieve the first element from the array returning the element itself and testing using assertEqual function*/
const assertEqual = require('./assertEqual');

const head = function(array) {
  return (array !== null && array.length)
  ? array[0]
  : undefined
};

module.exports = head;
