// create a score varible
let playerScore= 0;
let computerScore=0;
const buttons = document.querySelectorAll('input')




// add event listener to button



function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

  


// create a function for computer play 
// create a variable for rock, paper, scissors

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

/*create a function where you click the button
rock paper or scissors and it comes out as a value 
where you can compare to the computers choice */


/* create a function that compares player vs computer
using if , else if and else conditionals 
in this function, it will score.TextContent the score*/

// if the player's score equals 5, end the game or a loop for 5 rounds and end the game

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})