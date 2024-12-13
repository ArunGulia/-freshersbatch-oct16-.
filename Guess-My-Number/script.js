'use strict';

let secretNumber = Math.trunc(Math.random() * 100)+1;

// we could have also stored this score basically in the DOM.
// And to do that we would always just read this value from here.
// So right from the DOM , then we could decrease that value
// and then write it back here to the DOMbut then we would not have that value in our code.
// So essentially our application would have no way of knowing that score at all points.
// And so it's always good to keep a variable which actually holds the data in our code
// and not just rely on the DOM to hold our data, all right? And this variable here can also be called a state variable.
//Because this score is part of the so-called application state
// which is basically all the data that is relevant to the application.
let score = 3;
let highScore = 0;

const displayMessage = function(message){
   document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    //storing the input value to a variable and using 
    //typeof to check the data type return value
 const guess= Number(document.querySelector('.guess').value);
 //console.log(guess, typeof guess); 

 // When there is no input
 if (!guess) {
   // document.querySelector('.message').textContent = '⛔️ No number!';
   displayMessage('⛔️ No number!');

   // When player wins
 } else if (guess === secretNumber) {
   // document.querySelector('.message').textContent = '🎉 Correct Number!';
   displayMessage('🎉 Correct Number!');
   document.querySelector('.number').textContent = secretNumber;

   document.querySelector('body').style.backgroundColor = '#60b347';
   document.querySelector('.number').style.width = '30rem';

   if (score > highscore) {
     highscore = score;
     document.querySelector('.highscore').textContent = highscore;
   }

   // When guess is wrong
 } else if (guess !== secretNumber) {
   if (score > 1) {
     // document.querySelector('.message').textContent =
     // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
     displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
     score--;
     document.querySelector('.score').textContent = score;
   } else {
     // document.querySelector('.message').textContent = '💥 You lost the game!';
     displayMessage('💥 You lost the game!');
     document.querySelector('.score').textContent = 0;
   }
 }
      
   });

document.querySelector('.again').addEventListener('click', function(){
   score = 3;
   secretNumber = Math.trunc(Math.random()*100)+1;
   document.querySelector('.message').textContent = 'Start guessing...';
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
});

