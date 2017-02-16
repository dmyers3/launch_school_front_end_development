var today = new Date();

function formatTime(date) {
  var hours = String(date.getHours());
  var minutes = String(date.getMinutes());
  
  if (minutes.length === 1) {
    minutes = '0' + minutes;  
  }
    
  if (hours.length === 1) {
    hours = '0' + hours;  
  }
    
  return hours + ':' + minutes;
  
}

// console.log(formatTime(today));
// console.log(typeof today);
// console.log(typeof today.getMinutes());

function greetings(nameArray, occupationObject) {
  var name = nameArray.join(' ');
  var occupation = occupationObject['title'] + ' ' + occupationObject['occupation'];
  
  console.log('Hello, ' + name + '! Nice to have a ' + occupation + ' around.' )
}

// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })

function repeatedCharacters(string) {
  var lowercaseString = string.toLowerCase();
  var lowerChars = lowercaseString.split('');
  var charCount = {};
  
  for (var i = 0; i < lowerChars.length; i++) {
    if (lowerChars[i] in charCount) {
      charCount[lowerChars[i]] += 1;
    } else {
      charCount[lowerChars[i]] = 1;
    }
  }
  
  for (var key in charCount) {
    if (charCount[key] === 1) {
      delete charCount[key];
    }
  }
  return charCount;
}

console.log(repeatedCharacters('Programming'));