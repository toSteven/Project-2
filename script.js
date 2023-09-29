let attempsDisplay = document.querySelector('#attempsDisplay'); // get attemps id and set to new variables
let userInput = document.querySelector('#userInput'); // get userinput id and set to new variables
const GUESSBTN = document.querySelector('#guessBtn'); // get guessBtn id and set to new variables
const RESETBTN = document.querySelector('#playagainBtn'); // get guessBtn id and set to new variables
let textDisplay = document.querySelector('#textDisplay'); // get textDisplay id and set to new variables

const RANDOMNUMBER = Math.floor(Math.random() * 100) + 1; // create randomnumber
let attemps = 5; // create attemp counts
// input sound

GUESSBTN.addEventListener('click', () => {
    if (userInput.value) {
        const USERGUESS = parseInt(userInput.value); // convert text input to integer
        attemps--; // decrement attemps evry guess input
        attempsDisplay.textContent = attemps; // show the attemps remaining

        // if ture
        if (USERGUESS === RANDOMNUMBER) {
            textDisplay.textContent = `Congrations you guess the correct number  ${RANDOMNUMBER} 🎊`; //added some emoji
            userInput.disabled = true;
            // input success sound
        }
        // if attemps goes from 0
        else if (attemps === 0) {
            textDisplay.textContent = `Game over the correct number is ${RANDOMNUMBER} 😔`; //added some emoji
            userInput.disabled = true;
            // game over sound
        }
        // if input is lower
        else if (USERGUESS < RANDOMNUMBER) {
            textDisplay.textContent = 'Try higher! 😁'; //add one emoji
            // input error sound
        }
        // if input is higher
        else {
            textDisplay.textContent = 'Try lower! 😁'; //add one emoji
            // input error sound
        }

    }
    else {
        textDisplay.textContent = 'Input number from 1-100!';
    }

    userInput.value = '';
});

RESETBTN.addEventListener('click', () => {
    location.reload();
});
