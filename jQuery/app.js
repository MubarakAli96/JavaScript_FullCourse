// // jQuery(document).ready(function(){
//   $(document).ready(function(){
//     $(".customClassName").text(" through jquery");
//     $("h2,p").text(' i use jquery to cahange this example text');
//     $('h2.class-change').text('its 3rd change i have done through jquery');

    
// });
// // });

// // $(selector).event(function(){

  
// // });

// example 2


// $(document).ready(function(){
//   $('#customId').html("<h2> strong text <span> changed</span></h2");
//   $('span').css("color", "red");
//   $('section').html("<h1>hello pakistan <span> india</span </h1> ");
//   $('span').html("i love india");
//   $('span').style("width", "1000000px");

// });

// Example 3

// $(document).ready(function(){
//  $('div p.middle-para').remove();
// });

//event 

$(document).ready(function(){
 // first way of event
//   $('button').dblclick(function(){
//  console.log('i am clicked');
//   });

// second way of events

// $('button').on('dblclick', function(){
//  console.log('second way of click');
// });

//3rd way of event
// $(document).on("click", "button", function(){

//   console.log("its our 3rd way of click");

// });

// $(document).on("click", "button", function(){
//     console.log("yes  you did  it");
// });

const $parents = $('div#customeId');
$parents .html("<button> click me here, I am dymanic</button");


});