const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let computerChoice
let computerChoiceIcon
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = 'rock'
        computerChoiceIcon = '<i class="ph-hand-fist"></i>'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
        computerChoiceIcon = '<i class="ph-hand"></i>'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
        computerChoiceIcon = '<i class="ph-scissors"></i>'
    }

    computerChoiceDisplay.innerHTML = computerChoiceIcon
}

async function getResult() {
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lose!'
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lose!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lose!'
    }
    else {
        result = 'its a draw!'
    } 
    resultDisplay.innerHTML = result
}