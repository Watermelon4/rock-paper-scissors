/*
Outline

Requirements
  - 5 games
  - display messages each round with choices and result
  - user input case insensitive
  - display final winner

Extras
  - reject improper input: implemented
  - play again: not implemented

Variables
  - int: playerScore (<= numRounds)
  - int: computerScore (<= numRounds)
  - int: roundsPlayed (< numRounds)
  - int: numRounds (int, > 0)
  - str: playerSelection (rock, paper, scissors)
  - str: computerSelection (rock, paper, scissors)
  - str: roundResult (win, lose, draw)
  - dict: ruleset (rockRules, paperRules, scissorRules)
*/


// Variables

// Int
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const numRounds = 5;

// Str
let playerSelection;
let computerSelection;
let roundResult;
const PROMPT_MESSAGE = "rock, paper or scissors?";
const GAME_WIN_MESSAGE = "You won the game!";
const GAME_DRAW_MESSAGE = "You and the computer tied!"
const GAME_LOSE_MESSAGE = "You lost the game!";
const INVALID_INPUT = "Invalid input, please try again.";

// Dict
// Corresponds to play choice and defines the computer's choice.
// player = rock -> rockRules, computerInt = 0 -> cpu = lose
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


// Functions

/**
 * Play one round of rock, paper, scissors.
 */
function playRound() {
  playerSelection = getplayerSelection();
  ruleset = rulesets[playerSelection];
  roundResult = compareSelection();
  console.log("\n");
}
/**
 * Play <numRounds> rounds of rock, paper, scissors.
 */
function game() {
  for (let roundsPlayed = 0; roundsPlayed < numRounds; roundsPlayed++) {
    playRound()
  }
  if (playerScore > computerScore) {
    console.log(GAME_WIN_MESSAGE)
  }
  else if (computerScore > playerScore) {
    console.log(GAME_LOSE_MESSAGE)
  }
  else {
    console.log(GAME_DRAW_MESSAGE)
  }
}

/**
 * Updates the game when the player wins and prints a summary of the round 
 * in the console.
 */
function playerWinsRound() {
  playerScore++;
  let roundWinMessage = `You won the round! You chose ${playerSelection} `
  + `and the computer chose ${computerSelection}.`;
  console.log(roundWinMessage);
}

/**
 * Updates the game when there is a draw and prints a summary of the round 
 * in the console.
 */
function drawRound() {
  let roundDrawMessage = `Draw! You both chose ${playerSelection}.`;
  console.log(roundDrawMessage);
}

/**
 * Updates the game when the computer wins and prints a summary of the round 
 * in the console.
 */
function computerWinsRound() {
  computerScore++;
  let roundLoseMessage = `You lost the round! You chose ${playerSelection} `
  + `and the computer chose ${computerSelection}.`;
  console.log(roundLoseMessage);
}

/**
 * Returns the result of the comparison between the player and computer. 
 * Sets <computerSelection> based on result. Calls another function to update 
 * the game with the results. Prints the current scores.
 */
function compareSelection() {
  let computerInt = Math.floor(Math.random() * 3);
  switch(computerInt) {
    // player win, cpu lose
    case 0:
      computerSelection = ruleset.lose;
      roundResult = "win";
      playerWinsRound();
      break;
    // draw
    case 1:
      computerSelection = ruleset.draw;
      roundResult = "draw";
      drawRound();
      break;
    // player lose, cpu win
    default:
      computerSelection = ruleset.win;
      roundResult = "lose";
      computerWinsRound();
  }
  let displayPlayerScore = `Your score is ${playerScore}.`;
  let displayComputerScore = `The computer's score is ${computerScore}.`;
  console.log(displayPlayerScore);
  console.log(displayComputerScore);
  return roundResult;
}

/** 
 * Takes <userInput> and compares it to the valid options. If it matches, then 
 * return true, otherwise return false.
 */
function checkUserInput(userInput="") {
  if (userInput == null) {
    return false;
  }

  switch(userInput) {
    case "rock": 
    case "paper": 
    case "scissors": 
      return true;
    default:
      return false;
  }
}

/** Gets <userInput> from the prompt, converts it to lower case and determines 
 * whether it is a valid option. If it is valid return it otherwise call 
 * getPlayerSelection again.
 */
function getplayerSelection() {
  let userInput = prompt(PROMPT_MESSAGE);
  userInput = userInput.toLowerCase();
  let valid = checkUserInput(userInput);

  if (valid) {
    return userInput;
  }
  else {
    console.log(INVALID_INPUT);
    userInput = getplayerSelection();
    return userInput;
  }
}

// Events

const player = document.querySelector(".player");
console.log(player);

// All buttons
const buttons = player.querySelectorAll("button");
console.log(buttons);

// Each button
const rock = player.querySelectorAll("#rock");
const paper = player.querySelectorAll("#paper");
const scissors = player.querySelectorAll("#scissors");

rock.addEventListener("click", function() {playRound("rock")});
paper.addEventListener("click", function() {playRound("paper")});
scissors.addEventListener("click", function() {playRound("scissors")});

// update playerSelection

// Main
