// nested if else

let winningNumber = 21;
let userNumber = +prompt('Guess a number');

// prompt take input in string
console.log(typeof userNumber);

//!userNumber == 21
//!userNumber == '21'

if(userNumber === 21){
    console.log('You are winner');
}else{
    if(userNumber > 21){
        console.log('Too High');
    }else{
        console.log('Too Low');
    }
}
