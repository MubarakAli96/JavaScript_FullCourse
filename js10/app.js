// Synchronous javascript is synchronous .. code work line by line
//Asynchronous code work line by line but if incase if code not work it start other work first.
// exampl ap dahi aur roti lanay jaty ha.. ap roti lanay gaye wahan rash ha.. syc mai ya hoga k ap wait karo gy phalay roti he lo gy ..
// lakin  async mai ap roti k ly wait nai karo gy .. ap bolo gy k ap roti bana lo aur ap dahi lanay gaye. wapis akay roti lo gy.

// alert("thrusday"); // it run  and wiat till it complete
// console.log(" today is thrusday");// after complation alert then console work  this is best example of synchtonous

// function runafterOneSecond (){
//   setTimeout(function(){
//     console.log("done");     this is example of asynchronous best it run console and after that function run
//   },2000);
// }
// runafterOneSecond();
// console.log("hello pakistan"); this is process is called eventloop.

// callbacks:- function hotay ha.. wo function hoty ha jp asynchronous mai hamra kam complete honay k bd chalty han

// function runafterOneSecond(cb){
//   setTimeout(function(){
//     console.log("done");
//     cb();
//   },1000);
// }
// function toBeExcutedWhenDone(){ // this function  is callback function
//   console.log("this the cb done");

// }
// runafterOneSecond(toBeExcutedWhenDone);
// console.log("pakistan zindabad");

//promise:- multiple callbacks, aik data ya dosra data bi mangwana ha , back to back to data arhi ha

// function promise(value){
//   return new Promise(function (resolve) {
//     setTimeout(function(){
//       let data = 10 + value;
//       resolve(data);
//     },1000);
//   });
// }
// promise(5)
// .then(function(data){
//   return promise(data);
// }).then(function(data){
//   return promise(data);
// }).then(function(data){
//   console.log(data);
// })

//async await

function promise(value){
    return new Promise(function (resolve) {
      setTimeout(function(){
        let data = 10 + value;
        resolve(data);
      },1000);
    });
  }
  async function run (){ // asyn funtion by default return a promise
      const data = await promise(10);
      const data1 = await promise(data);
      const data2 = await promise(data1);
      const data3 = await promise(data2);
      return data3
  }
  run().then(function(data3){
      console.log(data3)
  });




