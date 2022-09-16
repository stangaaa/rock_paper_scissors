let playerWins = 0;
let cpuWins = 0;
let draws = 0;

function getComputerchioce() {
    computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) return "rock";
    else if (computerChoice === 2) return "paper";
    else return "scissors";
    
}

function playerChoice() {
    let choice =  prompt("");
    return choice.toLowerCase()
}

function playRound(playerChoice, computerChoice){

    if(playerChoice === computerChoice) {
        draws++;
        return console.log("draw")
    }
    else if ((playerChoice === "paper" && computerChoice === "rock") || ( playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "rock" && computerChoice === "scissors")){
        playerWins++;
        return console.log("player won")

    }
    else if ((playerChoice === "paper" && computerChoice === "scissors") || ( playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "scissors" && computerChoice === "rock")){
        cpuWins++;
        return console.log("cpu won")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice(), getComputerchioce())
    }
}


console.log(game())
console.log( "player won " + playerWins)
console.log( "cpu won " + cpuWins)
console.log( "draws " + draws)