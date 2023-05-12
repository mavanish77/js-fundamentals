//! this is a random no genarator

let winningNumber = Math.floor(Math.random() * 10) + 1;
let userNumber = +prompt('Guess a number');

// Prompt takes input as a string, so let's check the data type
console.log(typeof userNumber);

if (userNumber === winningNumber) {
    console.log('You are the winner!');
} else {
    if (userNumber > winningNumber) {
        console.log('Too High ' + winningNumber);
    } else {
        console.log('Too Low ' + winningNumber);
    }
}