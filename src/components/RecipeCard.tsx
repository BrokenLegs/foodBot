import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRecipes, Recipe } from "@/features/RecipeSearch";

export default function RecipeCard() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <>
      {recipes.map((recipe) => (
        <Card key={recipe.url} className='bg-background text-foreground'>
          <CardHeader>
            <CardTitle>{recipe.label}</CardTitle>
            <CardDescription>
              <p>{recipe.cuisineType}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img src={recipe.image} alt={recipe.label} />
            <a href={recipe.url}>
              <Button className='bg-background text-foreground '>
                Instructions
              </Button>
            </a>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </>
  );
}
