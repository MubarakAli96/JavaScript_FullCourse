// javascript data and time
// const data = new Date();

// console.log(data.getFullYear());
// console.log(data.getMonth());

// const doomsDay = new Date();
// doomsDay.setDate(20);
// doomsDay.setMonth(11);
// doomsDay.setFullYear(2030);
// doomsDay.setHours(0);
// doomsDay.setMinutes(0);
// doomsDay.setSeconds(0);

// const date = new Date();

// let diff = doomsDay.getTime() - date.getTime(); // to get milliseconds

// console.log((diff/(1000*60*60*24*365.25)).toFixed(1));


// this will work on refresh of page 

// const hours = document.getElementById("hours");
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");

// const date = new Date();
// hours.innerText = date.getHours();
// minutes.innerText = date.getMinutes();
// seconds.innerText = date.getSeconds();

// this will work on second

// const hours = document.getElementById("hours");
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");
// setInterval(function(){
//   const date = new Date();
//   hours.innerText = date.getHours();
//   minutes.innerText = date.getMinutes();
//   seconds.innerText = date.getSeconds();
  

// } ,1000);

// 12 hours format and am and pm


const hoursele = document.getElementById("hoursele");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const eleamPm = document.getElementById("amPm");

setInterval(function(){
  const date = new Date();
 let hours = date.getHours();
  let amPm = "AM";
  if(hours > 11){
    amPm = "PM";
    if(hours > 12){
      hours -= 12;
    }
  }
  hoursele.innerText = hours;
  minutes.innerText = date.getMinutes();
  seconds.innerText = date.getSeconds();
  eleamPm.innerText = amPm;
  

} ,1000);




