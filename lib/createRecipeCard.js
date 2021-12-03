function createRecipeCard(recipe) {
  const recipeCard = document.createElement("a");
  recipeCard.href = recipe.url;
  recipeCard.target = "_blank";

  //Assign recipe card style to all new recipe cards generated
  recipeCard.className = "recipe-card";

  //Colour cards based on time to make, if no time to make orange colour is applied
  if (recipe.totalTime && recipe.totalTime < 15) {
    recipeCard.classList.add("recipe-card--easy");
  }
  if (recipe.totalTime && recipe.totalTime > 40) {
    recipeCard.classList.add("recipe-card--hard");
  }

  //Add image to recipe card
  const image = document.createElement("img");
  image.className = "recipe-card__img";
  image.src = recipe.image;
  recipeCard.appendChild(image);

  //Add recipe title
  const title = document.createElement("h3");
  title.innerText = recipe.label;
  recipeCard.appendChild(title);

  //Add servings and time to make statistics
  const details = document.createElement("div");
  details.className = "recipe-card__details";
  //Add time if recipe time exists
  if (recipe.totalTime) {
    const timeDetail = document.createElement("div");
    timeDetail.className = "recipe-card__details__detail";
    timeDetail.innerHTML = `<span class="material-icons-outlined">schedule</span>${recipe.totalTime} Mins`;
    details.appendChild(timeDetail);
  }
  //Add servings
  const servingsDetail = document.createElement("div");
  servingsDetail.className = "recipe-card__details__detail";
  servingsDetail.innerHTML = `<span class="material-icons-outlined">person</span>${recipe.yield} Servings`;
  details.appendChild(servingsDetail);

  recipeCard.appendChild(details);

  return recipeCard;
}
