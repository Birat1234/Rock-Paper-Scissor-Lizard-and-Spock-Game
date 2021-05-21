const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const result = document.getElementById('resultText');
const reset = document.getElementById('reset');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissor = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissor = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');


let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};


function resetSelected() {
  allGameIcons.forEach((i) => {
    i.classList.remove('selected');
  })
}

//Reset all
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';  
  result.textContent = '';
  resetSelected();
}

//Random Computer Choice
function computerRandomChoice() {
  const random = Math.random();
  
  if (random < 0.2) {
    computerChoice = 'rock';
  }else if (random < 0.4) {
    computerChoice = 'paper';
  }else if (random < 0.6) {
    computerChoice = 'scissors';
  }else if (random < 0.4) {
    computerChoice = 'lizard';
  }else {
    computerChoice = 'spock';
  }

}

// Passing values and styling on selecting player choice
function displayComputerChoice() {

  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '-- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = '-- Paper';
      break;
    case 'scissors':
      computerScissor.classList.add('selected');
      computerChoiceEl.textContent = '-- Scissor';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = '-- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = '-- Spock';
      break;
  
    default:
      break;
  }
}

//Check result and update score
function updateScore(playerChoice) {

  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie";
  }else{
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      result.textContent = "You Won";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else{
      result.textContent = "You Lost";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

// Call functions to process
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

//Passing values and styling on selecting player choice
function select(playerChoice) {

  checkResult(playerChoice);

  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '-- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = '-- Paper';
      break;
    case 'scissors':
      playerScissor.classList.add('selected');
      playerChoiceEl.textContent = '-- Scissor';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = '-- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = '-- Spock';
      break;
  
    default:
      break;
  }
}


//On start set initial values
resetAll();


