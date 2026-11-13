console.log("Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;

//select RPS buttons
const rockButton=document.querySelector("#rock");
const paperButton=document.querySelector("#paper");
const scissorsButton=document.querySelector("#scissors");

//select the Div results container
const resultsDiv=document.querySelector("#results");
const scoreDiv=document.querySelector("#score");
const winnerDiv=document.querySelector("#winner");

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

// Adding Event listener to RPS Buttons
rockButton.addEventListener("click",()=>{
   playRound("rock",getComputerChoice());
});
paperButton.addEventListener("click",()=>{
  playRound("paper",getComputerChoice());
});
scissorsButton.addEventListener("click",()=>{
  playRound("scissors",getComputerChoice());
});

/*create a playRound function that takes in the human choice and computer choice 
and returns the result of the round*/

function playRound(humanChoice, computerChoice) {
     //Prevent game play go above 5 score
    if(humanScore===5 || computerScore===5){  
        return;            
    }


    if (humanChoice === computerChoice) {
        resultsDiv.textContent="It's a tie!";
    }
    else if((humanChoice==="rock" && computerChoice=="scissors" )
            || (humanChoice==="scissors" && computerChoice=="paper")
            || (humanChoice==="paper" && computerChoice=="rock")){
        humanScore=humanScore+1;
        resultsDiv.textContent=`You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore=computerScore+1;
        resultsDiv.textContent=`You lose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreDiv.textContent=`Player Score: ${humanScore} || Computer Score: ${computerScore}`;//Score Update
    // Game Winner Logic
     if(humanScore===5){
        winnerDiv.textContent="Congratulations! You Win The Game";
     }
     else if(computerScore===5){
        winnerDiv.textContent="Sorry! Next time, Computer wins the Game";
     }

}

