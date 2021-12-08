//rock paper scissors


/*variables
define rock
define scissors
define paper 
variable types:strings*/
const rock= "rock";
const paper="paper";
const scissors= "scissors";

/* output:
print the message  "you won!"
or "you lost!"  */

/*input 
Create a variable to store input
ask the user for an input
use prompt() */
let answer=prompt("Choose rock, paper or scissors");

function playerSelection(){
    if (answer==="rock"){
        return rock;
    } else if (answer==="paper"){
        return paper;
    } else {
        return scissors;
    }
}

// parts of the game:


/*computerPlay function
randomly chooses between rock, paper or scissors
return the value */
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

/* function for the game
will take two parameters, computers choice and players choice
will compare the two values
return a string to say who won
make player's selection case insensitive*/
function checkWhoWon(playerSelection, computerPlay){
 if (playerSelection == computerPlay){
     return "It's a tie!"
 } else if (playerSelection=== rock && computerPlay=== paper){
     return "Rock beats paper, Player wins"
 }
 else if (playerSelection === paper && computerPlay===rock) {
    return "Rock beats paper, Computer wins"
}else if  (playerSelection === scissors && computerPlay===rock) {
    return "Rock beats scissors, Computer wins"
} else if (playerSelection === rock && computerPlay===scissors) {
    return "Rock beats paper, Player wins"
}else if (playerSelection === paper && computerPlay===scissors) {
    return "Scissors beats paper, Computer wins"
} else if (playerSelection === scissors && computerPlay===paper) {
    return "Scissors beats paper, Player wins"
}
 }
 


/*create a new function called game()
allows the previous function to be played for 5 rounds 
keep score and report winner at the ends
create a variable for the score
create a loop for this */




