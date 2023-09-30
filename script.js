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

console.log(RANDOMNUMBER);

GUESSBTN.addEventListener('click', () => {
    if (userInput.value) {
        const USERGUESS = userInput.value; // convert float input to integer
        attemps--; // decrement attemps every guess input
        attempsDisplay.textContent = attemps; // show the attemps remaining

        // user guess true
        if (USERGUESS === RANDOMNUMBER) {
            userInput.disabled = true;
            playerWin.show();
            randNumberPlaceholderWin.textContent = `${RANDOMNUMBER}`;
            // input success sound

        }
        // attemps goes to 0
        else if (attemps === 0) {
            userInput.disabled = true;
            playerLoss.show();
            randNumberPlaceholderLoss.textContent = `${RANDOMNUMBER}`;
            // game over sound
        }
        // user guess is lower
        else if (USERGUESS < RANDOMNUMBER) {
            textDisplay.textContent = 'Try higher! 😁'; //add one emoji
            // input error sound
        }
        // user guess is higher
        else {
            textDisplay.textContent = 'Try lower! 😁'; //add one emoji
            // input error sound
        }

    }
    else {
        textDisplay.textContent = 'Input number from 1-100';
    }

    userInput.value = '';
});


