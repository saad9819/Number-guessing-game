import inquirer from 'inquirer';
// Function to generate a random number between 1 and 9
function generateRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}
// Main function to start the game
function startGame() {
    const randomNumber = generateRandomNumber();
    inquirer.prompt({
        type: 'input',
        name: 'guess',
        message: 'Guess the number between 1 and 9:',
        validate: (input) => {
            const num = parseInt(input);
            if (isNaN(num) || num < 1 || num > 9) {
                return 'Please enter a number between 1 and 9';
            }
            return true;
        }
    })
        .then((answers) => {
        const userGuess = parseInt(answers.guess);
        if (userGuess === randomNumber) {
            console.log('Congratulations! You guessed the correct number.');
        }
        else {
            console.log(`Oops! The correct number was ${randomNumber}.`);
        }
        playAgain();
    });
}
// Function to ask if the user wants to play again
function playAgain() {
    inquirer.prompt({
        type: 'confirm',
        name: 'playAgain',
        message: 'Do you want to play again?',
        default: false
    })
        .then((answers) => {
        if (answers.playAgain) {
            startGame();
        }
        else {
            console.log('Thanks for playing!');
        }
    });
}
// Start the game
startGame();
