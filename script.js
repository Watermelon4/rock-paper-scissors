// Variables
// Int
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const winScore = 5;

// Str
let playerSelection = "";
let computerSelection = "";
let roundResult = "";

// Dict
// Corresponds to player choice and defines the computer's choice.
let ruleset;
const rockRules = { 
  win: "paper", 
  draw: "rock", 
  lose: "scissors"
};
const paperRules = { 
  win: "scissors", 
  draw: "paper", 
  lose: "rock"
};
const scissorRules = { 
  win: "rock", 
  draw: "scissors", 
  lose: "paper"
};
const rulesets = {
  "rock": rockRules, 
  "paper": paperRules,
  "scissors": scissorRules
};

// JS nodes and events
const player = document.querySelector(".player");
const display = document.querySelector(".display");
const computer = document.querySelector(".computer");
const allButtons = document.querySelectorAll("button");

const playerButtons = player.querySelectorAll("button");
const rock = player.querySelector("#rock");
const paper = player.querySelector("#paper");
const scissors = player.querySelector("#scissors");

let playerImage = document.createElement("img");
let computerImage = document.createElement("img");

rock.addEventListener("click", function() {playRound("rock")});
paper.addEventListener("click", function() {playRound("paper")});
scissors.addEventListener("click", function() {playRound("scissors")});


// Functions
/**
 * 
 */
function playRound(buttonSelected) {
    playerSelection = buttonSelected;
    ruleset = rulesets[playerSelection];
    compareSelection();
    displaySelection();
    roundsPlayed++;
    if (playerScore == winScore || computerScore == winScore) {
      endGame();
    }
}

/**
 * 
 */
function compareSelection() {
  let computerInt = Math.floor(Math.random() * 3);
  switch(computerInt) {
    case 0:
      computerSelection = ruleset.lose;
      playerScore++;
      break;
    case 1:
      computerSelection = ruleset.draw;
      break;
    default:
      computerSelection = ruleset.win;
      computerScore++;
  }
  updateScores()
}


// UI Updates
function endGame() {
  allButtons.forEach(
    function(currentValue) {
      currentValue.disabled = true;
    },
  );
  displayWinner();
};

function displayWinner() {
  let winner = document.createElement("p");
  if (playerScore == winScore) {
    winner.textContent = "You Won!";
  }
  else {
    winner.textContent = "Cpu Won!";
  }
  display.insertBefore(winner, computerImage);
};

function updateScores() {
  const playerScoreCounter = player.querySelector("#score");
  const computerScoreCounter = computer.querySelector("#score");
  playerScoreCounter.textContent = playerScore;
  computerScoreCounter.textContent = computerScore;
}; 

function displaySelection() {
  if (roundsPlayed != 0) {
    display.removeChild(playerImage);
    display.removeChild(computerImage);
  }
  playerImage.src = `images/${playerSelection}.png`;
  playerImage.alt = `${playerSelection}`
  display.appendChild(playerImage);
  computerImage.src = `images/${computerSelection}.png`;
  computerImage.alt = `${computerSelection}`
  display.appendChild(computerImage);
};


// Main
