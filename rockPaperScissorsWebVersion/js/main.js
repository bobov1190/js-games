const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        makeChoicesVisible(playerSelection, computerSelection);
        checkWinner(playerSelection, computerSelection);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function makeChoicesVisible(playerSelection, computerSelection) {
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
}

function checkWinner(playerSelection, computerSelection) {
    let winner;
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        winner = 'Player';
    } else if (playerSelection === computerSelection) {
        winner = 'Tie';
    } else {