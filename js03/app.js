
//comparsion operators
//== ,=== show  the type also
//console.log(5 === "5");
//!= , !== also check th type  
//console.log(5 != "6");
// > greater then < less then 
// console.log( 7> 6); greater then 6 
// console,log(7< 6); 7 is less then 7

// conditions in javascripts

// let userAge = +prompt("enter your age");
// if(userAge >= 18){
//   console.log( "your are eligible for cnic");
// }
// else{
//   console.log("your are not eligible for cnic");
// }

// let userBestNum = +prompt( " enter your number");
// let computerNumber = Math.round(Math.random() * 10);

// if( userBestNum === computerNumber){
//   console.log( " you win the game");
// }
// else{
//   console.log( " you lose! "  + computerNumber);
// }


// let NumberInput = prompt(" even or odd ");
// let computerNumber = Math.round( Math.random() * 10);

// if(computerNumber % 2 === 0 &&  NumberInput === "even"){
//   console.log(" you won!!!!" + computerNumber);

// }
// else if( computerNumber % 2 !== 0 && NumberInput === "odd"){
//   console.log("you won!! " + computerNumber);
// }
// else{
//   console.log(" you lost " + computerNumber);
// }

// for loops

// for( let i = 1; i <= 10; i++){
//   console.log( "hello" + i);

// }
//let i = 1; intialization ;
//i <= 10 ; condirion ;
//i++ ; increment;

// table of 4

let table = 10;

// for(let i = 1; i <= 10; i++){
//   console.log( "4" + " x " + i + " = " + 4*i);
// }
//  for ( let i = 1 ; i <= 20; i++){
//   console.log( "3" + " x " + i + " = " + 3*i);
//  }
 for ( let i = 1 ; i <= 20; i++){
  console.log( table+ " x " + i + " = " + table*i);
 }