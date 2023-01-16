const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   generateComputerChoice()
   getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = '<i class="far fa-solid fa-hand-rock"></i>'
    }
    if (randomNumber === 2) {
        computerChoice = '<i class="far fa-solid fa-hand-paper"></i>'
    }
    if (randomNumber === 3) {
        computerChoice = '<i class="far fa-solid fa-hand-scissors"></i>'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === '<i class="far fa-solid fa-hand-rock"></i>' && userChoice === 'paper') {
        result = 'you win!'
    }
    else if (computerChoice === '<i class="far fa-solid fa-hand-rock"></i>' && userChoice === 'scissors') {
        result = 'you lose!'
    }
    else if (computerChoice === '<i class="far fa-solid fa-hand-paper"></i>' && userChoice === 'scissors') {
        result = 'you win!'
    }
    else if (computerChoice === '<i class="far fa-solid fa-hand-paper"></i>' && userChoice === 'rock') {
        result = 'you lose!'
    }
    else if (computerChoice === '<i class="far fa-solid fa-hand-scissors"></i>' && userChoice === 'rock') {
        result = 'you win!'
    }
    else if (computerChoice === '<i class="far fa-solid fa-hand-scissors"></i>' && userChoice === 'paper') {
        result = 'you lose!'
    }
    else {
        result = 'its a draw!'
    }

    resultDisplay.innerHTML = result
}
