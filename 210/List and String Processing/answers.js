// Rectangle Areas

// var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// function totalArea(rectangles) {
//   var areas = rectangles.map(function(rectangle) {
//     return rectangle[0] * rectangle[1];
//   });
  
//   return areas.reduce(function(sum, area) {
//     return sum + area;
//   });
// } 

// console.log(totalArea(rectangles));

// function totalSquareArea(rectangles) {
//   var squares = rectangles.filter(function(rectangle) {
//     return rectangle[0] === rectangle[1];
//   });
  
//   return totalArea(squares);
// }

// console.log(totalSquareArea(rectangles));

// ***********************************************************


// Processing Releases

// var newReleases = [
//   {
//     'id': 70111470,
//     'title': 'Die Hard',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 654356453,
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
//   {
//     'title': 'The Chamber',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 675465,
//     'title': 'Fracture',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
// ];

// function processReleaseData(releases) {
//   var filteredReleases = releases.filter(function(release) {
//     return release['id'] !==undefined && release['title'] !== undefined;
//   });
  
//   return filteredReleases.map(function(release) {
//     var titleID = {};
//     titleID['id'] = release['id'];
//     titleID['title'] = release['title'];
//     return titleID;
//   });
// }

// console.log(processReleaseData(newReleases));

// ***********************************************************************

// Octal

// function octalToDecimal(number) {
//   var reversedNumArray = number.split('').reverse();
  
//   var octalValues = reversedNumArray.map(function(digit, power) {
//     return digit * Math.pow(8, power);
//   });
  
//   return octalValues.reduce(function(sum, value) {
//     return sum + value;
//   });
// }
// ************************************************************

// Sentiment Analysis 1
// input: text 
// output: list of positive words, list of negative words, and whether overall text is positive, negative, or neutral
// create empty output arrays for positive and negative words
// turn text into array, making it lowercase to compare
// iterate through text array, adding words to output arrays if they match words from postive/negative words. include duplicates
//   -use indexOf() if it gives -1 word is not in array, positive number or 0 item is in array
// after iteration get lenght of positive and negative output arrays to determine overall sentiment

// **************************************************************************

// Mail count
// input: string of email data
// output: number of email messages and date range

// to count email messages split string of email data by delimiter string - ##||## and count length of array

// to get date range:
//   - filter out messages to only get dates
//     - split email message string by #/#
//     - since every part of email is in same sequence, date will always be third element of each email
//       - index 0 sender
//       - index 1 subject
//       - index 2 date
//       - index 3 recipient
//       -       4 body
//       -       7 date
//       -       12 date
//       - index % 5 === 2
//   - iterate through dates, setting first one to both start date and end date
//   - for each successive date check if before or after start date/end date 
//     - if before set it equal to start date
//     - if after set it equal to end date
//     - could use two reduce statements?
    
  
// function mailCount(emailData) {
//   var emailCount = emailData.split('##||##').length;
//   console.log('Count of Email:' + emailCount);
  
//   var dates = emailData.match(/\d\d-\d\d-\d\d\d\d/g).map(function(date) {
//     return new Date(date);
//   });
  
//   var sortedDates = dates.sort(function(date1, date2) {
//     if (date1 > date2) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
  
//   var startDate = sortedDates[0];
//   var endDate = sortedDates[sortedDates.length - 1];
  
//   console.log('Date Range: ' + startDate.toDateString() + ' - ' + endDate.toDateString());
// }

// /* global emailData */
// mailCount(emailData);

// ******************************************************************************


// Longest Sentence

// input: text string
// output: longest sentence and word count

// split text into array of sentences by .?!

// split each sentence into array of words

// create longest sentence variable and set it equal to first sentence in sentences array.

// reduce array of sentences by looping through each sentence and comparing length of current sentence
// to previous longest sentence. if current sentence is longer it becomes new longest sentence

// after reduction return longest sentence and its count

function longestSentence(text) {
  // create array of sentences - each starts with one or more non sentence ending
  // characters and ends with sentence ending character.
  var sentencesArray = text.match(/[^.?!]+[.?!]/g);
  
  // create array of arrays, outer array being sentence and inner array containing
  // each word from sentence (words delimited by space character). 
  var sentenceWords = sentencesArray.map(function(sentence) {
    return sentence.match(/[^ ]+/g);
  });
  
  var longestSentence = sentenceWords.reduce(function(longest, current) {
    return current.length > longest.length ? current : longest;
  });
  
  
  console.log(longestSentence.join(' '));
  console.log('The longest sentence has ' + longestSentence.length + ' words.')
}

var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';
  
longestSentence(longText);