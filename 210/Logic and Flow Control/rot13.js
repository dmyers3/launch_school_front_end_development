// input: string
// output: returns new string transformed by rot13 cipher

// initialize empty new string
// loop character by character through input string
//   -if character is letter, rotate it using cipher
//   -if not, leave it alone
//   -first half of alphabet add 13 to charCode
//   -2nd half of alphabet subtract 13 from charCode
//   -after charCode is altered convert back to character
// after loop is finished return new string

function rot13(string) {
  var transformedString = '';
  var length = string.length;
  var characterCode;
  
  for (var i = 0; i < length; i++) {
    if ((string[i] >= 'A' && string[i] <= 'M') ||
        (string[i] >= 'a' && string[i] <= 'm')) {
          characterCode = string[i].charCodeAt(0) + 13;
        } else if ((string[i] >= 'N' && string[i] <= 'Z') ||
          (string[i] >= 'n' && string[i] <= 'z')) {
          characterCode = string[i].charCodeAt(0) - 13;
        } else {
          characterCode = string[i].charCodeAt(0);
        }
    transformedString += String.fromCharCode(characterCode);
          
  }
  return transformedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));