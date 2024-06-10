const choices= ["rock","paper", "scissors"];
const playerDisplay = document.getElementById("PlayerDisplay");
const computerDisplay = document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("ResultDisplay");
const playerscoreDisplay = document.getElementById("psSpan");
const computerscoreDisplay = document.getElementById("csSpan");

let playerScore = 0;
let computerscore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result= "";
    if (playerChoice == computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch (playerChoice) {

            case "rock":
                result = (computerChoice == "scissors") ? "You Win" : "You Lose";
                break;

            case "paper":
                result = (computerChoice == "rock") ? "You Win" : "You Lose";
                break;

            case "scissors":
                result = (computerChoice == "paper") ? "You Win" : "You Lose";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`
    computerDisplay.textContent = `Computer: ${computerChoice}`
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    switch (result) {
        case "You Win":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerscoreDisplay.textContent = playerScore;
            break;
        case "You Lose":
            resultDisplay.classList.add("redText");
            computerscore++;
            computerscoreDisplay.textContent = computerscore;
            break;

    }

    
}

