
const Mark= {
  fullName: 'mark millar',
  mass: 78,
  height: 1.69,
  calcBMI:function(){
    this.BMI = this.mass /this.height ** 2;
    return this.BMI;

  },
};

const john= {
  fullName: 'john smith',
  mass: 92,
  height: 1.95,
  calcBMI:function(){
    this.BMI = this.mass /this.height ** 2;
    return this.BMI;
    
  },
};
Mark.calcBMI();
john.calcBMI();

console.log(Mark.BMI, john.BMI);
console.log(`${Mark.fullName} (${Mark.calcBMI()}) is heiger then ${john.fullName} ${john.calcBMI()} `);

// this.age =  2023 - this.BirthYear;
//    return this.age;
