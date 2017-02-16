function printOddNumbers(int) {
  for (var i = 1; i <= int; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

// printOddNumbers(19);

function multiplesOfThreeAndFive() {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(i + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
  }
}

// multiplesOfThreeAndFive();

function printMultiples(number) {
  for (var i = 100; i >= 0; i--) {
    if (i % number === 0 && i % 2 === 1) {
      console.log(i);
    }
  }
}

// printMultiples(17);

function fizzbuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
  }
}

// fizzbuzz();

function isPrime(number) {
  var finalCheck = Math.floor(number / 2);
  if (number === 1 || number === 0) {
    return false;
  }
  for (var i = 2; i <= finalCheck; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// isPrime(1);  // false
// isPrime(2);  // true
// isPrime(3);  // true
// isPrime(43); // true
// isPrime(55); // false
// isPrime(0);  // false

function isXor(cond1, cond2) {
  if (!!cond1) {
    return !cond2;
  } else {
    return !!cond2;
  }
}

// PASSWORD GUESSER
// var password = 'password';

// for (var attempt = 0; attempt < 3; attempt++) {
//     var guess = prompt('What is the password');
//     if (guess === password) {
//       console.log('You have successfully logged in.');
//       break;
//     }
// }

// if (attempt === 3) {
//   console.log('You have been denied access.')
// }

// GRADE CALCULATOR
// var score1 = Number(prompt('Enter score 1:'));
// var score2 = Number(prompt('Enter score 2:'));
// var score3 = Number(prompt('Enter score 3:'));

// var average = (score1 + score2 + score3) / 3;

// if (average >= 90) {
//   var grade = "A";
// } else if (average >= 70) {
//   var grade = "B";
// } else if (average >= 50) {
//   var grade = "C";
// } else {
//   var grade = "F";
// }

// console.log('Based on the average of your 3 scores your letter grade is "' + grade + '".');
// console.log(average);


function gcd(int1, int2) {
  return int2 === 0 ? int1 : gcd(int2, int1 % int2);
}

// input - any integer
// output - all pairs of primes that sum to integer
// log null if input is odd or less than 4

// 4/5 will be only numbers with even primes

// check 3 and (input - 3) to see if both are primes
// check 5 and (input - 5) to see if both are primes

// check odd num and (input - odd num) to see if both are primes and log if so
// check up to input / 2

function checkGoldbach(number) {
  if (number === 5) {
    console.log("2" + " " + "3");
    return;
  } else if (number === 4) {
    console.log("2" + " " + "2");
    return;
  } else if (number < 4 || number % 2 === 1) {
    console.log(null);
    return;
  }
  
  var found = false;
  for (var i = 3, max = Math.floor(number/2); i <= max; i+=2) {
    if (isPrime(i) && isPrime(number - i)) {
      console.log(String(i) + " " + String(number - i));
      found = true;
    }
  }
  if (!found) {
    console.log(null);
  }
}

// checkGoldbach(5);
// checkGoldbach(100);


// input: positive integer n
// output: n rows of numbers and asterisks

// n= 7

// 1******  1 number  6 asterisks
// 12*****  2 numbers 5 asterisks
// 123****  3 numbers 4 asterisks
// 1234***  4         3
// 12345**  5         2
// 123456*  6         1
// 1234567  7         0

function generatePattern(n) {
  var number = '';
  var asterisks = '';
  
  for (var i = 1; i <= n; i++) {
    // sets number of asterisks for specific row
    for (var j = n - i; j > 0; j--) {
      asterisks += '*';
    }
    // every time through loop another number gets added on
    number += i;
    console.log(number + asterisks);
    // resets asterisks so it can be looped again
    asterisks = '';
  }
  
}

// generatePattern(7);

// indexOf
// input: 2 strings
// output: starting character of string1 that contains first instance of string2

// calculate length of string2
// starting at index 0 of string1, compare substrings of same length as length of string2
// if discrepancy is noted immmediately move to next character and start comparison again
// if strings are same return index

// number of times needed to run is string1.length - string2.length + 1

