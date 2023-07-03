'use strick'


const Scores0 = document.getElementById('score--0');
const Scores1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const RollBtn = document.querySelector('.btn--roll');


Scores0.textContent = 0;
Scores1.textContent = 0;
diceEl.classList.add('hidden');


RollBtn.addEventListener('click', function(){
  
  const dice = Math.trunc(Math.random() * 6) +1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;


});
