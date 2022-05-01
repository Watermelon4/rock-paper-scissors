/*
Outline

Requirements
  - 5 games
  - display messages each round with choices and result
  - user input case insensitive

game() -> none
  - start game

playRound() -> none
  - start round

getplayerSelection(input) -> none
  - convert to "rock", "paper", "scissors"

getRuleset(playerSelection) -> ruleset
  - determine which ruleset to use

compareChoices(playerSelection) -> roundResult
  - generate num for cpu to determine result

updateScores(roundResult) -> none
  - update scores based on roundResult

getcomputerSelection(roundResult) -> computerSelection
  - use roundResult on ruleset to get computerSelection

roundEnd() -> none
  - summarize choices, show scores, round number

endGame() -> none
  - display final scores and winner

variables
  - int: playerScore (<6)
  - int: computerScore (<6)
  - str: playerSelection (rock, paper, scissors)
  - str: computerSelection (rock, paper, scissors)
  - str: roundResult (win, lose, draw)
  - int: numRoundsPlayed (<6)
  - dict: ruleset (rock, paper, scissors)

objects
  - create dictionary
  rockRules = {win: scissors, draw: rock, lose: paper}
  paperRules = {win: rock, draw: paper, lose: scissors}
  scissorRules = {win: paper, draw: scissors, lose: rock}

Process
1. Take playerSelection and choose which dict to use
  - ex. if rock then {win: scissors, lose: paper, ...}
2. Generate computerSelection as a number -1 to 1
3. Compare computerSelection to 0 and get roundResult
4. Update scores
5. Use round result and dict to determine computerSelection
6. Create message and display score

extras?
reject improper input
play again
*/

// Variables
// Int
let playerScore = 0;
let computerScore = 0;
let numRoundsPlayed = 0;
// Str
let playerSelection;
let computerSelection;
let roundResult;

const PROMPT_MESSAGE = "rock, paper or scissors?";
const GAME_WIN_MESSAGE = "You won the game!";
const GAME_LOSE_MESSAGE = "You lost the game!";
const INVALID_INPUT = "Invalid input, please try again.";

// Dict
// If ruleset = rockRules then player has chosen rock. Thus cpu wins with 
// paper.
let rockRules = { 
  win: "paper", 
  draw: "rock", 
  lose: "scissors"
};
let paperRules = { 
  win: "scissors", 
  draw: "paper", 
  lose: "rock"
};
let scissorRules = { 
  win: "rock", 
  draw: "scissors", 
  lose: "paper"
};
let rulesets = {
  "rock": rockRules, 
  "paper": paperRules,
  "scissors": scissorRules
};

let ruleset;


// Functions

/**
 * Updates the game when the player wins.
 */
function playerWinsRound() {
  playerScore++;
  let roundWinMessage = `You won the round! You chose ${playerSelection} `
  + `and the computer chose ${computerSelection}.`;
  console.log(roundWinMessage);
}

/**
 * Updates the game when there is a draw.
 */
function drawRound() {
  let roundDrawMessage = `Draw! You both chose ${playerSelection}.`;
  console.log(roundDrawMessage);
}

/**
 * Updates the game when the computer wins.
 */
function computerWinsRound() {
  computerScore++;
  let roundLoseMessage = `You lost the round! You chose ${playerSelection} `
  + `and the computer chose ${computerSelection}.`;
  console.log(roundLoseMessage);
}

/**
 * Returns the result of the comparison between the player and computer. 
 * Sets <computerSelection> based on result. Increments winner's score by 1.
 */
function compareSelection() {
  let computerInt = Math.floor(Math.random() * 3)
  switch(computerInt) {
    // player win, cpu lose
    case 0:
      computerSelection = ruleset.lose;
      roundResult = "win"
      playerWinsRound();
      break;
    // draw
    case 1:
      computerSelection = ruleset.draw;
      roundResult = "draw"
      drawRound();
      break;
    // player lose, cpu win
    default:
      computerSelection = ruleset.win;
      roundResult = "lose"
      computerWinsRound();
  }
  let displayPlayerScore = `Your score is ${playerScore}.`;
  let displayComputerScore = `The computer's score is ${computerScore}.`;
  console.log(displayPlayerScore);
  console.log(displayComputerScore);
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
    userInput = getplayerSelection()
    return userInput;
  }
}


// Main

playerSelection = getplayerSelection();
ruleset = rulesets[playerSelection];
roundResult = compareSelection();
console.log("End")