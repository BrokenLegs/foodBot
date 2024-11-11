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
import { Separator } from "@/components/ui/separator";
interface RecipeCardProps {
  searchFilter: string;
}
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {recipes.map((recipe, index) => (
        <Card key={index} className='bg-background text-foreground'>
          <Dialog key={index}>
            <DialogTrigger>
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
            </DialogTrigger>
            <DialogContent className='p-6 overflow-y-auto max-h-full flex flex-col md:grid md:grid-cols-2'>
              <DialogTitle className='hidden'>{recipe.label}</DialogTitle>
              <DialogDescription className='1 flex flex-col gap-3'>
                <div>
                  <img src={recipe.image} alt={recipe.label} className='' />
                </div>
              </DialogDescription>
              <DialogDescription className='2 flex items-center'>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-3xl text-foreground '>{recipe.label}</h2>
                  <h3 className='font-bold'>
                    Cuisine:{" "}
                    <span className='text-xs'>({recipe.cuisineType})</span>
                  </h3>
                  <h3 className='font-bold '>
                    {recipe.cautions.length > 0 && <span>Contains: </span>}
                    {recipe.cautions.map((caution, index) => (
                      <span
                        key={index}
                        className='text-red-400 font-bold text-xs'
                      >
                        {index != 0 && ", "}
                        {caution}
                      </span>
                    ))}
                  </h3>
                  <h3 className='font-bold'>
                    Calories: <span className='text-xs'>{recipe.calories}</span>
                  </h3>
                  <h3 className='font-bold'>
                    Servings: <span className='text-xs'>{recipe.yield}</span>
                  </h3>

                  <p className='my-2'>
                    See the full recipe{" "}
                    <Link
                      href={recipe.url}
                      legacyBehavior
                      className='text-left'
                    >
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        className='italic font-bold underline'
                      >
                        here
                      </a>
                    </Link>
                  </p>
                </div>
              </DialogDescription>
              <DialogDescription className='3'>
                <div className=''>
                  <div>
                    <h3 className='font-bold'>Ingredients:</h3>
                    {recipe.ingredientLines.map((ingredient, index) => (
                      <p key={index} className='my-2'>
                        {ingredient}
                      </p>
                    ))}
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>

          <hr className='border-gray-400' />

          <CardDescription className='flex justify-evenly px-6 py-2 '>
            <p className=''>
              Calories:{" "}
              <span className='text-green-300 font-bold'>
                {recipe.calories}
              </span>
            </p>
            <div className=''>
              <Separator orientation='vertical' />
            </div>
            <HoverCard openDelay={350}>
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
    </>
  );
}
