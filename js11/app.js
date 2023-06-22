//http request 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


//second method

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function(response){
//     return response.json();
//   })
//   .then(function(data){
//     console.log(data);
//   });

//for comments
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(function(response){
//     return response.json();
//   }).then(function(data){
//     console.log(data);
//   });

//for photos
const photosElement = document.getElementById("images");

fetch('https://jsonplaceholder.typicode.com/photos')
 .then(function(response){
    return response.json();
}).then(function (data) {
  data.forEach( function (image) {
    const url = image.url;
    const imageElement = document.createElement("img");
    imageElement.src = url;
    photosElement.appendChild(imageElement)
  });
})