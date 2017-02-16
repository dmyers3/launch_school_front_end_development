function objectHasProperty(object, string) {
  var prop;
  
  for (prop in object) {
    if (prop === string) {
      return true;
    }
  }
  return false;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function wordCount(string) {
  var wordArray = string.split(" ");
  var wordCount = {};
  
  for (var i = 0; i < wordArray.length; i++) {
    if (wordCount[wordArray[i]]) {
      wordCount[wordArray[i]] += 1;
    } else {
      wordCount[wordArray[i]] = 1;
    }
  }
  return wordCount;
}

function rand(start, end) {
  return Math.floor(start + (end - start + 1) * Math.random());
}

