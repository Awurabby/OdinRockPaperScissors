function getComputerChoice(){
  let computerChoice;
  let randomNumber = Math.random();

  if (randomNumber < 0.4) {
    computerChoice = "rock"
  }
  else if (randomNumber > 0.3 && randomNumber < 0.7) {
    computerChoice = "paper"
  }
  else {computerChoice = "scissors"}
  //console.log(randomNumber);
  //console.log(computerChoice);
  return computerChoice;
}


  let humanScore = 0;
  let computerScore = 0;
  

  function playRound(humanMove){
    const computerMove = getComputerChoice();
    humanMove = humanMove.toLowerCase();
    const resultDiv = document.getElementById("results");

    if (computerMove === humanMove){
    resultDiv.textContent = "It's a tie!";
    }
    else if (computerMove === "rock" && humanMove === "paper")
    {
    resultDiv.textContent = "You win! Paper beats Rock";
    humanScore += 1;
    } 
    else if (computerMove === "rock" && humanMove === "scissors")
    {
    resultDiv.textContent = "You lose! Rock beats scissors";
    computerScore += 1;
    }
    else if (computerMove === "paper" && humanMove === "rock"){
    resultDiv.textContent = "You lose! Paper beats rock";
    computerScore += 1;
    }
    else if (computerMove === "scissors" && humanMove === "rock"){
    resultDiv.textContent = "You win! rock beats scissors"
    humanScore += 1;
    }
    else if (computerMove === "paper" && humanMove === "scissors"){
    resultDiv.textContent = "You win! scissors beats paper";
      humanScore += 1;
    }
    else if (computerMove === "scissors" && humanMove === "paper"){
    resultDiv.textContent = "You lose! scissors beats paper";
      computerScore += 1;
    }
  }
  

  if (computerScore > humanScore){
    console.log(`Game over, you lost!. The computer scored ${computerScore} and you scored ${humanScore} :(`)
  }
  else {console.log(`Game over, you won!. The computer scored ${computerScore} and you scored ${humanScore} :)`)}


const btn = document.querySelectorAll("button");
btn.forEach((button) => {
  button.addEventListener('click', () => {
    const playerChoice = button.textContent;
    playRound(playerChoice);
  } );
})