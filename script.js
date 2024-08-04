let humanScore = 0, computerScore = 0

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

function getHumanChoice() {
    let choices = ['rock', 'paper', 'scissor']

    let choice = prompt("Pick a choice: ").toLowerCase()

    for (let i = 0; i < choices.length; i++) {
        if (choice === choices[i]) {
            return choice
        }
    }

    return getHumanChoice()
}

function playRound(humanChoice, computerChoice) {
    console.log(`You picked: ${humanChoice}, Computer picked: ${computerChoice}`)

    if (humanChoice === computerChoice) {
        console.log('DRAW')
    }

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You Lose! Paper beats Rock')
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        console.log('You Win! Rock beats Scissor')
        humanScore++;
    }

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You Win! Paper beats Rock')
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
        console.log('You Lose! Scissor beats Paper')
        computerScore++;
    }

    if (humanChoice === 'scissor' && computerChoice === 'rock') {
        console.log('You Lose! Rock beats Scissor')
        computerScore++;
    } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        console.log('You Win! Scissor beats Paper')
        humanScore++;
    }

    console.log(`Human Score: ${humanScore}, CPU Score: ${computerScore}`) 
}

function playGame() {
    var round = 1;

    for (let i = 0; i < 5; i++) {
        console.log(`Round: ${round++}`)

        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log('You Won the Game!')
    } else if (humanScore < computerScore) {
        console.log('You Lose Computer Wins the Game.')
    } else {
        console.log('GAME DRAW!')
    }
}

// Start Game
playGame()