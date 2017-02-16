// input: string
// output: string with every character repeated

// split string into array of characters
// map each character into character + character
// join back together with no spaces

// function repeater(str) {
//   return str.split('').map(function(char) {
//     return char + char;
//   }).join('');
// }

// *****************************************************************************

// input: string
// output: string with every consonent repeated

// only difference is we need to check if character is consonant

// could use regEx match
// create consonant array and see if array.include(char)

// function doubleConsonants(str) {
//   return str.split('').map(function(char) {
//     if (char.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
//       return char + char;
//     } else {
//       return char;
//     }
//   }).join('');
// }

// *****************************************************************************

// input: positive integer
// output: positive integer reverse of input

// convert to string using String(int)
// convert to array of string characters using split
// reverse with array.reverse
// join to convert to string
// parseInt to convert back to int

// function reversedNumber(int) {
//   var reversedStringInt = String(int).split('').reverse().join('');
//   return parseInt(reversedStringInt); 
// }

// input: non empty string
// output: one or two characters that are middle of argument. 1 if odd, 2 if even

// determine if odd by using length and % 2 === 0

// determine center by using Math.floor(length / 2) length 6 would be 3
//                                                 length 5 would be 2
                                                 
// 5 letter word we want onion we want index 2
// 6 letter word we want onions we want index 2-3

// for odd length words return character at center using substr (center, 1)
// for even use substr(center - 1, 2)

// function centerOf(str) {
//   var center = Math.floor(str.length / 2);
//   if (str.length % 2 === 0) {
//     return str.substr(center - 1, 2);
//   } else {
//     return str.substr(center, 1);
//   }
// }

// *****************************************************************************

// function negative(num) {
//   return Math.abs(num) * -1;
// }

// function negative(num) {
//   return num < 0 ? num : -num;
// }

// ***************************************************************************

// input: integer greater than 0
// output: array of ints between 1 and input

// create empty array
// use for loop and loop between 1 and input, inclusive
// push each number to array
// return array at end

// function sequence(int) {
//   var sequenceArray = [];
//   for (var i = 1; i <= int; i += 1) {
//     sequenceArray.push(i);
//   }
//   return sequenceArray;
// }

// **************************************************************************

// input: string with first name, space, last name
// output, string with last name, comma, space first name

// split string into array on space
// reverse array
// join array into string with ", "

// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// what if more than one first name possible?

// split name into array on spaces
// create blank array
// push last element + ',' to empty array to get last name first
// then push each element in order starting at first elment and excluding last element
// join on space

// function swapNames(name) {
//   var nameArray = name.split(' ');
//   var formattedArray = [];
//   formattedArray.push(nameArray[nameArray.length - 1] + ',');
//   for (var i = 0; i < nameArray.length - 1; i += 1) {
//     formattedArray.push(nameArray[i]);
//   }
//   return formattedArray.join(' ');
// }

// ********************************************************************************

// input: two integers, first is count, second is first num in sequence
// output: array of integers, length = count and each is multipole of input num

// start with empty array
// use check clasue to see if count is 0, if so return empty array
// use for loop starting at 1 and going up to count(inclusive) 
//   push index * initial num to array
// return array at end

// function sequence(count, initialNum) {
//   var sequenceArray = [];
//   for (var i = 1; i <= count; i += 1) {
//     sequenceArray.push(i * initialNum);
//   }
//   return sequenceArray;
// }

// *****************************************************************************

// input: string
// output: string with input string in reverse

// split string into array on spaces
// reverse array
// join array with space

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

// input: string
// output: string with all fiver or more letter words reversed

// split string into array of words on ' '
// map that array
//   if str.length >=5
//     return string in reverse
//       splitting into array on '', array reverse, join on ''
      
// return mapped array joined on ' '

function reverseWords(str) {
  return str.split(' ').map(function(word) {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}