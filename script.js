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
  - int: userScore (<6)
  - int: cpuScore (<6)
  - str: playerSelection (rock, paper, scissors)
  - str: computerSelection (rock, paper, scissors)
  - str: roundResult (win, lose, draw)
  - int: numRoundsPlayed (<6)
  - dict: ruleset (rock, paper, scissors)

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