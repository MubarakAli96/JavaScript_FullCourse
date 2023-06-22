let  Marks_mass = 78;
let  Marks_height = 1.69;
let  John_mass = 92;
let  John_height = 1.95;

let BMI_mark =  Marks_mass/Marks_height ** 2;
let BMI_John =  John_mass/John_height ** 2;

let markHigherBMI = BMI_mark > BMI_John;

console.log(BMI_mark,BMI_John, markHigherBMI);