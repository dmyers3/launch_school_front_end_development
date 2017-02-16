// Comparing Version Numbers

// input: string of digits separated by periods. starts and ends with digits
//   - input is two such strings
// output: 1 if version1 > version2
//         -1 if version 1 < version2
//         0 if equal
        
// compare left most digit before 1st period
// if version1 has higher digit it returns 1

// if same then go onto next set of digits after 1st period and repeat comparison

// 1.2.3 convert string to array delimited by periods - [1, 2, 3]

// 1.21.2 - [1, 21, 2]

// 1 vs 2.2.9.45.32 
// [1] [1, 2]

// [1, 0] 

// if versions are equal and 1 version has more characters remaining, compare those
// extra digits to 0

// figure out which resulting array is longest, use a for loop with number of iterations
// equal to that array's length

// compare each index of array, i.e array1[0] vs array2[0]. if one is different early
// return according to rules

// if not different keep iterating until end. at end if still don't have one different
// return 0

// function compareVersions(version1, version2) {
//   if (version1.match(/[^\d.]/) || version2.match(/[^\d.]/)) {
//     return null;
//   }
  
//   var v1Array = version1.split('.').map(function(num) {
//     return parseInt(num, 10);
//   });
//   var v2Array = version2.split('.').map(function(num) {
//     return parseInt(num, 10);
//   });
  
//   var longestArray = v1Array.length > v2Array.length ? v1Array : v2Array;
  
  
  
//   for (var i = 0; i < longestArray.length; i += 1) {
//     if (v1Array[i] === undefined) {
//       v1Array.push(0)
//     }
    
//     if (v2Array[i] === undefined) {
//       v2Array.push(0)
//     }
    
//     if (v1Array[i] > v2Array[i]) {
//       return 1;
//     } else if (v2Array[i] > v1Array[i]) {
//       return -1;
//     }
//   }
  
//   return 0;
  
// }

// console.log(compareVersions('1..0', '1.0.5'));

// *************************************************************************



// input: string of varying length, containing digits, spaces, dash, dot, parentheses
// output ' 10 digit string of numbers'

// if number is bad output 10 0's

// bad numbers: less than 10 digits
//             11 digit number with first digit not equal to 1
//             12 or greater digits
             
// parse input into just digits using regex match
// look at digit length
// for <10 or >11 return 10 0'
// for 11 check first digit
// for 10 return digits

// function phoneNumberCleanup(number) {
//   var digitArray = number.match(/\d/g);
//   if (digitArray.length < 10 || digitArray.length > 11) {
//     return '0000000000';
//   } else if (digitArray.length === 10) {
//     return digitArray.join('');
//   } else if (digitArray[0] === '1') {
//     return digitArray.slice(1).join('');
//   } else {
//     return '0000000000';
//   }
  
// }


// console.log(phoneNumberCleanup('9999999999')); //good
// console.log(phoneNumberCleanup('999-999-9999')); //good
// console.log(phoneNumberCleanup('999999999')); //bad
// console.log(phoneNumberCleanup('999999999999')); //bad
// console.log(phoneNumberCleanup('99999999999')); //bad
// console.log(phoneNumberCleanup('19999999999')); //good
// console.log(phoneNumberCleanup('9999.99.9()999')); //good

// **************************************************************************


// Luhn number

// input: string of numbers (parse string and take out any non numeric characters)
// output: either 'valid' or 'invalid' based on rules

// Algorithm:

// create array of digits from input string while removing invalid characters
//   can use regex match
  
// map string digits to integers

// reverse array so that we can start index 0 = rightmost digit

// map each digit to new number based on rule - every second digit gets doubled
//   if doubling creates number greater than 10 subtract 9
  
// reduce array by summing each digit

// take reduced sum, find remainder when dividing by 10

// if remainder = 0 number is valid, invalid otherwise



// function luhn(numStr) {
//   if (numStr === '') {
//     return 'invalid';
//   }
  
//   var numArray = numStr.match(/\d/g).map(function(digit) {
//     return parseInt(digit, 10);
//   }).reverse();
  
//   // console.log(numArray);
  
//   // takes numArray and doubles every second digit, subtracting 9 if greater than 10
//   var formattedNumArray = numArray.map(function(digit, index) {
//     if (index % 2 === 1) {
//       var doubled = digit * 2;
//       return doubled >= 10 ? doubled - 9 : doubled;
//     } else {
//       return digit;
//     }
//   });
  
//   // console.log(formattedNumArray);
  
//   var checkSum = formattedNumArray.reduce(function(sum, digit) {
//     return sum += digit;
//   });
  
//   // console.log(checkSum);
  
//   return checkSum % 10 === 0 ? 'valid' : 'invalid';
// }


// console.log(luhn('1111')); //'invalid'
// console.log(luhn('8763')); //'valid'
// console.log(luhn('2323 2005 7766 3554')); //'valid'
// console.log(luhn('')); //'invalid'


// input: same as above
// output: numstring with valid checksum

// 876 3
// 323 2005 7766 355 4

// '876'

// '8760'
// '8761'
// '8762'
// '8763'
// '8764'
// '8765'
// '8766'
// '8767'
// '8768'
// '8769'

// function makeLuhn(numStr) {
//   for (var i = 1; i <=9; i += 1) {
//     if (luhn(numStr + i.toString()) === 'valid') {
//       return numStr + i.toString();
//     }
//   }
//   return numStr;
// }

// console.log(makeLuhn('876')); //'8763'
// console.log(makeLuhn('2323 2005 7766 355')); //'2323 2005 7766 3554'
// console.log(makeLuhn('')); //'0'

// input: string of characters
// output: boolean whether or not we can spell word

//   case insensitive

// return false if string contains non letter characters or is empty

// convert string to all lowercase, then split into array of characters

// map characters to their counterpart if in char hash, if not keep it the same

// create empty array and add characters one by one, if character to be added is already
// in array return false

// examine characters one at a time
//   if characters value is false in characterTRacking return false
//   after each character turn that characters value in matching characters to false
//   also turn its corresponding sibling character to false
// if make it through entire loop without encountering false value then return true




// function isBlockWord(word) {
//   var CHARMAP = { 
//     b: 'o', c: 'p', d: 'q', f: 's', g: 't', h: 'u', j: 'w', l: 'y', n: 'a',
//     r: 'e', v: 'i', x: 'k', z: 'm', 
//   };
  
//   if (word.match(/[^a-z]/i) || word === '') {
//     return false;
//   }
  
//   var charArray = word.toLowerCase().split('').map(function(char) {
//     if (CHARMAP[char]) {
//       return CHARMAP[char];
//     } else {
//       return char;
//     }
//   });
  
//   var charCheckArray = [];
  
//   for (var i = 0; i < charArray.length; i += 1) {
//     if (charCheckArray.indexOf(charArray[i]) >= 0) {
//       return false;
//     }
//     charCheckArray.push(charArray[i]);
//   }
//   return true;
// }

// console.log(isBlockWord('batch')); // true 
// console.log(isBlockWord('tag')); // false
// console.log(isBlockWord('batch1')); // false
// console.log(isBlockWord('')); // false
// console.log(isBlockWord('time')); // true
// console.log(isBlockWord('BATCH'));
// console.log(isBlockWord('BUTCH'));


// input: short hand string representation of range
//   can be separated by '-', ':', '..'
//   numbers are always increasing


// output: array of complete numbers

// split string into array on commas 

// use empty array to build list of complete numbers

// loop through each element of array

//   if range
  
//     find starting and ending number of range
//     check starting number to make sure its valid
//     add starting num through ending num to build array
//     set end number as new biggest number
    
//   if number
//     check num to make sure its valid
//     add to build array
//     make new biggest number
    
    
// valid number -

//   keep track of biggest number used so far
//   i.e. in 1, 3, 7, 2 it will be 1, 3, 7
  
//   keep track of amount to add to each number, starts with 0 and increments by 10
//   every time new number is equal or smaller than previous biggest digit
    
//   when next number to add is equal or smaller than biggest digit need to add 10 to it
//     1, 3, 7, 12
    
//   make 12 new biggest number and every number gets 10 added to it
  
//   1, 3, 7, 2, 4 .. 4 will be 14 and be new biggest
  
//   next number is 1, 11 < 14 so add 10 extra to number to make 21
  
//   21 is new biggest number and now 20 added to every number to compare













// function shortRangeToLong(range) {
//   // if (range.match(/[^\d\,\-\:(..)]/)) {
//   //   return 'invalid format';
//   // }
  
//   var longHandArray = [];
//   var biggestNumber = -Infinity;
//   var addToNumber = 0;
  
//   function isRange(string) {
//     return !!string.match(/[\-\:]/);
//   }
  
//   function NumTooHigh(number, biggestNumber) {
//     if (number + addToNumber <= biggestNumber) {
//       addToNumber += 10;
//     }
//   }
  
//   var shortHandArray = range.split(',');
  
//   shortHandArray.forEach(function(element) {
//     if (isRange(element)) {
//       var rangeStart = parseInt(element[0], 10);
//       var rangeEnd =  parseInt(element[-1], 10);
      
//       NumTooHigh(rangeStart, biggestNumber);
      
//       for (var i = rangeStart; i <= rangeEnd; i +=1) {
//         longHandArray.push(i + addToNumber);
//       }
      
//       biggestNumber = rangeEnd + addToNumber;
//     } else {
//       var ElementAsNum = parseInt(element, 10);
//       NumTooHigh(element, biggestNumber);
      
//       longHandArray.push(ElementAsNum + addToNumber);
//       biggestNumber = ElementAsNum + addToNumber;
//     }
//   });
  
//   return longHandArray;
// }

// console.log(shortRangeToLong('1, 3, 7, 2, 4, 1')) // [1, 3, 7, 12, 14, 21]
// console.log(shortRangeToLong('1..3, 1..2')) // [1, 2, 3, 11, 12]
// console.log(shortRangeToLong('1-3, 1-2')) // [1, 2, 3, 11, 12]
// console.log(shortRangeToLong('1:3, 1:2')) // [1, 2, 3, 11, 12]
// console.log(shortRangeToLong('-1, 0, 5, 3')) // [-1, 0, 5, 13]
// console.log(shortRangeToLong('1, 2?3')) // 'invalid format'




// Rail Fence Cipher

// both encoding and decoding

// input: string
// output: string

// requirement: need number of rails

// characters go diagonal down rails then back up


// W*****I*****R**
// *E***D*S***E*E*
// **A*E***C*V***D
// ***R*****O*****

// 1st row 0 empty spots then character then 5 empty then character every 5
// 1 empty spot then character, then char every 3 then 1 then 3 etc
// 2 empty spots then char every 1 then 3 then 1 then 3
// 3 empty spots then char every 5

// Data Structure- array of arrays

// Encoding:

// loop through every character, adding character to row it belongs to
// 1st char in 1st array
// 2nd char in 2nd array
// 3rd char in 3rd array etc up to N number of arrays

// 0 1 2 3 2 1 0 1 2 3 2 1 0

// outer rows down
// inner rows up

// know pattern for any N is 0 - N, N-1 - 1 (on the way back up)

// loop through chars (outer loop)
//   assign successive chars 
//   inner have 2 functions
//     1) all rows (0-N) counting up
//     2) inner rows (N-1 - 1) counting down


// AFTER RUNNING THROUGH LOOP 

// we'll have n rails number of arrays
// just want to concat all rays together then join with ''

// 20 characters 3 rails
// using 0 index

// 0 index char remainder 3 rails (0 % 3) = 0 we want in 0 index array (first rail)
// 1 index char remainder 3 rails (1 % 3) = 1 we want in 1 index array 

function railEncode(str, rails) {
  var railsArray = [];
  var loopCount = Math.ceil(str.length / (rails * 2 - 2));
  var nextChar = 0;
  
  function assignCharsDown() {
    for (var k = 0; k < rails; k += 1) {
      if (str[nextChar]) {
        railsArray[k].push(str[nextChar]);
      }
      nextChar += 1;
    }
  }
  
  function assignCharsUp() {
    for (var l = rails - 2; l > 0; l -= 1) {
      if (str[nextChar]) {
        railsArray[l].push(str[nextChar]);
      }
      nextChar += 1;
    }
  }
  
  for (var i = 0; i < rails; i += 1) {
    railsArray[i] = [];
  }
  
  for (var j = 0; j < loopCount; j += 1) {
    assignCharsDown();
    assignCharsUp();
  }
  
  console.log(railsArray);
  console.log(loopCount);
  
  return railsArray.reduce(function(accumulator, array) {
    return accumulator.concat(array);
  }, []).join('');
}





// console.log(railEncode('WEAREDISCOVEREDFLEEATONCE', 3)) // 'WECRLTEERDSOEEFEAOCAIVDEN'
// console.log(railEncode('WEAREDISCOVERED', 4)) // 'WIREDSEEAECVDRO'
// console.log(railEncode('WEAREDISCOVEREDFLEEATONCE', 5))
// console.log(railEncode('WEAREDISCOVEREDFLdddddddddddddasdfddssdfsdfsdsfssfdfsEEATONCE', 7))
// console.log(railEncode('WEAREDISCOVEREDFLdddddddddddddasdfddssdfsdfsdsfssfdfsEEATONCE', 8))

console.log(railDecode('WECRLTEERDSOEEFEAOCAIVDEN', 3)) // 'WEAREDISCOVEREDFLEEATONCE'
console.log(railDecode('WIREDSEEAECVDRO', 4)) // 'WEAREDISCOVERED'

// to Decode

// know how long length of string is (rails * 2 - 2)

// run loop for str length / loop length (round up)

// if we know how many chars long row is we can create array of arrays, then loop through them
//   ex. 25 chars 3 rows
//   we know that for every entire loop (both up and down rails) first row and last
//   row will have 1 char, middle rows 2 chars
//   num loops = math.floor(str length / loop length) 
//   remainder is str length % loop length
//   for 25 chars 3 rows its 6 loops. remainder 1 so it goes 6 12 6 and remainder
//   goes to first rail since its beginning of loop 
  
// create rail length array like [6, 12, 6] with math.floor, then start adding 1 to each
// row using remainder to get accurate rail lengths

// create array of arrays with each rail being array, split string into individual characters

// create empty result array

// create loop to get chars in correct order
// structure is first rail, all inner rails, last rail, all inner rails. repeat until done
 
// join result array with '' to get decoded string




function railDecode(str, rails) {
  var railChars = [];
  var railsArray = [];
  var fullLoops = Math.floor(str.length / (rails * 2 - 2));
  var loops = Math.ceil(str.length / (rails * 2 - 2));
  var remainingChars = str.length % (rails * 2 - 2);
  var resultArray = [];
  
  function assignCharsPerRail() {
   
    
    // assign num chars for each full loop (1 per outer row, 2 per inner)
    railChars[0] = fullLoops;
    railChars[rails - 1] = fullLoops;
    for (var i = 1; i < rails - 1; i += 1) {
      railChars[i] = 2 * fullLoops;
    }
    
    // assign leftover chars (starting at top to bottom then snaking back up)
    for (var j = 0; j < rails; j += 1) {
      if (remainingChars > 0) {
        railChars[j] += 1;
        remainingChars -= 1;
      }
    }
    
    for (var k = rails - 2; k > 0; k -= 1) {
      if (remainingChars > 0) {
        railChars[k] += 1;
        remainingChars -= 1;
      }
    }
    
    console.log(railChars);
  }
  
  
  function createRailsArray() {
    var startingChar = 0
    for (var m = 0; m < rails; m += 1) {
      railsArray[m] = str.substr(startingChar, railChars[m]).split('');
      startingChar += railChars[m];
    }
    
    console.log(railsArray);
  }
  
  function zigZagDecode() {
    function assignUp() {
      
      for (var y = 0; y < rails; y += 1) {
        if (railsArray[y][0]) {
          resultArray.push(railsArray[y].shift());
        }
      }
      
    }
    
    function assignDown() {
      
      for (var x = rails - 2; x > 0 ; x -= 1) {
        if (railsArray[x][0]) {
          resultArray.push(railsArray[x].shift());
        }
      }
    }
    
    
    for (var z = 0; z < loops; z += 1) {
      assignUp();
      assignDown();
    }
    
    
  }
  
  assignCharsPerRail();
  createRailsArray();
  zigZagDecode();
  return resultArray.join('');
  
}
