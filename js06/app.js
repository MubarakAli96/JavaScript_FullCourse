// objects
// let  person = {   // making object person
//   name:"mubarak",//  name:"mubarak" property of person
//   cnic: 71401-5287437-9,
//   eyesColor : "blue",
//   language: "english",
// // above name, cnic, eyescolor, language  these are keys of object
// // mubarak, blue,7140152874379, english  these are value f keys
// speak: function(sentence){ // method differnce blw function  and method is that method is made inside object,
//  console.log(sentence + this.name)
// }
// };

// person.speak(' hello i am ');
// console.log(person);

// console.log(person.name);// if we call specific property of object 

// store object data

// let student1 = {
//   name:"mubarak",
//   rollNo:420,
//   techer:"nadir",
//   className1: "javaScript"
// }
// let student3 = {
//   name:"hamza",
//   rollNo:420,
//   techer:"nadir",
//   className1: "javaScript"
// }
// let student4 = {
//   name:"ali",
//   rollNo:420,
//   techer:"nadir",
//   className1: "javaScript"
// }
// let student=[student1,student3, student4];

// console.log(student);

// same work using function 

// function provideStudent(name1,classSection1,rollno1,eyes1) {
//   return{
//     name:name1,
//     classSection:classSection1,
//     rollNo:rollno1,
//     eyes:eyes1,
//   };

// }
// let students = [
//   provideStudent("sara",2,34,"black"), 
//   provideStudent("salman", 1, 23, "blue"),
//   provideStudent("ahil", 0, 3, "red"),
// ];

// console.log(students);

//get data from user

// function provideStudent(){
//   return{
//     name:prompt("your name"),
//     calss:prompt("which class your are?"),
//     eyesColor:prompt("color of your eyes"),
//     rollno:prompt("roll number ?"),
//   };
// }
// let student =[
//   provideStudent(),
// ];
// console.log(student);

// let student =[];
// function provideStudent(){
//   let std ={
//     name:prompt("your name"),
//         calss:prompt("which class your are?"),
//         eyesColor:prompt("color of your eyes"),
//         rollno:prompt("roll number ?"),
//   };
//   student.push(std);
//   console.log(student);
// }

// store in local storage
// localStorage.setItem("name","mubarak");

// json conversation object to String

 let perStudent = localStorage.getItem("student");
 let student =perStudent ? JSON.parse(perStudent) : [];
 function provideStudent(){
   let std ={
    name:prompt("your name"),
        calss:prompt("which class your are?"),
        eyesColor:prompt("color of your eyes"),
        rollno:prompt("roll number ?"),
  };
   student.push(std);
  console.log(student);
  let stringify = JSON.stringify(student);// convert to string
  localStorage.setItem("student", stringify);// save it to localstroge
}