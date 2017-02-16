// using console.log()
// loop structure 
//   for loop from 1 to 99, increment by 2
//   log each number since they will all be odd
  
// for (var i = 1; i <= 99; i += 2) {
//   console.log(i);
// }

// var i = 1;
// while (i <= 99) {
//   console.log(i);
//   i += 2;
// }
// *****************************************************************************

// same structure as above, just start with i = 2

// for (var i = 2; i <= 99; i += 2) {
//   console.log(i);
// }


// prompt user for length and width in meters
//   assign both to variables
// sqMeters = length * width
// create constant sqMetersToSqFeet = 10.7639
// sqFeet = sqMeters * constant

// log both to console

// **************************************************************************
// prompt user for input type (meters or feet) and assign that to variable inputType
// use if statement to create two different outputs
//   if feet
//     output area of room and convert by dividing by 10.7639

// var SQMETERS_TO_SQFEET = 10.7639;
// var length = prompt('Enter length of room in meters');
// var width = prompt('Enter width of room in meters');

// var sqMeters = length * width;
// var sqFeet = sqMeters * SQMETERS_TO_SQFEET;

// console.log('The area of the room is ' + sqMeters + ' square meters' +
//             ' (' + sqFeet + ' square feet).');
            
// ****************************************************************************
// use prompt to get input for bill and tip percentage, assign those to variables
//   - make sure to convert to number using parseInt()
  
// tip is equal to bill * tipPct / 100
// total equal to bill + tip

// format with 2 decimal places

// var bill = parseFloat(prompt('What is the bill?'), 10);
// var tipPct = parseFloat(prompt('What is the tip percentage?'), 10);

// var tip = bill * tipPct / 100;
// var total = bill + tip;

// console.log('The tip is $' + tip.toFixed(2));
// console.log('The total is $' + total.toFixed(2));

// ***************************************************************************

// prompt user for integer greater than 0, assign to variable
//   validate number by raising error if not integer > 0
  
// prompt user for sum or prouduct, assign to variable
//   can validate to make sure it is 's' or 'sum' or 'p' or 'product'
  
// if s
//   initialize sum at 0
//   loop from 1 to number, inclusive
//   sum = sum + index
// log sum at end

// if p
//   initialize product at 1
//   loop from 1 to number, inclusive
//   product = product * index
// log product at end

// var finalInt = parseInt(prompt('Please enter an integer greater than 0'), 10);
// var operation = prompt('Enter "s" to compute the sum, "p" to compute the product.');

// if (operation === 's' || operation === 'sum') {
//   var sum = 0;
//   for (var i = 1; i <= finalInt; i += 1) {
//     sum += i;
//   }
//   console.log('The sum of the integers between 1 and ' + finalInt + ' is ' + sum + '.');
// } else {
//   var product = 1;
//   for (var i = 1; i <= finalInt; i += 1) {
//     product *= i;
//   }
//   console.log('The product of the integers between 1 and ' + finalInt + ' is ' + product + '.');
// }

// ****************************************************************************


// input: 2 strings (str1, str2)
// output: 1 string equal to shorter string + longer string + shorter string

// compare str lengths using str.length;

// if str1.length greater than str2.legnth return str2 + str1 + str2
// otherwise return str1 + str2 + str1

// function shortLongShort(str1, str2) {
//   if (str1.length > str2.length) {
//     return str2 + str1 + str2;
//   } else {
//     return str1 + str2 + str1;
//   }
// }

// console.log(shortLongShort('abcde', 'deh'));

// ****************************************************************************

// input: year (integer) > 0
// output: true or false based on if leap year or not

// true if year % 400 === 0;
// true if year % 4 === 0 && year % 100 !== 0

// function isGregorianLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isLeapYear(year) {
//   if (year >= 1752) {
//     return isGregorianLeapYear(year);
//   } else {
//     return year % 4 === 0;
//   }
// }

// ************************************************************************


// input: integer greater than 1
// output: sum of all integers between 1 and input(inclusive) that are multiples of 3 or 5

// initialize sum at 0
// for loop
//   for every number in loop test if divisible by 3 or 5
//   if so, add that number to sum
// return sum

// function multisum(int) {
//   var sum = 0;
//   for (var i = 1; i <= int; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// ***************************************************************************


// input: string
// output: integer - sum of all ascii values of each character in input string

// split string into array of characters
// reduce
//   accumulator starts at 0
//   for each character add character.charCodeAt[0]
// return value of reduce method

function asciiValue(str) {
  return str.split('').reduce(function(sum, value) {
    return sum + value.charCodeAt(0);
  }, 0);
}