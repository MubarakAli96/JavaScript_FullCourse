'use strick'
// select elements
const Score0El = document.querySelector('#score--0');
// for id we use also this
const Score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const curentSrore0 = document.getElementById('current--0');
const curentSrore1 = document.getElementById('current--1');

Score0El.textContent = 0;
Score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// roll dice functionality 

btnRoll.addEventListener('click', function(){
 // 1. generating a random diceroll
 const dice = Math.trunc(Math.random() * 6) + 1;

 // 2.display dice
 diceEl.classList.remove('hidden');
 diceEl.src = `dice-${dice}.png`;
 
 // 3. check roll , if its dice 1 then switch to player 2
 if(dice !== 1){
  currentScore = currentScore + dice;
  curentSrore0.textContent = currentScore; 


 }

})

