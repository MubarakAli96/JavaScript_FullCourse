const firstName = 'Mubarak';
const job = 'developer';
const birthYear =  1997;
const year = 2023;

const Mubarak = "I'am " + firstName + ', a ' + (year - birthYear) + " year old " + 'and ' + " I'am " + job;
 console.log(Mubarak);

 // now use string literals

 const mubarakNew = `I'm ${firstName}, a ${year - birthYear} year old . and I'am ${job}`;

 console.log(mubarakNew);