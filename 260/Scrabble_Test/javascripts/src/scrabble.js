// input: string
// output: integer word score

// input string only has characters
// use hash/object to store character as key, character value as value

// split string up into array of characters, map to integer values, reduce by summing
// each character

// downcase each character to avoid case issues

var CHAR_VALUES = { 'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2, 'h': 4,
  'i': 1, 'j': 8, 'k': 5, 'l': 1, 'm': 3, 'n': 1, 'o': 1, 'p': 3, 'q': 10, 'r': 1,
  's': 1, 't': 1, 'u': 1, 'v': 4, 'w': 4, 'x': 8, 'y': 4, 'z': 10
};

function Scrabble(word) {
  if (!word) {
    return 0;
  }
  
  return word.split('').map(function(char) {
    return CHAR_VALUES[char.toLowerCase()];
  }).reduce(function(sum, value) {
    return sum + value;
  });
}