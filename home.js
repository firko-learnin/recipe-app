function createCuisineSection(cuisine) {
  const { name, recipes } = cuisine;

  const cuisineSection = document.createElement("section");
  cuisineSection.className = "cuisine-section";

  const title = document.createElement("h4");
  title.className = "cuisine-section__title";
  title.innerText = name;
  cuisineSection.appendChild(title);

  const cardContainer = document.createElement("div");
  cardContainer.className = "horizontal-card-container";
  //Call createRecipeCard function on each recipe within a cuisine
  recipes.forEach((recipe) => {
    const recipeCard = createRecipeCard(recipe);
    cardContainer.appendChild(recipeCard);
  });

  cuisineSection.appendChild(cardContainer);

  return cuisineSection;
}

//Function to update DOM with cuisines and recipe cards
async function updateAllRecipes() {
  const cuisines = await Promise.all(CUSINE_TYPES.map(fetchCusineRecipes));
  const main = document.querySelector("main");
  //Run createCuisineSeciton for each cuisine
  cuisines.forEach((cuisine) => {
    const cuisineSection = createCuisineSection(cuisine);
    main.appendChild(cuisineSection);
  });
  //Remove loading spinner from homepage once promise returned
  const loadingSpinner = document.querySelector(".loading-spinner-container");
  main.removeChild(loadingSpinner);
}

//Call update recipes on page load to populate cuisines with recipe cards
updateAllRecipes();
