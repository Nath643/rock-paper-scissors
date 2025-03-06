let score = JSON.parse(localStorage.getItem('score')) || { // we use the name we used when inputting the item into local storage 'score'
  wins: 0,
  losses: 0, // this code does the same as the code below commented out
  ties: 0
};

updateScoreElement();

/*
if (!score) { // !score does the same as score === null
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {

// };

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => { // set interval returns an ID each time 
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.js-reset-score-button').addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
});

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event) => { // add event listener has the event object as a parameter in the function, like onkeydown which had the event object
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    score.wins++; 
  } else if (result === 'You lose') {
    score.losses++;
  } else if (result === 'Tie') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score)); // the first string is a name to access the value we save later, the second is the value being saved in local storage. Local storage only supports strings.

  updateScoreElement();

  document.querySelector('.js-moves')
    .innerHTML = `You 
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;
  document.querySelector('.js-result')
    .innerHTML = result;  
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random(); //generates a random number >= 0 and < 1

  let computerMove = ''; // any variable created inside {} brackets only exists in those brackets. Variables that can be accessed anywhere are global variables
  
  if (randomNumber >= 0 && randomNumber < 1 / 3) { // logical operators let us combine boolean values
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove; // a return statament lets us get a value out of a function when we call the function. We can also return a calculation or a variable (which can solve the problem of scope with a variable created inside a function, or anything that results in a value. An empty return returns that value undefined. Using return ends the function, it returns back to where the function was called. 
  // Returning a variable is preferable to using a gloabal variable to avoid naming conflicts
}