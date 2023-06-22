// arrow functions

// old  function
// function ass(y, x){
//   return x + y
// }

// const subtract = (x,y) =>{ // arrow functions 
//   return x -y ;

// }

// const multiply = (x,y) => x*y;

// const round = num =>Math.round(num);

// console.log(ass( 20,10));
// console.log(subtract( 20,10));
// console.log(multiply( 20,10));
// console.log(round( 29.234325926520));

// const obj ={
//   name:"mubarak",
//   print: function(){
//     console.log(this.name);
//   }
// }
// obj.print();


// const obj ={ // asynrounouns
//     name:"mubarak",
//     print: function(){
//       setTimeout( () => {
//         console.log(this.name);

//       }, 1000);
//     }
//   }
//   obj.print();

// 
// function printAll( x , y,...z){ // rest parameter
//   console.log(x,y,z);

// }
// printAll(4,5,6,7,8,9,1,0);

// short syntex for bjjects

// const FirstName = " mubarak";
// const LastName  = " khan";
// const obj ={
//   FirstName:FirstName,
//   LastName:LastName,

// };
// console.log(obj);

// const FirstName = " salman";
// const LastName  = " ali";
// const obj ={
//   FirstName,
//   LastName,
//   printName:function(){
//     console.log(this.FirstName,this.LastName);
//   }

// };
// obj.printName();

 // spread operator

//  const arr = ['ishaq', 'bhojani', 'salayani'];

//  const newArr =["some data",...arr, "other data"];

//  console.log(newArr);

// work on obj spread operator

// const obj = {
//   firstName: " mubarak",
//   lastName: " ali",
// };

// const newObj = {...obj, hobby:"game", firstName: "sabir" }; // the firstname here change the old name here
// console.log(newObj);

//00ps = object orient programming

//classes object bana k dati Ha , e.g 