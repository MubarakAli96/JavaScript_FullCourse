'use strick'

/*
 dom munipulation

console.log( document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!!!'; 

document.querySelector('.number').textContent =13;
document.querySelector('.score').textContent = 22; 
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random() *20 )+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
 const guess = Number(document.querySelector('.guess').value);
 
 // when there is guess number 
 if(!guess){
  document.querySelector('.message').textContent = '⛔ No Number!!!'; 

 } else if(guess === SecretNumber ){
  document.querySelector('.message').textContent = '🎉 Correct Number!!!';
  document.querySelector('body').style.backgroundColor =  '#60b347';
  document.querySelector('.number').textContent = SecretNumber;

  if( score > highscore){
     highscore = score;
     document.querySelector('.highscore').textContent = highscore;
  }

 
}
 else if(guess > SecretNumber)
{
  if( score > 1){
  document.querySelector('.message').textContent = '🤦‍♂️ Number is greater then Secret Number';
  score--;
  document.querySelector('.score').textContent = score; 
  }else{
    document.querySelector('.message').textContent = '✨ Loss the game .......';
    document.querySelector('.score').textContent = 0;
  }
}
else if( guess < SecretNumber){
  if(score > 1){
  document.querySelector('.message').textContent = '🤦‍♂️ Number is smaller then Secret Number';
  score--;
  document.querySelector('.score').textContent = score; 
  }else{
    document.querySelector('.message').textContent = '✨ Loss the game .......';
    document.querySelector('.score').textContent = 0;
  }
}

 
});

// reset all

document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    SecretNumber = Math.trunc(Math.random() *20 )+1;
    document.querySelector('.message').textContent = 'Start guessing...'; 
    document.querySelector('.score').textContent = score; 
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = ''; 
    document.querySelector('body').style.backgroundColor =  '#222';




});