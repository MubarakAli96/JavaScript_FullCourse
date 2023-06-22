let MarkMass = 78;
let JohnMass = 92;
let MarkHight = 1.69;
let JohnHight = 1.95;

let MarkBMI = MarkMass / MarkHight ** 2;

let JohnBMI  = JohnMass / (JohnHight * JohnHight);
console.log( MarkBMI, JohnBMI);

// let markHigherBMI  =  MarkBMI  > JohnBMI;

// console.log(markHigherBMI);

// use data 2

const massMark = 95;
const massJohn = 85;
const hightMark = 1.88;
const hightJohn =   1.76;

const BMIMark =  massMark / ( hightMark * hightMark);
const BMIJohn = massJohn  / hightJohn ** 2;

console.log( BMIJohn , BMIMark);
const markHigherBMI = BMIMark > BMIJohn ;
console.log( markHigherBMI);
