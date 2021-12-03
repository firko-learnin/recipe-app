async function fetchRecipes(query, cuisineType) {
  let url = `https://api.edamam.com/api/recipes/v2?app_key=${APP_KEY}&app_id=${APP_ID}&type=public&q=${query}`;
  if (cuisineType) url += `&cuisineType=${cuisineType}`;

  const response = await fetch(url);

  const data = await response.json();
  return data.hits.map((hit) => hit.recipe);
}

async function fetchCusineRecipes(name) {
  const recipes = await fetchRecipes("", name);
  return { name, recipes };
}
