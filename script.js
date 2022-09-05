let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

let humanGuess = 0;
let computerGuess = 0;
let targetNumber = generateTarget();

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if(Math.abs(targetNumber - humanGuess) < Math.abs(targetNumber - computerGuess)) {
    return true
  } else if (Math.abs(targetNumber - humanGuess) > Math.abs(targetNumber - computerGuess)) {
    return false
  } else {
    return true
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  }
  if (winner === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
