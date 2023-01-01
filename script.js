// Grab all buttons
let buttons = document.querySelectorAll('button');

// Add event listeners to each buttons
buttons.forEach((element) => {
    element.addEventListener('click', playRound);
});

// get the results div
let resultsDiv = document.querySelector('.results');
// randomly returns string of "rock", "paper", or "scissors" //
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
};

// Grab container div
let container = document.querySelector('body');

// Grab all 'round' paragraphs
let roundsNodeList = document.querySelectorAll('.round');
let rounds = Array.from(roundsNodeList);

// Create counters for Wins/Losses/Ties
let wins = 0;
let ties = 0;
let losses = 0;
let roundCount = wins + ties + losses;

// Create a new paragraph to add to results div after 5 rounds
let finalResults = document.createElement('p');

// Reset the game
function resetGame(event) {
    if ((event.key === 'r') || (event.target.nodeName === 'P')) {
        wins = 0;
        ties = 0;
        losses = 0;
        roundCount = 0;
        resultsDiv.textContent = '';
        rounds.forEach(round => round.textContent = '.');
        buttons.forEach((element) => {
            element.addEventListener('click', playRound);
        });
    }
};

// plays one round with parameter for playerSelection and computerSelection //
// returns a template literal with win/loss/tie message and player/computer selections //
function playRound(eventFromButtonClick) {
    let playerSelection = eventFromButtonClick.target.id;
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        resultsDiv.textContent = `It's a tie! You and computer both selected ${playerSelection}`;
        rounds[roundCount].textContent = 'T';
        ties += 1;
        roundCount = wins + ties + losses;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            resultsDiv.textContent = `You lost. Computer selected ${computerSelection} and that beats ${playerSelection}`;
            rounds[roundCount].textContent = 'L';
            losses += 1;
            roundCount = wins + ties + losses;
        } else {
            resultsDiv.textContent = `You won! You selected ${playerSelection} and that beats ${computerSelection}`;
            rounds[roundCount].textContent = 'W';
            wins += 1;
            roundCount = wins + ties + losses;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            resultsDiv.textContent = `You lost. Computer selected ${computerSelection} and that beats ${playerSelection}`;
            rounds[roundCount].textContent = 'L';
            losses += 1;
            roundCount = wins + ties + losses;
        } else {
            resultsDiv.textContent = `You won! You selected ${playerSelection} and that beats ${computerSelection}`;
            rounds[roundCount].textContent = 'W';
            wins += 1;
            roundCount = wins + ties + losses;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            resultsDiv.textContent = `You lost. Computer selected ${computerSelection} and that beats ${playerSelection}`;
            rounds[roundCount].textContent = 'L';
            losses += 1;
            roundCount = wins + ties + losses;
        } else {
            resultsDiv.textContent = `You won! You selected ${playerSelection} and that beats ${computerSelection}`;
            rounds[roundCount].textContent = 'W';
            wins += 1;
            roundCount = wins + ties + losses;
        }
    }
    if (roundCount === 5) {
        buttons.forEach((element) => {
            element.removeEventListener('click', playRound);
        });
        finalResults.innerHTML = `<br>After five rounds you have: <br> ${wins} wins, ${losses} losses and ${ties} ties. <br> <br> Click here or press 'R' to reset.`;
        resultsDiv.appendChild(finalResults);
        document.addEventListener('keydown', resetGame);
        container.addEventListener('click', resetGame);
    }
};