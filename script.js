const rock = document.getElementById('btn_1');
const paper = document.getElementById('btn_2');
const scissors = document.getElementById('btn_3');

let choice = 0;
let computer_wins = 0;
let player_wins = 0;
function computerChoice() { 
    return Math.floor(Math.random() * (2 - 0 + 1) + 0)
    //0 is rock
    //1 is paper
    //2 is scissors
}

function score_check(){
    if(player_wins === 5){
        console.log("THE PLAYER WON")
        player_wins = 0;
        computer_wins =0;
    }
    if(computer_wins === 5){
        console.log("THE CPU WON")
        player_wins = 0;
        computer_wins =0;
    }
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
    score_check();

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
    score_check()
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
    score_check()
})
