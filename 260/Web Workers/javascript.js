// input: string and number of consecutive digits
// output: largest product of specified consecutive digits within string

// "73946182"

// 2 - 36
// 1 - 9
// 3 - 216
// 0 - 0

// store largest product initially at 0, if subset is greater than largestProduct, set
// largestProduct to new product

// for n=2
// start at position 0, and multipy 0 * 1, 1 * 2, 2 * 3 etc

// for n=3 0*1*2, 1*2*3

// 10 digit string will have last digit with index of 9
// initial index goes up from 0 to length - n
//   ex n=2 we need index 8,9
//     n=3 we need 7,8,9
     
// inner loop we need n digits
//   so get substring starting at first digit in current spot in loop and contains n digits
//   split string into array of digits and map to integers then reduce product
  
// compare result to current largestProduct
     
function largestProduct(digitString, numDigits) {
  stringLength = digitString.length;
  var currentMax = 0;
  for (var i = 0; i <= stringLength - numDigits; i += 1) {
    var substring = digitString.substr(i, numDigits);
    var digitArray = substring.split('').map(function(digit) {
      return parseInt(digit);
    });
    console.log(digitArray);
    var iterationProduct = digitArray.reduce(function(acc, val) {
      return acc * val;
    });
    console.log(iterationProduct);
    if (iterationProduct > currentMax) {
      currentMax = iterationProduct;
    }
  }
  return currentMax;
}
     
     
worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
  console.log(e.data);
}, false);

