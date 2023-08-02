function getComputerChoice() {
    randomAnswer = Math.floor(Math.random() * 3)
    switch (randomAnswer) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
    playerSelection = "Rock";
    console.log("Computer picked " + computerSelection)
    console.log("Player picked " + playerSelection)

    if (playerSelection == computerSelection) {
        return "Same choices. Draw!"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "Rock breaks Scissors. You win!" 
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Scissors cuts Paper. You win!"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "Paper wraps Rock. You win!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "Oof, Rock got wrapped by Paper. You lose!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "Scissors got broken by Rock. You lose!"
    } else {
        return "Paper got cut by scissors. You lose!"
    }
}

console.log(playRound());