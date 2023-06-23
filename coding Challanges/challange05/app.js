// const DolphinsAverage = calcAverage => {
//   const DolphinsAverage = calcAverage / 3;
//   return average = `the Dolphanverage ${DolphinsAverage}`;
// }
// console.log(DolphinsAverage(44 +23 + 71));

// const KoalasAverage = calcAverage => {
//   const KoalasAverage = calcAverage / 3;
//   return average = `the Koalasverage ${KoalasAverage}`;
// }
// console.log(KoalasAverage(65 + 54 + 49));

//second way of calAverage ;

// const calAverage =(a,b,c)=>(a+b+c)/3;
// console.log(calAverage(3,4,5));

// const dolAverages = calAverage(44 , 23 , 71);
// const koloasAverages = calAverage(65, 54 , 49);
// console.log(dolAverages, koloasAverages);

// const checkWinner = function(avgDolphins, avgKoloas){
//   if(avgDolphins >= 2 * avgKoloas){
//     console.log(`dolphin win🏆 (${avgDolphins} vs. ${avgKoloas})`);
//   }else if(avgKoloas >= 2 * avgDolphins){
//     console.log(`koloas win🏆 (${avgKoloas} vs. ${avgDolphins})`);
//   }
//   else{
//     console.log('no winner.....');
//   }
// }
// checkWinner(dolAverages,koloasAverages)

// data 2

//dolphins(85,54 , 41) and koloas (23, 34 ,27)

const calAverage =(a,b,c)=>(a+b+c)/3;

console.log(calAverage(3,6,9));
const averDolphins = calAverage(85,54 , 41);
const averKoloas = calAverage(23, 34 ,27);
console.log(averDolphins,averKoloas);

function checkWinner(avgDolhins,avgKoalas){
  if(avgDolhins >= 2 * avgKoalas){
    console.log(`Dolphins win 🏆(${avgDolhins} vs ${avgKoalas})`);
  }else if(avgKoalas >= 2*avgDolhins){
    console.log(`koloas win 🏆 (${avgKoalas} vs ${avgDolhins})`);

  }else{
    console.log('both are not winner');
  }
}

console.log(checkWinner(averDolphins,averKoloas));
