require("dotenv").config();

const baseUrl = "https://api.edamam.com/";
const API_KEY = process.env.API_KEY;
const API_ID = process.env.API_ID;
const food = "tofu";

console.log(API_KEY);

// Find delicious recipe
// ta emot query för recept osv

const url = `${baseUrl}api/recipes/v2?type=public&q=${food}&app_id=${API_ID}&app_key=${API_KEY}`;
console.log(url);

async function getRecipes() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
  return data.hits;
}

async function displayRecipes() {
  const hits = await getRecipes();
  hits.forEach((hit) => {
    console.log(hit.recipe.label);
  });
  console.log("recipes", hits);
}

displayRecipes();
