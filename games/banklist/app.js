'use strick'

// selector 

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
//  const  header = document.querySelector('.header');
// const section = document.querySelectorAll('.section');
//  console.log(header);
//  console.log(section);
//  document.getElementById
//  document.getElementsByClassName
//  document.getElementsByTagName

// inserting in html

//  const message = document.createElement('div');
//  message.classList.add('cookie-message');

//  message.innerHTML = ' we use cookied for improved functionlity and analytics . <button class="btn btn--close-cookie "> Got it! </button>'


//  header.append(message);

//  // deleting

//  document
//  .querySelector('.btn--close-cookie')
//  .addEventListener('click', function(){

//   message.parentElement.removeChild(message);

//  });

 // same use berfor and after
 /* 
 header.after(mesage);
 header.before(message);
 */

//  message.style.backgroundColor = '#37383d';

 // project start

const modal = document.querySelector('.modal');
const CloseBTn = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');



const showModalBtn = document.querySelectorAll('.btn--show-modal');
  // console.log(showModalBtn);
  for(let i = 0; i < showModalBtn.length; i++)
   showModalBtn[i].addEventListener('click', function(){

    //  console.log('hello');
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
   });

CloseBTn.addEventListener('click' , function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');



});
overlay.addEventListener('click', function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// smoth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function(e){

  section1.scrollIntoView({behavior: 'smooth'});
});

// page navigation

// document.querySelectorAll('.nav__link').forEach
// (function (el) {
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     console.log(id);
//   });
  
// });

// second method

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  console.log(e.target);
  if(e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
        console.log(id);
  }
});
