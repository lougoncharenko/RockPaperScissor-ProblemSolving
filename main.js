const rock= "rock";
const paper="paper";
const scissors= "scissors";



function playerSelection(){
let answer=prompt("Choose rock, paper or scissors");
    if (answer==="rock"){
        return rock;
    } else if (answer==="paper"){
        return paper;
    } else {
        return scissors;
    }
}


function computerPlay(){
   let randomNumber=Math.floor(Math.random()*3) +1
   if (randomNumber===1){
       return rock;
   }else if (randomNumber===2){
       return paper;
   } else {
       return scissors;
   }
}
computerPlay();

let player= playerSelection();
let computer= computerPlay();

function checkWhoWon(player, computer){
 if (player=== rock && computer=== paper){
     return "Rock beats paper, Player wins"
 }
 else if (player === paper && computer===rock) {
    return "Rock beats paper, Computer wins"
}else if  (player === scissors && computer ===rock) {
    return "Rock beats scissors, Computer wins"
} else if (player === rock && computer===scissors) {
    return "Rock beats paper, Player wins"
}else if (player === paper && computer===scissors) {
    return "Scissors beats paper, Computer wins"
} else if (player === scissors && computer===paper) {
    return "Scissors beats paper, Player wins"
} else{
return "It's a tie";
}
}

checkWhoWon(player, computer);



