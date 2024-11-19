export interface fields {
  webLabel: string;
  apiParameter: string;
  definition?: string;
  apiType: string;
}

const diet: fields[] = [
  {
    webLabel: "Balanced",
    apiParameter: "balanced",
    apiType: "diet",
    definition: "Protein/Fat/Carb values in 15/35/50 ratio",
  },
  {
    webLabel: "High-Fiber",
    apiParameter: "high-fiber",
    apiType: "diet",
    definition: "More than 5g fiber per serving",
  },
  {
    webLabel: "High-Protein",
    apiParameter: "high-protein",
    apiType: "diet",
    definition: "More than 50% of total calories from proteins",
  },
  {
    webLabel: "Low-Carb",
    apiParameter: "low-carb",
    apiType: "diet",
    definition: "Less than 20% of total calories from carbs",
  },
  {
    webLabel: "Low-Fat",
    apiParameter: "low-fat",
    apiType: "diet",
    definition: "Less than 15% of total calories from fat",
  },
  {
    webLabel: "Low-Sodium",
    apiParameter: "low-sodium",
    apiType: "diet",
    definition: "Less than 140mg Na per serving",
  },
];

const healthLabels: fields[] = [
  {
    webLabel: "Alchocol-Cocktail",
    apiParameter: "alcohol-cocktail",
    apiType: "health",
    definition: "Describes an alcoholic cocktail",
  },
  {
    webLabel: "Alcohol-Free",
    apiParameter: "alcohol-free",
    apiType: "health",
    definition: "No alcohol used or contained in the recipe",
  },
  {
    webLabel: "Celery-Free",
    apiParameter: "celery-free",
    apiType: "health",
    definition: "Does not contain celery or derivatives",
  },
  {
    webLabel: "Crustcean-Free",
    apiParameter: "crustacean-free",
    apiType: "health",
    definition:
      "Does not contain crustaceans (shrimp, lobster etc.) or derivatives",
  },
  {
    webLabel: "Dairy-Free",
    apiParameter: "dairy-free",
    apiType: "health",
    definition: "No dairy; no lactose",
  },
  {
    webLabel: "DASH",
    apiParameter: "DASH",
    apiType: "health",
    definition: "Dietary Approaches to Stop Hypertension diet",
  },
  {
    webLabel: "Egg-Free",
    apiParameter: "egg-free",
    apiType: "health",
    definition: "No eggs or products containing eggs ",
  },
  {
    webLabel: "Fish-Free",
    apiParameter: "fish-free",
    apiType: "health",
    definition: "No fish or fish derivatives",
  },
  {
    webLabel: "FODMAP-Free",
    apiParameter: "fodmap-free",
    apiType: "health",
    definition: "Does not contain FODMAP foods",
  },
  {
    webLabel: "Gluten-Free",
    apiParameter: "gluten-free",
    apiType: "health",
    definition: "No ingredients containing gluten",
  },
  {
    webLabel: "Immuno-Supportive",
    apiParameter: "immuno-supportive",
    apiType: "health",
    definition:
      "Recipes which fit a science-based approach to eating to strengthen the immune system",
  },
  {
    webLabel: "Keto-Friendly",
    apiParameter: "keto-friendly",
    apiType: "health",
    definition: "Maximum 7 grams of net carbs per serving",
  },
  {
    webLabel: "Kidney-Friendly",
    apiParameter: "kidney-friendly",
    apiType: "health",
    definition:
      "Per serving – phosphorus less than 250 mg AND potassium less than 500 mg AND sodium less than 500 mg",
  },
  {
    webLabel: "Kosher",
    apiParameter: "kosher",
    apiType: "health",
    definition:
      "Contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves",
  },
  {
    webLabel: "Low Potassium",
    apiParameter: "low-potassium",
    apiType: "health",
    definition: "Less than 150mg per serving",
  },
  {
    webLabel: "Low Sugar",
    apiParameter: "low-sugar",
    apiType: "health",
    definition:
      "No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose",
  },
  {
    webLabel: "Lupine-Free",
    apiParameter: "lupine-free",
    apiType: "health",
    definition: "Does not contain lupine or derivatives",
  },
  {
    webLabel: "Mediterranean",
    apiParameter: "Mediterranean",
    apiType: "health",
    definition: "Mediterranean diet",
  },
  {
    webLabel: "Mollusk-Free",
    apiParameter: "mollusk-free",
    apiType: "health",
    definition: "No mollusks",
  },
  {
    webLabel: "Mustard-Free",
    apiParameter: "mustard-free",
    apiType: "health",
    definition: "Does not contain mustard or derivatives",
  },
  {
    webLabel: "No oil added",
    apiParameter: "No-oil-added",
    apiType: "health",
    definition:
      "No oil added except to what is contained in the basic ingredients",
  },
  {
    webLabel: "Paleo",
    apiParameter: "paleo",
    apiType: "health",
    definition:
      "Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils",
  },
  {
    webLabel: "Peanut-Free",
    apiParameter: "peanut-free",
    apiType: "health",
    definition: "No peanuts or products containing peanuts",
  },
  {
    webLabel: "Pescatarian",
    apiParameter: "pescatarian",
    apiType: "health",
    definition:
      "Does not contain meat or meat based products, can contain dairy and fish",
  },
  {
    webLabel: "Pork-Free",
    apiParameter: "pork-free",
    apiType: "health",
    definition: "Does not contain pork or derivatives",
  },
  {
    webLabel: "Red-Meat-Free",
    apiParameter: "red-meat-free",
    apiType: "health",
    definition:
      "Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat. ",
  },
  {
    webLabel: "Sesame-Free",
    apiParameter: "sesame-free",
    apiType: "health",
    definition: "Does not contain sesame seed or derivatives",
  },
  {
    webLabel: "Shellfish-Free",
    apiParameter: "shellfish-free",
    apiType: "health",
    definition: "No shellfish or shellfish derivatives",
  },
  {
    webLabel: "Soy-Free",
    apiParameter: "soy-free",
    apiType: "health",
    definition: "No soy or products containing soy",
  },
  {
    webLabel: "Sugar-Conscious",
    apiParameter: "sugar-conscious",
    apiType: "health",
    definition: "Less than 4g of sugar per serving",
  },
  {
    webLabel: "Sulfite-Free",
    apiParameter: "sulfite-free",
    apiType: "health",
    definition: "No Sulfites",
  },
  {
    webLabel: "Tree-Nut-Free",
    apiParameter: "tree-nut-free",
    apiType: "health",
    definition: "No tree nuts or products containing tree nuts",
  },
  {
    webLabel: "Vegan",
    apiParameter: "vegan",
    apiType: "health",
    definition: "No meat, poultry, fish, dairy, eggs or honey",
  },
  {
    webLabel: "Vegetarian",
    apiParameter: "vegetarian",
    apiType: "health",
    definition: "No meat, poultry, or fish",
  },
  {
    webLabel: "Wheat-Free",
    apiParameter: "wheat-free",
    apiType: "health",
    definition: "No wheat, can have gluten though",
  },
];

const mealType: string[] = [
  "breakfast",
  "brunch",
  "lunch/dinner",
  "snack",
  "teatime",
];

const dishType: string[] = [
  "alcohol cocktail",
  "biscuits and cookies",
  "bread",
  "cereals",
  "condiments and sauces",
  "desserts",
  "drinks",
  "egg",
  "ice cream and custard",
  "main course",
  "pancake",
  "pasta",
  "pastry",
  "pies and tarts",
  "pizza",
  "preps",
  "preserve",
  "salad",
  "sandwiches",
  "seafood",
  "side dish",
  "soup",
  "special occasions",
  "starter",
  "sweets",
];

const cuisineType: string[] = [
  "american",
  "asian",
  "british",
  "caribbean",
  "central europe",
  "chinese",
  "eastern europe",
  "french",
  "greek",
  "indian",
  "italian",
  "japanese",
  "korean",
  "kosher",
  "mediterranean",
  "mexican",
  "middle eastern",
  "nordic",
  "south american",
  "south east asian",
  "world",
];

// Parameters for the search filter. Some items from the HealthLabels and Diet arrays are included in the mostCommonDietLabels array.
const mostCommonDietLabels: fields[] = [
  ...diet,
  {
    webLabel: "Vegan",
    apiParameter: "vegan",
    apiType: "health",
    definition: "No meat, poultry, fish, dairy, eggs or honey",
  },
  {
    webLabel: "Vegetarian",
    apiParameter: "vegetarian",
    apiType: "health",
    definition: "No meat, poultry, or fish",
  },
  {
    webLabel: "Low Sugar",
    apiParameter: "low-sugar",
    apiType: "health",
    definition:
      "No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose",
  },
  {
    webLabel: "Paleo",
    apiParameter: "paleo",
    apiType: "health",
    definition:
      "Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils",
  },
  {
    webLabel: "Alcohol-Free",
    apiParameter: "alcohol-free",
    apiType: "health",
    definition: "No alcohol used or contained in the recipe",
  },
  {
    webLabel: "Keto-Friendly",
    apiParameter: "keto-friendly",
    apiType: "health",
    definition: "Maximum 7 grams of net carbs per serving",
  },
  {
    webLabel: "Immuno-Supportive",
    apiParameter: "immuno-supportive",
    apiType: "health",
    definition:
      "Recipes which fit a science-based approach to eating to strengthen the immune system",
  },
];

const mostCommonAllergies: fields[] = [
  {
    webLabel: "Gluten-Free",
    apiParameter: "gluten-free",
    apiType: "health",
    definition: "No ingredients containing gluten",
  },
  {
    webLabel: "Dairy-Free",
    apiParameter: "dairy-free",
    apiType: "health",
    definition: "No dairy; no lactose",
  },
  {
    webLabel: "Egg-Free",
    apiParameter: "egg-free",
    apiType: "health",
    definition: "No eggs or products containing eggs ",
  },
  {
    webLabel: "Soy-Free",
    apiParameter: "soy-free",
    apiType: "health",
    definition: "No soy or products containing soy",
  },
  {
    webLabel: "Fish-Free",
    apiParameter: "fish-free",
    apiType: "health",
    definition: "No fish or fish derivatives",
  },
  {
    webLabel: "Shellfish-Free",
    apiParameter: "shellfish-free",
    apiType: "health",
    definition: "No shellfish or shellfish derivatives",
  },
  {
    webLabel: "Peanut-Free",
    apiParameter: "peanut-free",
    apiType: "health",
    definition: "No peanuts or products containing peanuts",
  },
];

export {
  diet,
  healthLabels,
  mealType,
  dishType,
  cuisineType,
  mostCommonDietLabels,
  mostCommonAllergies,
};
