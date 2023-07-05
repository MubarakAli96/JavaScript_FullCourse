'use strick'

const Person = function(firstName, birthYear){
this.firstName = firstName;
this.birthYear = birthYear;



};

 const jonas = new Person('jonas', 1991);
 const mubarak = new Person('mubarak', 2000);
const  sara = function(ali, ada){

};
 console.log(jonas);
 console.log(mubarak);
 console.log( sara instanceof Person);
//new empty object is created,
// function is called, this = {}
//new  linked is to prototype
// function automatically return {}

/* prototypes 
*/
Person.prototype.calAge =function(){
  console.log( 2037 - this.birthYear);
};

console.log(Person.prototype);
jonas.calAge();  