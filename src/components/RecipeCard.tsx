import React from "react";
import { useState, useEffect } from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getRecipes, Recipe } from "@/features/RecipeSearch";
import Link from "next/link";
interface RecipeCardProps {
  searchFilter: string;
}

export default function RecipeCard({ searchFilter }: RecipeCardProps) {
  console.log(searchFilter);

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (searchFilter === "") {
        console.log("early return");
        return;
      }
      try {
        setLoading(true);
        const data = await getRecipes(searchFilter);
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [searchFilter]);

  return (
    <>
      {recipes.map((recipe) => (
        <Card key={recipe.url} className='bg-background text-foreground'>
          <Link href={recipe.url}>
            <CardHeader>
              <img src={recipe.image} alt={recipe.label} />
            </CardHeader>
            <CardDescription className='px-6 pb-4'>
              <p className='text-lg'>{recipe.label}</p>
              <p className='text-xs'>({recipe.cuisineType})</p>
              <p className='text-xs'>
                {recipe.cautions.length > 0 && <span>contains: </span>}
                {recipe.cautions.map((caution, index) => (
                  <span key={index} className='text-red-400 font-bold'>
                    {index != 0 && ", "}
                    {caution}
                  </span>
                ))}
              </p>
            </CardDescription>
          </Link>
          <hr className='border-gray-400' />

          <CardDescription className='flex justify-evenly px-6 py-2 '>
            <p className=''>
              Calories:{" "}
              <span className='text-green-300 font-bold'>
                {recipe.calories}
              </span>
            </p>
            <div className='border-r-2'></div>
            <HoverCard>
              <HoverCardTrigger className='cursor-pointer'>
                <p>
                  Ingredients:
                  <span className='text-green-300 font-bold'>
                    {" "}
                    {recipe.ingredientLines.length}
                  </span>
                </p>
              </HoverCardTrigger>
              <HoverCardContent>
                <ul>
                  {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index} className='my-2'>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          </CardDescription>
          <hr className='border-gray-400 px-6' />
        </Card>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </>
  );
}
