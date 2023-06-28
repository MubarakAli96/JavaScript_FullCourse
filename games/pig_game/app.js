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
const player0El = document.querySelector('.player--0 ');
const player1El = document.querySelector('.player--1');
const newBtn = document.querySelector('.btn--new');

Score0El.textContent = 0;
Score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// switching player function
const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0 ; 
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
// roll dice functionality 
btnRoll.addEventListener('click', function(){
  if(playing){
 // 1. generating a random diceroll
 const dice = Math.trunc(Math.random() * 6) + 1;

 // 2.display dice
 diceEl.classList.remove('hidden');
 diceEl.src = `dice-${dice}.png`;
 
 // 3. check roll , if its dice 1 then switch to player 2
 if(dice !== 1){
  currentScore = currentScore + dice;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}else{
  // instead of using this we use function
 /* document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0 ; 
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  */
  switchPlayer();
}
  }
});

btnHold.addEventListener('click', function(){
  if(playing){
  // 1 . add cuurent score to player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  if(scores[activePlayer] >= 100){
    
    playing = false;
    document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
    document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  }else{
    switchPlayer();
  }
}
});
//reseting all
newBtn.addEventListener('click', function(){
  document.getElementById('current--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.querySelector(`.player--${activePlayer}`)
  .classList.remove('player--winner');
});

