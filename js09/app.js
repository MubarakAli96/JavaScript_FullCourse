// IIFE = immediately invoked function Expressions, function khud he  banty aur call fornan karty ho he call hotay ha
( async function(){ // Anonymous function.
  const response = await fetch("./recipes.json");
  const recipes = await response.json();
  
   const inputElement =  document.getElementById("searchInput");
   const searchElement =  document.getElementById("searchBtn");
   const listElement = document.getElementById("recipe-list");
   const detailElement = document.getElementById("recipeDetailsContainer");

   function loadRescipeDetails(recipes){
    detailElement.innerHTML = ` <h2 class="title">${recipes.title}</h2>
      <h3>Ingredients:</h3>
      <ul>${recipes.ingredients.map(function (ingredient) {
        return "<li>" + ingredient + "</li>"
      }).join("")}</ul>
      <h3>Instruction:</h3>
      <div>${recipes.instructions}</div>
    `;
   }

    function displaySearchResults(result){
      listElement.innerHTML = "";
      result.forEach( function ( recipes) {
      const li = document.createElement("li");
      li.innerHTML = recipes.title;
      li.addEventListener("click", function() {
        loadRescipeDetails(recipes);

      });
        listElement.appendChild(li);
    })
    }
   function search(){
   const query = inputElement.value;
   const result = recipes.filter(function (recipes){
     return (recipes.title.toLowerCase().includes(query) ||
     recipes.ingredients.join(" ").toLowerCase().includes(query)
     )
   });

   displaySearchResults(result);
   }

 
   searchElement.addEventListener("click", search);



})();