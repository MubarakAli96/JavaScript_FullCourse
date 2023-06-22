//functions

// function greet (member){ // parameter
//   console.log("hello  " + member) ;
// }

// greet("faizan");// argument
// greet("saqib");
// greet("kashif");

// function salam(dost){
//   console.log("kasay ho? " + dost);
// }

// salam("sabir");
// salam("wasim");
// salam("ahsan");

// function employee(fileName){
//  return "working on fileName: " + fileName;

// }
// let data = employee("mubarak");
// console.log(data);

// function add(num1, num2){
//   return num1 + num2;
// }
// let result = add(4,10);
// document.write(result);

//Recursion

// function data(write, times){
//   document.write(write);
//   if( times > 0){
//      data(write, times-1);
//   }
// }
// data("hello " , 7);


// function factorial(num){
//   if(num > 1){
//     return num * factorial(num - 1);
//   }
//   return 1;
// }
// console.log(factorial(8));

//closures = scopes( means bondary);
//global scope = parant scope( whole file accessable );
//local scope = child scope( accessable within function);

let abc = 7;
function print(){
 let df = 8
  console.log(df);

}
console.log(abc);
print();
