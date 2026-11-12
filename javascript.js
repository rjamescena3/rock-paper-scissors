console.log("Rock Paper Scissors");
// Create Two global scope variables
//  with initial value of 0. Used to keep
// track of the players Score
let humanScore = 0;
let computerScore = 0;

// create a getComputerChoice function that returns either rock, paper or scissors randomly
function getComputerChoice(){
    let randomNumber = Math.random();
    if(randomNumber<0.3){
        return "rock";
    }
    else if(randomNumber<0.6){
        return "paper";
    }
    else{
        return "scissors";
    }
}
//console.log(getComputerChoice());

// create a getHumanChoice function that prompts the user to enter rock, paper or scissors and returns the value
function getHumanChoice(){
    let userInput=prompt("Please choose: rock, paper or scissors");
    return userInput.toLocaleLowerCase();
}
//console.log(getHumanChoice());

// create a playRound function that takes in the human choice and computer choice 
// and returns the result of the round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if((humanChoice==="rock" && computerChoice=="scissors" )
            || (humanChoice==="scissors" && computerChoice=="paper")
            || (humanChoice==="paper" && computerChoice=="rock")){
        humanScore=humanScore+1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore=computerScore+1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

// create a playGame function that plays 5 rounds of
// rock paper scissors and keeps track of the score
/*function playGame() {
    for(let i=1; i<=5; i++){
        console.log(`Round ${i}`);
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    console.log("Final Score: ");
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if(humanScore>computerScore){
        console.log("You win the game!");
    }
    else if(humanScore<computerScore){
        console.log("You lose the game");
    }
    else{
        console.log("The game is a tie!");
    }
}

playGame();*/