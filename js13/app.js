//classes and object

// class Product {
//   constructor( title, price, description){
//     this.title = title;
//     this.price = price;
//     this.details = description;
//   }
// }
// const product1 = new Product("led tv" , 12000," the best one tv and 4k altar Hd");
// console.log(product1);
// const product2 = new Product("plasma" , 182000, "this is plasma tv having 5k alter hd ");
// console.log(product2);

// class Shape {
//   constructor (id, x, y) {
//       this.id = id
//       this.move(x, y)
//   }
//   move (x, y) {
//       this.x = x
//       this.y = y
//   }
// }
// const square = new Shape("square", 5, 5);
// console.log(square);

// class Shape{
//   constructor(id,x,y){
//     this.id = id;

//   }
//   move(x,y){
//     this.x = x;
//     this.y = y;
//   }
// }
// const square = new Shape("sqare" , 5, 7);
// const rectangle = new Shape("rectangle", 5,7);
// square.move(5,5);
// rectangle.move(5,5);
// console.log(square,rectangle);

const students = [];

class Student {
  constructor(fullNmae, rollNo,batch, subject){
    this.fullNmae = fullNmae;
    this.rollNo = rollNo;
    this.batch = batch;
    this.subject = subject;
    this.attendance = [];
  }
  markAttendance(){
    this.attendance.push(new Date());
  }
}

const student1 = new Student("hamza", 12, "b", "javascript");
student1.markAttendance();
students.push(student1);
console.log(students);

// inheritence

class Volunteer extends Student {
  constructor(fullNmae, rollNo,batch, subject){
    super(fullNmae, rollNo,batch, subject);
    this.canVolunteerIn = []
  }
  addVolunterSkill(skill){
    this.canVolunteerIn.push(skill);
  }

}
const student1 = new Student("hamza", 12, "b", "javascript");
const volunter = new Volunteer("hamza", 12, "b", "javascript");
student1.markAttendance();
students.push(student1);
console.log(students);



