// 0 is rock, 1 is scissors, 2 is paper
const computerSelection = getComputerChoice();

function getComputerChoice(){
    let computernum = Math.floor(Math.random() * 3);
    return computernum;
}

function playround(playerselection, computerselection){
    
    playerSelection = prompt("Choose 0, 1, 2");
    
    if(playerselection == 0 && computerselection ==0){
        console.log("Draw");
    }
    else if(playerselection == 0 && computerselection ==1){
        console.log("Win");
        return "Win";
    }
    else if(playerselection == 0 && computerselection ==2){
        console.log("Lose");
        return "Lose";
    }
    else if(playerselection == 1 && computerselection ==0){
        console.log("Lose");
        return "Lose";
    }
    else if(playerselection == 1 && computerselection ==1){
        console.log("Draw");
    }
    else if(playerselection == 1 && computerselection ==2){
        console.log("Win");
        return "Win";
    }
    else if(playerselection == 2 && computerselection ==0){
        console.log("Win");
        return "Win";
    }
    else if(playerselection == 2 && computerselection ==1){
        console.log("Lose");
        return "Lose";
    }
    else if(playerselection == 2 && computerselection ==2){
        console.log("Draw");
    }
}

function game(){
    let playerscore = 0;
    let computerscore = 0;
    let result;
    let playerSelection;

    for(let i = 0; i < 10; i++){
        
    result = playround(playerSelection, computerSelection);

    if(result == "Win"){
        playerscore++;
    }
    else if(result == "Lose"){
        computerscore++;
    }

    console.log(playerscore);
    console.log(computerscore);

    if(playerscore == 5 && computerscore < 5){
        console.log("Player wins!");
        break;
    }
    else if(playerscore < 5 && computerscore == 5){
        console.log("Computer Wins!");
        break;
    }
}
}

console.log(game());
