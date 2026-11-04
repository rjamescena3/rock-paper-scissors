console.log("Rock Paper Scissors");
console.log("Hello World");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber <= 0.33){
        return "rock";
    }
    else if(randomNumber <= 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}


function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper, or scissors: ");
    return humanChoice.toLowerCase();
}
console.log(getHumanChoice());


function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore=humanScore + 1;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    }

    else {
        computerScore=computerScore + 1;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

}


function playGame() {

    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        console.log(`Round ${i}`);

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score:");
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();