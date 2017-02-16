var a = [1, 10, 9, 3, 15];

console.log(a.sort(function(value1, value2) {
  return value1 >= value2 ? 1 : -1;
}));

console.log(a.reduce(function(accumulator, value) {
  return accumulator.concat([[value]]);
}, []));

// input: string, word
// output: number of times word appears in string

// case insensitive

// use match to create array with matches
// user array.length to count number of matches

function searchWord(word, text) {
  var regex = new RegExp(word, 'gi');
  return text.match(regex).length;
}

var b = 'Sed yes sed no sedentary';

console.log(searchWord('sed', b));


// input: array of strings
// output: array of strings without vowels

function removeVowels(array) {
  return array.map(function(string) {
    return string.replace(/[aeiou]/ig, '');
  });
}

console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));




// Write a function that takes a two dimensional array as the argument, turn it into 
// a flat array and with all the duplicated elements removed. Treat numbers and number 
// strings, for example, 1 and '1' as duplicates, and keep the one that appears first 
// in the flattened array.

// input: 2D array (array of arrays)
// output: 1D array, remove all duplicate elements
//   treat strings and numbers as dups i.e 1 and '1' are dups
//   keep element that appears first
  
// reduce 2D array into 1D array by concat each inner array together, starting with 
//   initial empty array
  
// create empty array to push non duplicates into

// iterate through flat 1D array from step 1, adding element to result array if its
// number AND string equilvalent are not already in array

function flattedAndRemoveDups(arrayOfArrays) {
  var flatArray = arrayOfArrays.reduce(function(accumulator, element) {
    return accumulator.concat(element);
  }, []);
  
  
  
}
  
  
console.log(flattedAndRemoveDups([[1, 2], [3, 4]])); // [1, 2, 3, 4]
console.log(flattedAndRemoveDups([[1, 3], [3, 4]])); // [1, 3, 4]
console.log(flattedAndRemoveDups([[1, 3], ['3', 4]])); // [1, 3, 4]
console.log(flattedAndRemoveDups([[1, '3'], [3, 4]])); // [1, '3', 4]
console.log(flattedAndRemoveDups([[], [3, 4]])); // [3, 4]

  