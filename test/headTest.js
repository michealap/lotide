const head = require('../head');
const assertEqual = require('../assertEqual');

//Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 7);
assertEqual(head([]), 5); //returns undefined
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Labs"]), "Hello");//returns the only element