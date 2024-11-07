require("dotenv").config();

const baseUrl = "https://api.edamam.com/";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_ID = process.env.NEXT_PUBLIC_API_ID;
const food = "Fried Sriracha Tofu";

const url = `${baseUrl}api/recipes/v2?type=public&q=${food}&app_id=${API_ID}&app_key=${API_KEY}`;

export interface Recipe {
  calories: number;
  cautions: string[];
  cuisineType: string[];
  dietLabels: string[];
  dishType: string[];
  healthLabels: string[];
  image: string;
  images: {
    LARGE: string;
    REGULAR: string;
    SMALL: string;
    THUMBNAIL: string;
  };
  ingredientLines: string[];
  label: string;
  mealType: string[];
  shareAs: string;
  uri: string;
  url: string;
}

export async function getRecipes(): Promise<Recipe[]> {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);

  const recipes: Recipe[] = data.hits.map((hit: any) => ({
    calories: hit.recipe.calories,
    cautions: hit.recipe.cautions,
    cuisineType: hit.recipe.cuisineType,
    dietLabels: hit.recipe.dietLabels,
    dishType: hit.recipe.dishType,
    healthLabels: hit.recipe.healthLabels,
    image: hit.recipe.image,
    images: {
      LARGE: hit.recipe.image,
      REGULAR: hit.recipe.image,
      SMALL: hit.recipe.image,
      THUMBNAIL: hit.recipe.image,
    },
    ingredientLines: hit.recipe.ingredientLines,
    label: hit.recipe.label,
    mealType: hit.recipe.mealType,
    shareAs: hit.recipe.shareAs,
    uri: hit.recipe.uri,
    url: hit.recipe.url,
  }));

  console.log(recipes);
  return recipes;
}
