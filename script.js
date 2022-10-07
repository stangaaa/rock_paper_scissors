const rock = document.getElementById('btn_1');
const paper = document.getElementById('btn_2');
const scissors = document.getElementById('btn_3');

const counter_1 = document.getElementById('player-wins')
const counter_2 = document.getElementById('computer-wins')
const counter_3 = document.getElementById('winner')

let choice = 0;
let computer_wins = 0;
let player_wins = 0;

counter_1.innerText = 'player wins: ' + player_wins;
counter_2.innerText = 'cpu wins: ' + computer_wins;

function score_counter(){
    counter_1.innerText = 'player wins: ' + player_wins;
    counter_2.innerText = 'cpu wins: ' + computer_wins;
    if(player_wins === 5){
        counter_3.innerText = 'THE PLAYER WON!'
        player_wins = 0;
        computer_wins = 0;
    }
    else if(computer_wins === 5){
        counter_3.innerText = 'THE CPU WON!'
        player_wins = 0;
        computer_wins = 0;
    }
}

function computerChoice() { 
    return Math.floor(Math.random() * (2 - 0 + 1) + 0)
    //0 is rock
    //1 is paper
    //2 is scissors
}


rock.addEventListener("click", () => {
    choice = 0;
    if(choice === computerChoice()){
    console.log("draw")
    }
    else if (computerChoice() === 1){
        console.log("computer won");
        computer_wins = computer_wins + 1
    }
    else{
        console.log("player won");
        player_wins = player_wins + 1;
    }
    score_counter();
})

paper.addEventListener("click", () => {
    choice = 1;
    if(choice === computerChoice()) console.log("draw")
    else if (computerChoice() === 2){
        console.log("computer won")
        computer_wins = computer_wins + 1
        console.log(computer_wins)

    }
    else{
        console.log("player won");
        player_wins = player_wins + 1;
    }
    score_counter();
    })

scissors.addEventListener("click", () => {
    choice = 2;
    if(choice === computerChoice()) console.log("draw")
    else if (computerChoice() === 0){
        console.log("computer won");
        computer_wins = computer_wins + 1
    }
    else{
        console.log("player won");
        player_wins = player_wins + 1;
    }
    score_counter();
})
