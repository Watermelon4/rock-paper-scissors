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
let playerScore = 0;
let computerScore = 0;
let numRoundsPlayed = 0;
let playerSelection;
let computerSelection;
let roundResult;

const PROMPT_MESSAGE = "rock, paper or scissors?";
const GAME_WIN_MESSAGE = "You won the game!";
const GAME_LOSE_MESSAGE = "You lost the game!";
const ROUND_WIN_MESSAGE = "You won the round!";
const ROUND_LOSE_MESSAGE = "You lost the round!";
const displayPlayerScore = `Your score is ${playerScore}.`;
const displayComputerScore = `The computer's score is ${computerScore}.`;

let rockRules = { 
  win: "scissors", 
  draw: "rock", 
  lose: "paper"
};
let paperRules = { 
  win: "rock", 
  draw: "paper", 
  lose: "scissors"
};
let scissorRules = { 
  win: "paper", 
  draw: "scissors", 
  lose: "rock"
};
let rulesets = {
  "rock": rockRules, 
  "paper": paperRules,
  "scissors": scissorRules
};


// Functions

/** 
 * Takes <userInput> and converts it to all lower case. If it matches, then 
 * return true, otherwise return false. Returns false if <userInput> is null.
 */
function checkUserInput(userInput="") {
  if (userInput == null) {
    return false;
  }

  userInput = userInput.toLowerCase();
  switch(userInput) {
    case "rock": 
    case "paper": 
    case "scissors": 
      return true;
    default:
      return false;
  }
}

/** Gets <userInput> from the prompt and determines whether it is rock, paper 
 * or scissors. If <userInput> is valid, return it, otherwise call 
 * getPlayerSelection again.
 */
function getplayerSelection() {
  let userInput = prompt(PROMPT_MESSAGE);
  let valid = checkUserInput(userInput);

  if (valid) {
    // proceed
  }
  else {
    // ask again
  }
}


// Main

getplayerSelection()