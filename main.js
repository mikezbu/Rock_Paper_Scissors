//Mike Bu's Rock Paper Scissor Game

//SETUP RULES

let playerScore = 0; //starts scores off at 0
let computerScore= 0;
let winner = '';

function round(playerChoice, computerChoice)  {
    if
        (playerChoice === computerChoice) {
        winner = 'tie';
    }
    else if
        ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
            playerScore++;
            winner = 'player';
    }
    else if
        ((playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'rock')) {
            computerScore++;
            winner = 'computer';
    }
}

function getComputerChoice()    {
    let randomInteger = Math.floor(Math.random()*3);    //Math.floor converts to integer
        switch (randomInteger)  {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
    }

function gameOver() {
    return (playerScore === 5 || computerScore === 5);
}

// USER INTERFACE

//set up getting elements that match strings

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScoreNumber = document.getElementById('playerScoreNumber')
const computerScoreNumber = document.getElementById('computerScoreNumber')
const playerChoiceIcon = document.getElementById('playerChoiceIcon')
const computerChoiceIcon = document.getElementById('computerChoiceIcon')
const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const endgameModel = document.getElementById('endgameModel')
const endgameMessage = document.getElementById('endgameMessage')
const overlay = document.getElementById('overlay')
const restartButton = document.getElementById('restartButton')

rockButton.addEventListener('click', () => handleClick('rock'))
paperButton.addEventListener('click', () => handleClick('paper'))
scissorsButton.addEventListener('click', () => handleClick('scissors'))
overlay.addEventListener('click', () => closeEndGameModel)
restartButton.addEventListener('click', () => restartGame)

function capitalizeFirstLetter(string)  {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndgameModel() {
    endgameModel.classList.add('active')
    overlay.classList.add('active')
  }
  
function closeEndgameModel() {
    endgameModel.classList.remove('active')
    overlay.classList.remove('active')
  }

function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }
  
function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose rock, paper, or scissors!'
    scoreMessage.textContent = 'First to score 5 points wins the game!'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = 'PLAYER'
    computerSign.textContent = 'COMPUTER'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

function handleClick()  {
    if(gameOver)    {
        openEndGameModel()
        setFinalMessage()
    }
}

function updateChoices(playerChoice, computerChoice)    {
    switch (playerChoice)   {
        case 'rock':
            playerSign.textContent = 'R' //REPLACE WITH ROCK IMAGE
        case 'paper':
            playerSign.textContent = 'P' //REPLACE WITH PAPER IMAGE
        case 'scissors':
            playerSign.textContent = 'S' //REPLACE WITH SCISSORS IMAGE
    }
    switch (computerChoice)   {
        case 'rock':
            playerSign.textContent = 'R' //REPLACE WITH ROCK IMAGE
        case 'paper':
            playerSign.textContent = 'P' //REPLACE WITH PAPER IMAGE
        case 'scissors':
            playerSign.textContent = 'S' //REPLACE WITH SCISSORS IMAGE
    }
}

function endScreen()    {
    if (roundWinner === 'tie')  {
        scoreInfo.textContent = "It's a tie!"
    }   else if (roundWinner === 'player')    {
        scoreInfo.textContent = "You won! :)"  
    }   else if (roundWinner === 'computer')    {
        scoreInfo.textContent = "You lost :("
    }

    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player')    {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()}`
        return
    }

    else if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(computerSelection)} beats ${playerSelection.toLowerCase()}`
        return
    }

    else    {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties ${computerSelection.toLowerCase()}`
        return
    }
}