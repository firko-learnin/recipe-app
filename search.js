//Search function using input value
async function handleSubmit() {
  const input = document.getElementById("search-bar");
  const query = input.value;
  input.value = "";

  const cardContainer = document.getElementById("search-card-container");
  const recipes = await fetchRecipes(query, "");

  console.log(recipes);

  //Create recipe cards with fetch result
  recipes.forEach((recipe) => {
    const recipeCard = createRecipeCard(recipe);
    cardContainer.appendChild(recipeCard);
  });
}

//Assign search button a variable and add click event listener
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleSubmit);
