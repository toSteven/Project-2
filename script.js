let attempsDisplay = document.querySelector('#attempsDisplay'); // get attemps id and set to new variables
let userInput = document.querySelector('#userInput'); // get userinput id and set to new variables
const GUESSBTN = document.querySelector('#guessBtn'); // get guessBtn id and set to new variables
let textDisplay = document.querySelector('#textDisplay'); // get textDisplay id and set to new variables
let randNumberPlaceholderWin = document.querySelector('#randNumberPlaceholderWin'); // get randNumberPlaceholderWin id and set to new variables
let randNumberPlaceholderLoss = document.querySelector('#randNumberPlaceholderLoss'); // get randNumberPlaceholderLoss id and set to new variables

const RANDOMNUMBER = Math.floor(Math.random() * 100) + 1; // create randomnumber and place to variable
let attemps = 5; // create attemp counts

// get modal by id
const playerWin = new bootstrap.Modal(document.querySelector('#playerWin'));
const playerLoss = new bootstrap.Modal(document.querySelector('#playerLoss'));

// sound effects
let gameover = new Audio('audio/gameover.wav');
let winnerWow = new Audio('audio/wow.wav');
let again = new Audio('audio/again.wav');
let bga = new Audio('audio/bga.wav');

bga.volume = 0.2; // audio volume set to 20%
bga.loop = true;
bga.play();

//console.log(RANDOMNUMBER);

GUESSBTN.addEventListener('click', () => {
    if (userInput.value) {
        const USERGUESS = parseInt(userInput.value); // convert float input to integer
        attemps--; // decrement attemps every guess input
        attempsDisplay.textContent = attemps; // show the attemps remaining

        // user guess true
        if (USERGUESS === RANDOMNUMBER) {
            userInput.disabled = true; // disable the input
            winnerWow.volume = 0.2; // audio volume set to 20%
            winnerWow.play(); // play audio
            playerWin.show(); // show modal
            randNumberPlaceholderWin.textContent = `${RANDOMNUMBER}`; // show text display
        }
        // attemps goes to 0
        else if (attemps === 0) {
            userInput.disabled = true; // disable the input
            gameover.volume = 0.2; // audio volume set to 20%
            gameover.play(); // play audio
            playerLoss.show(); // show modal
            randNumberPlaceholderLoss.textContent = `${RANDOMNUMBER}`; // show text display
        }
        // user guess is lower
        else if (USERGUESS < RANDOMNUMBER) {
            again.volume = 0.2; // audio volume set to 20%
            again.play(); // play audio
            textDisplay.textContent = 'Try higher! 😁'; // show text display
        }
        // user guess is higher
        else {
            again.volume = 0.2; // audio volume set to 20%
            again.play(); // play audio
            textDisplay.textContent = 'Try lower! 😁'; // show text display
        }

    }
    else {
        again.volume = 0.2; // audio volume set to 20%
        again.play(); // play audio
        textDisplay.textContent = 'Input number from 1-100'; // show text display
    }

    userInput.value = ''; // clear input
});





