console.log("Rock Paper Scissors");
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
console.log(getComputerChoice());

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
        humanScore++;
        console.log("You win this round!");
    }

    else {
        computerScore++;
        console.log("Computer wins this round!");
    }

    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
