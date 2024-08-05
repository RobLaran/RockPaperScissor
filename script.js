let humanScoreCounter = 0, computerScoreCounter = 0
let roundCounter = 0;
let round = document.getElementById('round')

let gameOver = false

let playerScore = document.getElementById('player-score')
let cpuScore = document.getElementById('cpu-score')

let gameResult = document.getElementById('game-result')
let gameInfo = document.getElementById('game-info')

let rockBtn = document.getElementById('rockBtn')
let paperBtn = document.getElementById('paperBtn')
let scissorBtn = document.getElementById('scissorBtn')

function getComputerChoice() {
    let choice;

    let random = Math.floor(Math.random() * 3)

    switch(random) {
        case 0: 
            choice = 'rock'
            break;
        case 1: 
            choice = 'paper'
            break;
        case 2: 
            choice = 'scissor'
            break;
        default:
            break;
    }

    return choice
}


function playRound(humanChoice, computerChoice) {
    console.log(roundCounter)
    if (roundCounter === 5) {

        if (humanScoreCounter > computerScoreCounter) {
            alert('You Won the Game!')
        } else if (humanScoreCounter < computerScoreCounter) {
            alert('You Lose Computer Wins the Game.')
        } else {
            alert('GAME DRAW!')
        }
        gameOver = true
        resetGame()
        return
    }
    roundCounter++;
    round.textContent = roundCounter;

    
    gameInfo.textContent = `You picked: ${humanChoice}, Computer picked: ${computerChoice}`
    round.textContent = roundCounter;

    
    if (humanChoice === computerChoice) {
        gameResult.textContent = "DRAW"
    }

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        gameResult.textContent = 'You Lose! Paper beats Rock'
        computerScoreCounter++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        gameResult.textContent = 'You Win! Rock beats Scissor'
        humanScoreCounter++;
    }

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        gameResult.textContent = 'You Win! Paper beats Rock'
        humanScoreCounter++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
        gameResult.textContent = 'You Lose! Scissor beats Paper'
        computerScoreCounter++;
    }

    if (humanChoice === 'scissor' && computerChoice === 'rock') {
        gameResult.textContent = 'You Lose! Rock beats Scissor'
        computerScoreCounter++;
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        gameResult.textContent = 'You Win! Scissor beats Paper'
        humanScoreCounter++;
    }

    playerScore.textContent = humanScoreCounter
    cpuScore.textContent = computerScoreCounter

    
}

function resetGame() {
    humanScoreCounter = 0
    computerScoreCounter = 0
    roundCounter = 0
    playerScore.textContent = humanScoreCounter
    cpuScore.textContent = computerScoreCounter
    round.textContent = roundCounter
    gameResult.textContent = ''
    gameInfo.textContent = 'Pick your choice'
}

function playGame() {
    
    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice())
    })

    paperBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice())
    })

    scissorBtn.addEventListener('click', () => {
        playRound('scissor', getComputerChoice())
    })
    
}

// Start Game
    playGame()