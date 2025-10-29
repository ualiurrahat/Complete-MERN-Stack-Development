'use strict';

// selecting the elements
// for players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// players scores
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// current socres of players
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// dice and new game, roll dice, hold now buttons.
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// necessary variables to describes states of the game
let scores, activePlayer, currentScore, playing;
// function to initialize the game
const init = function () {
  // to store final scores of player 1 and 2
  scores = [0, 0];
  // to track the active player
  // if 0, then player 1 is active. if 1, then player 2
  activePlayer = 0;

  // to track current score
  currentScore = 0;
  // to check the state of the game
  // if value is true, means playing is happening,
  // if false, means game needs to be finished.
  playing = true;
  // starting conditions: both players score will be 0

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  //dice will be hidden
  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

// start the game with calling the initializer function
init();

// function to switch player
const switchPlayer = function () {
  // set current player's current score 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // set current score variable's value to 0
  currentScore = 0;
  // switch to the next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle the player--active class to show which player is active now
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generate a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // if rolled 1:
    if (dice !== 1) {
      // Add dice to the current score of the current player
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // Change later
    } else {
      switchPlayer();
    }
  }
});

// Hold button functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to the active player's final score
    scores[activePlayer] += currentScore;
    // show the final score of the active player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player's final score is >= 100
    // 2.1:if yes, finish the game
    if (scores[activePlayer] >= 100) {
      // finish the game by setting playing var value as false
      playing = false;
      // hide the dice roll
      diceEl.classList.add('hidden');
      // add the player--winner class
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // remove the active player class. since the player is winner now.
      // and we have added the player--winner class.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    // 2.2: if not, swith to the other player
    else {
      switchPlayer();
    }
  }
});

// New game button functionality
btnNew.addEventListener('click', init);
