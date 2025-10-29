'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 50;
document.querySelector('.guess').value = 15;
*/

// creating a computer generated secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// to manage user's score
let score = 20;
// to manage high score
let highScore = 0;

// function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// handling click events on the 'check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // displaying results
  // case 1: when no number is inserted
  // in the input field but check is  clicked.
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }
  // case 2: when user wins
  else if (guess === secretNumber) {
    // display correct number message
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    // changing the background of the game
    document.querySelector('body').style.backgroundColor = '#60b347';
    // changing width of the guess element
    document.querySelector('.number').style.width = '30rem';
    // show the number in number plate
    document.querySelector('.number').textContent = secretNumber;
    // update high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // case 3: when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // displayinsg message: number is higher
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      // update and show score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});

// impelementing the game reset functionality
//1. Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
  // 2. In the handler function, restore initial values
  // of the 'score' and'secretNumber' variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //3. Restore the initial conditions of the message, number,
  //   score and guess input fields;
  // document.querySelector('.message').textContent = 'Start guessing ...';
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //   4. Also restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
