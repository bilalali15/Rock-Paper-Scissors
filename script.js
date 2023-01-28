// 0 is rock, 1 is scissors, 2 is paper
const computerSelection = getComputerChoice();
let playerSelection = prompt("Choose 0, 1, 2");

function getComputerChoice(){
    let computernum = Math.floor(Math.random() * 3);
    return computernum;
}

function playround(playerselection, computerselection){
    if(playerselection == 0 && computerselection ==0){
        console.log("Draw");
    }
    else if(playerselection == 0 && computerselection ==1){
        console.log("win");
    }
    else if(playerselection == 0 && computerselection ==2){
        console.log("lose");
    }
    else if(playerselection == 1 && computerselection ==0){
        console.log("Lose");
    }
    else if(playerselection == 1 && computerselection ==1){
        console.log("Draw");
    }
    else if(playerselection == 1 && computerselection ==2){
        console.log("Win");
    }
    else if(playerselection == 2 && computerselection ==0){
        console.log("Win");
    }
    else if(playerselection == 2 && computerselection ==1){
        console.log("Lose");
    }
    else if(playerselection == 2 && computerselection ==2){
        console.log("Draw");
    }
}

function game(){
    let playerscore = 0;
    let computerscore = 0;
    let result;

    for(let i = 0; i < 5; i++){
        result = playround(playerSelection, computerSelection);
        if(result == "Win"){
            playerscore++;
        }
        else if(result == "Lose"){
            computerscore++;
        }
        else{
            console.log("Draw");
        }
    }
}

console.log(playround(playerSelection, computerSelection));