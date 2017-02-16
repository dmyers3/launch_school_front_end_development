document.addEventListener('DOMContentLoaded', function(event) {
  var max = 100;
  var min = 1;
  var answer = Math.floor(Math.random() * max) + min;
  
  document.querySelector('p').textContent = 'Guess a number from 1 to 100';
  
  var form = document.querySelector("form");
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var guess = parseInt(document.getElementById('guess').value, 10);
    var message;
    
    if (guess > answer) {
      message = 'Your guess was too high.';
    } else if (guess < answer) {
      message = 'Your guess was too low.';
    } else {
      message = "You guessed right!"
    }
    
    document.querySelector('p').textContent = message;
  });
  
  var newGame = document.querySelector('a');
  
  newGame.addEventListener('click', function() {
    answer = Math.floor(Math.random() * max) + min;
    document.querySelector('p').textContent = 'New Game - Guess a number from 1 to 100';
  })
  
});





document.addEventListener('DOMContentLoaded', function() {
  var answer, guesses;
  console.log(this);
  var form = document.querySelector('form');
  var input = document.querySelector('#guess');
  
  var link = document.querySelector('a');

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    // paragraph declared and assigned within function scope
    var paragraph = document.querySelector('p');
    paragraph.textContent = "Guess a number from 1 to 100";
    console.log(this)
  }
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(this);
    var guess = parseInt(input.value, 10);
    var message;

    guesses++;
    
    if (guess === answer) {
      message = 'You guessed it! It took you ' + guesses + ' guesses.';
    } else if (guess > answer) {
      message = 'My number is lower than ' + guess;
    } else {
      message = 'My number is higher than ' + guess;
    }
    // paragraph declared and assigned within function scope
    var paragraph = document.querySelector('p');
    paragraph.textContent = message;
  });

  link.addEventListener('click', function(event) {
    event.preventDefault();
    // If link is clicked an Uncaught ReferenceError is thrown since this function
    // has no access to either of the paragraph variables defined in the other
    // two functions. It would work if paragraph was declared and assigned on
    // line 6, since functions have access to variables declared in outer scopes.
    paragraph.textContent = "Guess a number from 1 to 100";
    console.log(this);
    newGame();
  });
  
  newGame();
});

document.ge