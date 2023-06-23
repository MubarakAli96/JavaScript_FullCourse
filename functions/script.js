function mobileSound(volumUp ,volumDown){
//  console.log('this will up volume', 'this will down volume');
 const redmiButton = `arrow up will ${volumUp} and arrow down ${volumDown}`;
 return redmiButton;

}
const redmiVolumn = mobileSound('increase', 'will decrease');
console.log(redmiVolumn);
console.log(mobileSound( 2, 4));

//declaration 
function calAge(birthYear){
 return 2037- birthYear;

}
 const age1 = calAge(1991);
 console.log(age1);

// function expression

 const calAge2 = function(birthDay){
  return 2023 -birthDay;

} //   function without name is also called as anonymous function
// rember this is basically expression and expression produce value;

const age2 = calAge2(1991);
console.log(age2);

// 3rd from of function "Arrow function"

// still funciton expression, dont need { } here
// simple for on liner function

 const calAge3 = birthYear => 2037 - birthYear;
 const age3 = calAge3(1991);
 console.log(age3);

 // second example 
// calculate years left in retirment;

const yearsLeftRetirments = birthYear =>{
  const age =2023 - birthYear;
  const retirment = 65 - age;
  return retirment;
}
console.log(yearsLeftRetirments(1994));


const yearsLeftJob = birthYear =>{
  const age = 2023 - birthYear;
  const jobYear = 65 - age;
  const yearsleft =  `mbuarak has ${jobYear} left in his life`;
  return yearsleft;
}

console.log(yearsLeftJob(1994));

// function calling from other functions

function cutFruitPieces(fruits){ //this function is call in next function

  return fruits * 3;
}
function fruitProcessor(apples , oranges){
    // console.log(apples,oranges);
    const applePieces = cutFruitPieces(apples); // here we use upper fucntion
    const orangePieces = cutFruitPieces(oranges);
    const juice =`juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
  
  }
   const appleJuice = fruitProcessor( 5, 0);
   console.log(appleJuice);