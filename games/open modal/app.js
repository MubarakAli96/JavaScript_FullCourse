'use strick'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const showModalBtn = document.querySelectorAll('.show-modal');
  // console.log(showModalBtn);
  for(let i = 0; i < showModalBtn.length; i++)
   showModalBtn[i].addEventListener('click', function(){

    //  console.log('hello');
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
   });
  //  closeModal.addEventListener('click', function(){
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
    

  //  });
  //  overlay.addEventListener('click', function(){
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');

  //  });
   /*
   we use single function to use both closeModel and overlay 

   closeModal.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    

   });
   overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

   });
   */
const closeModel =  function(){
  modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

// keyPress Events
//keyup = Call a function when the user releases a key:
//keydown = Call a function when the user presses a key:
//keypress= Call a function when the user presses a key:

document.addEventListener('keydown', function(e){
  // console.log(e.key);
  // console.log('a kaey is pressed');
if(e.key === 'Escape'){
  if(!modal.classList.contains('hidden')){
  modal.classList.add('hidden');
  
}
}
if( !overlay.classList.contains('hidden')){
  overlay.classList.add('hidden');

}

});





















// for single  modal opening

  //  const model = document.querySelector('.modal');
  //  const showModelBtn = document.querySelector('.show-modal');
  //  const closemodel=  document.querySelector('.close-modal');
  //  const overLay = document.querySelector('.overlay');

  //  showModelBtn.addEventListener('click', function(){
     
  //   model.classList.remove('hidden');
  //   overLay.classList.remove('hidden');

  //  });
  //  closeModal.addEventListener('click', function(){
  //     model.classList.add('hidden');
  //     overLay.classList.add('hidden');
  //  });


