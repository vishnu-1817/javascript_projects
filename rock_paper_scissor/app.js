const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
/* 
"possibleChoice " is a NodeList(similar to list). A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes). HTMLCollection items can be accessed by their name, id, or index number. NodeList items can only be accessed by their index number.
*/

let userChoice; 
let computerChoice;
let result;

// console.log(possibleChoice);
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(event) =>{
    userChoice = event.target.id;
    // console.log(event);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +1;

    if (randomNumber === 1){
        computerChoice ='rock';
    }
    else if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    else if (randomNumber === 3) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    
}

function getResult(){
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result;
    // console.log(result)
}