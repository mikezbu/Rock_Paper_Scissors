// Mike Bu's Rock Paper Scissors - JavaScript File

let playerScore = 0
let computerScore = 0
let winner = ''

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    winner = 'tie';
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;
    winner = 'player';
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++
    winner = 'computer';
  }
  updateScoreMessage(winner, playerSelection, computerSelection)
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

// UI

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockButton.addEventListener('click', () => handleClick('rock'))
paperButton.addEventListener('click', () => handleClick('paper'))
scissorsButton.addEventListener('click', () => handleClick('scissors'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = getRandomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()
  }
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      playerSign.textContent = '🪨';
      break
    case 'paper':
      playerSign.textContent = '📄';
      break
    case 'scissors':
      playerSign.textContent = '✂️';
      break
  }

  switch (computerSelection) {
    case 'rock':
      computerSign.textContent = '🪨';
      break
    case 'paper':
      computerSign.textContent = '📄';
      break
    case 'scissors':
      computerSign.textContent = '✂️';
      break
  }
}

function updateScore() {
  if (winner === 'tie') {
    scoreInfo.textContent = "It's a tie!"
  } else if (winner === 'player') {
    scoreInfo.textContent = 'You won! :)'
  } else if (winner === 'computer') {
    scoreInfo.textContent = 'You lost... :('
  }

  playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`
    return
  }
  if (winner === 'computer') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`
    return
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = 'You won! :)')
    : (endgameMsg.textContent = 'You lost... :(')
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  scoreInfo.textContent = 'Choose rock, paper, or scissors'
  scoreMessage.textContent = 'First to score 5 points wins the game'
  playerScorePara.textContent = 'Player: 0'
  computerScorePara.textContent = 'Computer: 0'
  playerSign.textContent = '?'
  computerSign.textContent = '?'
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}