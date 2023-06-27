// const mySelf ={
//   firstName: 'mubarak',
//   lastName: 'khan',
//   age:2023-1994,
//   job:'developer',
//   friend: ['wasim', 'ahmed', 'ahsan'],
// }
// console.log(mySelf);
// console.log(mySelf.firstName);// use dot notation to call name
// console.log(mySelf['lastName']);// brackit notation
// // brackit notation we use same name to store in varible and call them example

// const ame = 'Name';
// console.log(mySelf['first' + ame]);
// console.log(mySelf['last' + ame]);
// // we can't use this in dot notation
// // when to use brackitnotation use
// //1. we nned to first compute the property name we use brackit notation
// //other wise we use dot notation

//  const interestIn = prompt
// ('what do you want to know about mubarak? choose blw firstName,LastName,age,job and friend');
// // console.log(mySelf[interestIn]);
// if(mySelf[interestIn]){
//   console.log('found this ' + mySelf[interestIn]);
// }
// else{
//   console.log('not found that here');
// }

// console.log(mySelf.firstName + ' ' + 'has ' + mySelf.friend.length  + ' friends and his best friend is called ' + mySelf.friend[2]);

// OBJectS METHODS

const respect ={
  firstName: 'mubarak',
  lastName: 'ali',
  BirthYear: 1997,
  job: 'develoer',
  friends: ['wasim', 'ahsan', 'muzammil'],
  hasDriverLicense: true,
  calAge: function(){ // object methodss
   this.age =  2023 - this.BirthYear;
   return this.age;
  //  console.log(this.age);
  },
  getSummary:function(){
    return `${this.firstName} is a ${this.calAge()} years old ${this.job}
     and he has ${this.hasDriverLicense ? 'a' : 'no'} driving licesnse.`
  }

};
//using this key word
console.log(respect.calAge());
console.log(respect.age);
console.log(respect.getSummary());
// console.log(respect['calAge'](1996));




