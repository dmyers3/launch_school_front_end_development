function isUppercase(string) {
  return string.toUpperCase() === string;
}

function removeVowels(array) {
  return array.map(function(string) {
    return string.replace(/[aeiou]/gi, '');
  });
}

console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); 

function letterCaseCount(string) {
  var caseCount = { lowercase: 0, uppercase: 0, neither: 0 };
  string.split('').forEach(function(char) {
    if (char.match(/[A-Z]/)) {
      caseCount.uppercase += 1;
    } else if (char.match(/[a-z]/)) {
      caseCount.lowercase += 1;
    } else {
      caseCount.neither += 1;
    }
  })
  return caseCount;
}

console.log(letterCaseCount('AbCd +Ef'));

function swapcase(string) {
  return string.split('').map(function(char) {
    if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    } else if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapcase('CamelCase'));

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

console.log(text.match(/\bsed\b/ig).length);



var a = [1, 2, 3, 4];

var test = a.reduce(function(obj, value) {
  obj['a' + value] = value;
  return obj;
}, {});

console.log(test);

