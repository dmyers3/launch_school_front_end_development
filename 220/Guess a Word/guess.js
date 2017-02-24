
  var randomWord = (function() {
    var words = ['apple', 'banana', 'orange', 'pear'];
  
    return function() {
      var randomIndex = Math.floor(Math.random() * words.length);
      return words.splice(randomIndex, 1)[0] || '';
    };
  })();
  
  var Game = function() {
    this.word = randomWord().split('');
    this.incorrectGuesses = 0;
    this.guesses = [];
    this.correctSpaces = 0;
    this.allowedWrongGuesses = 6;
    this.$spanSpaces = [];
  }
  
  Game.prototype.setBlanks = function() {
    $('#spaces').find('span').remove();
    var wordLength = this.word.length;
    for (var i = 1; i <= wordLength; i += 1) {
      $('#spaces').append('<span></span>');
    }
    this.$spanSpaces = $('#spaces span');
  }
  
  Game.prototype.displayMessage = function(message) {
    $('#message').text(message);
  }
  
  Game.prototype.addLettertoGuesses = function(char) {
    this.guesses.push(char);
    $('#guesses').append('<span>' + char + '</span>');
  }
  
  Game.prototype.correctGuess = function(char) {
    return this.word.indexOf(char) >= 0;
  }
  
  Game.prototype.correctGameplay = function(char) {
    var matchingIndices = this.findMatchingIndices(char)
    this.insertCorrectLetters(matchingIndices, char);
    this.correctSpaces += matchingIndices.length;
    if (this.correctSpaces === this.word.length) {
      this.endOfGame('win');
    }
  }
  
  Game.prototype.findMatchingIndices = function(guessChar) {
    var indexArray = [];
    this.word.forEach(function(wordChar, idx) {
      if (wordChar === guessChar) {
        indexArray.push(idx);
      }
    })
    return indexArray;
  }
  
  Game.prototype.insertCorrectLetters = function(matchingIndices, char) {
    var self = this;
    matchingIndices.forEach(function(idx) {
      self.$spanSpaces.eq(idx).text(char);
    });
  }
  
  Game.prototype.incorrectGameplay = function() {
    this.incorrectGuesses += 1;
    if (this.incorrectGuesses > this.allowedWrongGuesses) {
      this.endOfGame('lose');
      return;
    }
    $('#apples').attr('class', 'guess_' + this.incorrectGuesses);
  }
  
  Game.prototype.endOfGame = function(result) {
    if (result === 'lose') {
      this.displayMessage('Sorry, you lost.');
    } else {
      this.displayMessage('You won!');
    }
    $(document).off('keypress');
    $('a').show();
  }
  
  Game.prototype.init = function() {
    $('span').remove();
    $('#message').text('');
    $('#apples').removeClass();
    
    if (this.word[0] === undefined) {
      this.displayMessage("Sorry, I've run out of words!");
    }
    
    var self = this;
    $(document).on('keypress', function(e) {
      var char = String.fromCharCode(e.which).toLowerCase();
      // make sure keypress was a letter and that it wasn't already guessed
      if (char.match(/[a-z]/i) && self.guesses.indexOf(char) === -1) {
        self.addLettertoGuesses(char);
        if (self.correctGuess(char)) {
          self.correctGameplay(char);
        } else {
          self.incorrectGameplay();
        }
      };
      
    });
    
    this.setBlanks();
    console.log(newGame.word);
  }
  
  var newGame = new Game();
  newGame.init();
  
    
  $('a').on('click', function(e) {
    e.preventDefault();
    newGame = new Game();
    newGame.init();
    $('a').hide();
  })
  
  
  
 
  

// create array of spans for each letter so that correct letter can be added to right spot

// get key char from keypress - only consider letters
// if letter is not included in previous guesses (indexOf guess array)
//   add letter to guesses and add span to guesses div with that letter as text
// if letter doesn't have index in word array
//   increment incorrect guesses
//   if incorrect guesses > allowed incorrect guesses game over
//     display gameOver message using displayMessage
//     unbind keypress action
//     display link for new game
// if letter does have index in array
//   find all matching instances
//     use function and start with empty array - iterate through word chars and add
//     index of every matching character
//   iterate through matching indexes and add that letter to corresponding index of spans text
//   increment correct spaces by length of matching instance array
//   if length of correct spaces equals length of word all letters are guessed
//     display winning message using displayMessage
//     unbind keypress
//     display link for new game
    


