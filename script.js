
// randomly returns string of "rock", "paper", or "scissors" //
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// prompts for player selection //
// re-prompts for incorrect input //
function getPlayerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let playerChoice = prompt("Rock, Paper or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    return choices.includes(playerChoice) ? playerChoice : getPlayerChoice();
}

// plays one round with parameter for playerSelection and computerSelection //
// returns a template literal with win/loss/tie message and player/computer selections //
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (`It's a tie! You and computer both selected ${playerSelection}`);
    } else if (playerSelection === "rock") {
        return (computerSelection === "paper") ? (`You lost. Computer selected ${computerSelection} and that beats your ${playerSelection}`) : (`You won! You selected ${playerSelection} and that beats the computer selection of ${computerSelection}`);
    } else if (playerSelection === "paper") {
        return (computerSelection === "scissors") ? (`You lost. Computer selected ${computerSelection} and that beats your ${playerSelection}`) : (`You won! You selected ${playerSelection} and that beats the computer selection of ${computerSelection}`);
    } else {
        return (computerSelection === "rock") ? (`You lost. Computer selected ${computerSelection} and that beats your ${playerSelection}`) : (`You won! You selected ${playerSelection} and that beats the computer selection of ${computerSelection}`);
    }
}

// plays n number of games, defaults to five //
// console.logs string of round results returned from playRound() //
// console.logs results of n rounds including wins/losses/ties //
function game(n = 5) {
    let wins = 0;
    let ties = 0;
    let losses = 0;
    let round = "";
    for (let i = 0; i < n; i++) {
        round = playRound(getPlayerChoice(), getComputerChoice());
        if (round.includes("won")) {
            wins += 1;
        } else if (round.includes("tie")) {
            ties += 1;
        } else {
            losses += 1;
        }
        console.log(round);
    }
console.log(`You had ${wins} win(s), ${ties} tie(s) and ${losses} loss(es) out of ${n} rounds`);
}

game(3);