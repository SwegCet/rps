function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let pickOptions = options[Math.floor(Math.random()* options.length)];
    return pickOptions;
}

function game () 
{
    let playerscore = 0;
    let computerscore = 0;
    for (i = 0; i < 5; i++) {
            const computerSelection = getComputerChoice();
            const playerSelection = String(prompt("Please select 'Rock', 'Paper', or 'Scissors'"));

            console.log(playerSelection);
            console.log(computerSelection);

            let player = playerSelection.toLowerCase();
            let computer = computerSelection.toLowerCase();

            if ((player === 'rock' && computer === 'paper') || (player === 'paper' && computer == 'scissors') || (player == 'scissors' && computer == 'rock')) {
                console.log('You lose!');
                computerscore++;
            }
            else if (player === computer) {
                console.log('It\'s a tie!');
            }
            else {
                console.log('You Win!');
                playerscore++;
            }
            console.log(playerscore,computerscore);
    }

    if (playerscore > computerscore)
    {
        return "You won the game!";
    }
    else if (playerscore == computerscore){
        return "TIE GAME"
    }
    else {
        return "You lost the game!";
    }
}

console.log(game());