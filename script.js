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

const buttons = document.querySelectorAll('button')
buttons.forEach(buttonPress => {
    buttonPress.addEventListener('click', () => {
        const playerSelection = buttonPress.innerText
        console.log("Player Selected " + playerSelection)
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection)
        console.log(result)

        console.log(`Your score is ${playerWinCount}`)
        console.log(`Computer score is ${computerWinCount}`)
    })
})




playerWinCount = 0;
computerWinCount = 0;
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Same choices. Draw!"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerWinCount += 1
        return "Rock breaks Scissors. You win!"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerWinCount += 1
        return "Scissors cuts Paper. You win!"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerWinCount += 1
        return "Paper wraps Rock. You win!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerWinCount += 1
        return "Oof, Rock got wrapped by Paper. You lose!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerWinCount += 1
        return "Scissors got broken by Rock. You lose!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerWinCount += 1
        return "Paper got cut by scissors. You lose!"
    } else {
        return "Woah, how did we get here? Invalid game, try again"
    }
}

