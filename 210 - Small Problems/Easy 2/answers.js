// input: string argument
// output: string argument

// all one or more duplicated characters in a row collapsed





// return '' if str is empty
// split string into array on empty ''
// create array used to build return string and initialize to first char of stringArray
// iterate through each char of array and push to return array if it is not equal
// to last character of return array
// return built array

// function crunch(str) {
//   if (str === '') {
//     return ''
//   }
  
//   var charArray = str.split('');
//   var dupsRemovedArray = [charArray[0]];
  
//   charArray.forEach(function(char) {
//     if (char !== dupsRemovedArray[dupsRemovedArray.length - 1]) {
//       dupsRemovedArray.push(char);
//     }
//     // console.log(dupsRemovedArray[dupsRemovedArray.length - 1])
//   });
//   return dupsRemovedArray.join('');
// }


// console.log(crunch('ddaaiillyy ddoouubbllee'));        // 'daily double'
// crunch('4444abcabccba');                  // '4abcabcba'
// crunch('ggggggggggggggg');                // 'g'
// crunch('a');                              // 'a'
// crunch('');                               // ''
// crunch('ddaaiillyy       ddoouubbllee');  // 'daily double'
// crunch('aA');                              // 'aA'

// *****************************************************************************

// Bannerizer

// input: string
// output: log to console string within box

//   box is 5 rows high - 2 on top and below, string in middle
//   one empty space + string + one empty space wide



// output line of plus + dashes equal to length of string + 2 + plus
// output vertical bar + empty spaces equal to length of string + 2 + vertical bar
// output vertical bar + space + string + space + vertical bar
// output vertical bar + empty spaces equal to length of string + 2 + vertical bar
// output line of plus + dashes equal to length of string + 2 + plus

// function logInBox(message) {
//   var messageLength = message.length;
//   var emptySpaces = '';
//   var dashes = ''
//   for (var i = 1; i <= messageLength + 2; i++) {
//     emptySpaces += ' ';
//     dashes += '-';
//   }
  
//   console.log('+' + dashes + '+');
//   console.log('|' + emptySpaces + '|');
//   console.log('| ' + message + ' |');
//   console.log('|' + emptySpaces + '|');
//   console.log('+' + dashes + '+');
// }

// console.log(logInBox('To boldly go where no one has gone before.'));
// console.log(logInBox(''));

// **************************************************************************

// Stringy Strings

// input: positive integer
// output: string of alternating 1's and 0's starting with 1

// start with empty return string
// checkChar = '1'

// use loop with input iterations
//   concat checkCar to return string
//   if checkCar === '1', make it '0', otherwise '1'

// return string

// function stringy(int) {
//   var binaryString = '';
//   var checkChar = '1';
  
//   for (var i = 1; i <= int; i += 1) {
//     binaryString += checkChar;
//     checkChar = checkChar === '1' ? '0' : '1';
//   }
  
//   return binaryString;
// }

// console.log(stringy(6));
// console.log(stringy(9));
// console.log(stringy(4));
// console.log(stringy(7));

// **************************************************************************

// input: positive integer
// output: index of first fibonacci number with num digits specified

// 1 based index

// build array of successive fib numbers using while loop
//   check each number added for its num of digits
//   when its num digits >= required digits from input
//   return that numbers index + 1
  
// function findFibonacciIndexByLength(digits) {
//   var fib1 = 1;
//   var fib2 = 2;
  
//   function numDigits(int) {
//     return String(int).length;
//   }
  
//   if (digits === 1) {
//     return 1;
//   }
  
//   while (numDigits(fibArray[fibArray.length - 1]) < digits) {
//     fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
//   }
  
//   return fibArray.length;
  
// }


// console.log(findFibonacciIndexByLength(2)); //7
// console.log(findFibonacciIndexByLength(10)); // 45
// console.log(findFibonacciIndexByLength(74)); // 74
// console.log(findFibonacciIndexByLength(1)); // 1

// *************************************************************************

// Right Triangles

// input: positive integer
// output: console logged triangle with sides of n stars

// first row 8 blanks 1 star
// 2nd row: 7 blanks 2 stars
// 3rd row 6 blanks 3 stars
// ...
// 9th row 0 blanks 9 stars

// write function to repeat characters set num times

// use for loop with n loops
//   i.e from 1 through 9
// each row n-index blanks, index stars

// function triangle(side) {
  
//   function repeatChar(char, times) {
//     var string = ''
//     for (var i = 1; i <= times; i += 1) {
//       string += char;
//     }
//     return string;
//   }
  
//   for (var j = 1; j <= side; j += 1) {
//     console.log(repeatChar(' ', side - j) + repeatChar('*', j));
//   }
// }

// triangle(9);

// **************************************************************************

// Double numbers

// input: number
// output: double input number if its not double number, return input number as is
//   if it is double number
  
// double number has to be even number of digits
// 1st half of digits is same as second half

// convert num to string
// get length
// if length is odd return num * 2

// assign 1st half of numstring to substring1
// assign 2nd half of numstring to substring2

// compare substrings - if same return num, if different return num * 2

// function twice(int) {
//   var numstring = String(Math.abs(int));
//   var length = numstring.length;
  
//   if (length % 2 === 1) {
//     return int * 2;
//   }
  
//   var substring1 = numstring.substr(0, length / 2);
//   var substring2 = numstring.substr(length / 2, length / 2);
  
//   return substring1 === substring2 ? int : int * 2;
// }

// console.log(twice(37)); // 74
// console.log(twice(44)); // 44
// console.log(twice(334433)); // 668866
// console.log(twice(444)); // 888
// console.log(twice(107)); // 214
// console.log(twice(103103)); // 103103
// console.log(twice(3333)); // 3333
// console.log(twice(7676)); // 7676
// console.log(twice(-37)); // -74
// console.log(twice(-44)); // -44

// ***************************************************************************

// Grade book

// input: three numbers between 0 and 100, assume input valid
// output: string letter grade corresponding to average of three input numbers

// create average variable and store avg of 3 numbers in it

// use if/else statements to assign letter grade based on the average

// function getGrade(grade1, grade2, grade3) {
//   var avgGrade = (grade1 + grade2 + grade3) / 3;
  
// }

// console.log(getGrade(95, 90, 93)); // 'A'
// console.log(getGrade(50, 50, 95)); // 'D'

// *********************************************************************

// input: string consisting of some words and non alphabetic characters
// output: string with nonalphabetic chars replaced with space

// if 2 or more non alphabetic chars are in a row only use one space



// use regEx to replace any non alphabetic char with space 
// use regEx to replace multiple spaces with one space

// start with empty string, iterate through each char and concat to empty string if
// previous char was not space


// function cleanUp(message) {
//   var onlyAlphabeticString = message.replace(/[^a-z]/gi, ' ');
//   return onlyAlphabeticString.replace(/[ ]{2}/g, '');
// }

// console.log(cleanUp('---what\'s my +*& line?'));      // ' what s my line '
// console.log(cleanUp('---What\'s My +*& line?'));      // ' What s My line '
// console.log(cleanUp('whats my line?'));      // 'whats my line '

// *********************************************************************** 

// input: year (positive integer)
// output: string that comprises numstring of century and correct appendix

// new centuries begin with years that end in 01

// 1: st
// 2: nd
// 3: rd
// 4-0: th
// 11-13: th

// figure out what century
//   take floor of ((input year - 1) and divide by 100). add 1 to result to get century
  
// if century is 1 digit use reg rules
// if 2 or morelook at last 2 digits of century num
//   if 11-13 use special rules otherwise use last digit and reg rules

// ****************************************************************************

// MEDIUM 1

// Alphabetical Numbers

// input: array of integers between 0 and 19 (assume valid input)
// output: array of integers sorted based on English words for each number

// console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);)
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// create constant array with english word corresponding to each index

// map input array to this constant array

// sort resulting array - sort automatically uses alphabetical sort

// ENGLISH_NUMBERS = ['zero', 'one', 'two']

// **************************************************************************

// Multipy all pairs

// input: two arrays can be varying lengths but not empty
// output: one single array composed of each element from array1 multiplied by each
//   element of array2, sorted in increasing order
  
// start with empty return array
// iterate through each number in array 1 and then also iterate through each num in array 2
//   multiply array1 num by array2 num and push that to return array
  
// sort array in ascending order
  
  
// function multiplyAllPairs(array1, array2) {
//   var sortedArray = [];
//   array1.forEach(function(num1) {
//     array2.forEach(function(num2) {
//       sortedArray.push(num1 * num2);
//     });
//   });
  
//   return sortedArray.sort(function(num1, num2) {
//     return num1 > num2 ? 1 : -1;
//   });
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
// console.log(multiplyAllPairs([-2, 4], [1, 2])); // [-4, -2, 4, 8]
// console.log(multiplyAllPairs([0, 4], [1, 2])); // [0, 0, 4, 8]

// ****************************************************************************

// Medium 2

// Swap Case

// input: string of any characters
// output: string with lowercase chars replaced by upper and vice versa. other chars
//   remain unchanged
  
// split input string into array of chars
// map char according to rules - if lower make upper, if upper make lower, else remain same
// return mapped array joined by ''
  
// console.log(swapcase('CamelCase')) // 'cAMELcASE'
// console.log(swapcase('Tonight on XYZ-TV')) // 'tONIGHT ON xyz-tv'
// console.log(swapcase('CamelCase &^'!)) // 'cAMELcASE &^'!

// *************************************************************************

Staggered Caps

input: string of any type of chars
output: string of chars with alternating upper and lower case chars
  starts with upper case
  doesn't change non alphabetic chars but keeps them as part of count
  
split string into array of chars
map each character based on index even indexes make caps, odd make lower
  
console.log(staggeredCase('I Love Launch School!'));     // 'I LoVe lAuNcH ScHoOl!'
console.log(staggeredCase('ALL_CAPS'));                  // 'AlL_CaPs'
console.log(staggeredCase('ignore 77 the 444 numbers')); // 'IgNoRe 77 ThE 444 NuMbErS'
console.log(staggeredCase(''));     // ''
console.log(staggeredCase('iA4i'));     // 'Ia4i'






