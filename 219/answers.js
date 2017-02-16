// A collection of spelling blocks has two letters per block, as shown in this list:

// javascript numbers=off
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M


// This limits the words you can spell with the blocks to just those words that do not use both letters from any given block. 
// You can also only use each block once.

// Write a function that takes a word as a string, and returns `true` if it can spell the argument passed in from the set of blocks, `false` otherwise. 
// You can consider the letters to be case insensitive when you apply the rules.


// input: one word string
// output: either true or false, depending on if word is possible to make from blocks
//   case insensitive

// represent blocks as an Object

// split string into array of characters
// map each character into corresponding char in block Object
//   if key exists use value
//   if key does not exist keep char the same
  
// create empty array blockCheck to push each character into

// iterate through each character of array, if char is not in array then push it to 
// blockCheck
//   if char is already in array we know word is not possible so return false
  
// if we make it through entire array without duplicate return true

// function makeBlocks(word) {
//   var BLOCKS = { 'B':'O', 'X':'K', 'D':'Q', 'C':'P', 'N':'A', 'G':'T', 'R':'E', 
//   'F':'S', 'J':'W', 'H':'U', 'V':'I', 'L':'Y', 'Z':'M' };
  
//   var charArray = word.split('').map(function(char) {
//     return char.toUpperCase();
//   });
  
//   var mappedCharArray = charArray.map(function(char) {
//     if (BLOCKS[char]) {
//       return BLOCKS[char];
//     } else {
//       return char;
//     }
//   });
  
//   var duplicateCheck = [];
  
//   for (var i = 0; i < mappedCharArray.length; i += 1) {
//     if (duplicateCheck.indexOf(mappedCharArray[i]) >= 0) {
//       return false;
//     } else {
//       duplicateCheck.push(mappedCharArray[i]);
//     }
//   }
  
//   return true;
// }

// console.log(makeBlocks('dog')) // true
// console.log(makeBlocks('tag')) // false
// console.log(makeBlocks('gig')) // false
// console.log(makeBlocks('Dog')) // true
// console.log(makeBlocks('Tag')) // false

var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      var innerObj = { test: 'yes!' };
    });
  },
};


obj.foo();
console.log(innerObj);