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

function playRound(humanChoice, computerChoice){}
