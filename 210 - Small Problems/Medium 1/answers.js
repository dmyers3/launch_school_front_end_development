// Alphabetical Numbers

// input: array of integers 0-19
// output: return array of integers sorted by alphabetical name

// create object to map integers to alphabetical name
// use map function to create array of alphabetical names
// sort array
// turn back into integers

// function alphabeticNumberSort(integers) {
//   var integerAlpabetMap = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
//   'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
//   'eighteen', 'nineteen'];
  
//   var alphabeticalNumbersSorted = integers.map(function(integer) {
//     return integerAlpabetMap[integer];
//   }).sort();
  
//   return alphabeticalNumbersSorted.map(function(integer) {
//     return integerAlpabetMap.indexOf(integer);
//   }); 
// }

// var test = alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

// console.log(test);

// ********************************************************************************


// Sum of Digits

// input: positive integer
// output: sum of digits

// function sum(integer) {
  
//   return integer.toString().split('').reduce(function(sum, current) {
//     return Number(sum) + Number(current);
//   });
// }

// console.log(sum(123456789));

// Multiply All Pairs

// input: two arrays with numbers
// output: one array with product of every pair of numbers between two arrays

// *****************************************************************************

// function multiplyAllPairs(array1, array2) {
//   var productArray = [];
//   array1.forEach(function(element1) {
//     array2.forEach(function(element2) {
//       productArray.push(element1 * element2);
//     });
//   });
//   return productArray.sort(function(number1, number2) {
//     return number1 > number2 ? 1 : -1;
//   });
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));

// ***************************************************************************

// Sum of Sums

// input: array of numbers
// output: sum of each leading subsequence

// for loop from 1 to length? create slice starting at first index and having
// length of iterator

// function sumOfSums(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i += 1) {
//     var subArray = array.slice(0, i + 1);
//     sum += subArray.reduce(function(total, value) {
//       return total + value;
//     });
//   }
//   return sum;
// }

// console.log(sumOfSums([1, 5, 7, 3]));

// *****************************************************************************

// Leading Substrings

// input: string
// output: array of strings, each one a substring of input ordered from short to long

// output has same number of elements as string length

// split string into array
// map to alter each character

// function substringAtStart(string) {
//   var stringChars = string.split('');
//   var substrings = [stringChars[0]];
//   for (var i = 1; i < stringChars.length; i += 1) {
//     substrings[i] = substrings[i - 1] + stringChars[i];
//   };
//   return substrings;
  
  
// }

// substringAtStart('xyzzy');

// ***************************************************************************

// All Substrings

// input: string
// output: array of strings containing all possible substrings ordered by char position



// function substrings(string) {
//   var substrings = [];
//   for (var i = 0; i < string.length; i += 1) {
//     substrings.push(substringAtStart(string.slice(i, string.length)));
//   }
//   return [].concat.apply([], substrings);
// }

// console.log(substrings('abcde'));

// ********************************************************************************

// Palindromic Substrings

// function palindromes(string) {
//   return substrings(string).filter(function(substring) {
//     return substring.split('').reverse().join('') === substring && substring.length > 1;
//   });
// }

// console.log(palindromes('madam'));

// *************************************************************************************

// Grocery List

// input: array of arrays, with each inner element being item and quantity
// output: single array with each inner element listed number of times = to quantity

// function buyFruit(list) {
//   var items = [];
//   list.forEach(function(item) {
//     items = items.concat(listQuantity(item));
//   });
//   return items;
// }

// function listQuantity(array) {
//   var items = [];
//   for (i = 0; i < array[1]; i += 1) {
//     items.push(array[0]);
//   }
//   console.log(items);
//   return items;
// }

// console.log(buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]));

// **************************************************************************

// Inventory Item Transactions

// input: inventory id and array of Objects (transactions)
// output: array of Objects matching specific ID

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function(transaction) {
    return transaction.id === inventoryItem;
  });
}

var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

console.log(transactionsFor(101, transactions));

// ***********************************************************************

// Inventory Item Availability

function isItemAvailable(inventoryItem, transactions) {
  quantity = 0;
  transactionsFor(inventoryItem, transactions).forEach(function(transaction) {
    transaction.movement === 'in' ? quantity += transaction.quantity : quantity -= transaction.quantity;
  });
  return quantity > 0;
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));