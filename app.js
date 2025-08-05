let userScore = 0;
let compScore = 0;
// let restartBtn = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const restartBtn = document.querySelector("#restartBtn");

// computer's random choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random () * 3);
    return options[randIdx];
};

// Draw logic
const drawGame = () => {
    
    msg.innerText = "Game was draw. Play again.";
        msg.style.backgroundColor = "#081b31"; 
      

}
// Show winner /loser logic
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `you win!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = `you lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}
// Main play function
const playGame =(userChoice) => {
const compChoice = genCompChoice();


if(userChoice === compChoice){
    drawGame();
} 
else {
    let userWin = true;
    if(userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    }else {
        //rock, paper
       userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
    }
      restartBtn.style.display = "inline-block"; 
    };

// Add event listner for user choice
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice)
        btn.style.display = "inline";
    });
});

restartBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;

  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;

  msg.innerText = "Game reset. Play your move!";
  msg.style.backgroundColor = "#081b31";

  restartBtn.style.display = "flex-inline"; 
});
