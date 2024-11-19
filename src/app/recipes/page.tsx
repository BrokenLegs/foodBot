"use client";
import { Input } from "@/components/ui/input";
import RecipeCard from "@/components/RecipeCard";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Info, Mic } from "lucide-react";
import {
  // diet,
  // cuisineType,
  // dishType,
  // healthLabels,
  // mealType,
  mostCommonDietLabels,
  mostCommonAllergies,
  fields,
} from "@/features/RecipeSearch/data/recipeFields";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCardTrigger,
  HoverCard,
  HoverCardContent,
} from "@/components/ui/hover-card";

export default function Page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchFilter, setSearchFilter] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [submittedFilter, setSubmittedFilter] = useState("");
  const [dietAndHealthFilters, setDietAndHealthFilters] = useState<fields[]>(
    []
  );
  const [allergyFilters, setAllergyFilters] = useState<fields[]>([]);

  useEffect(() => {
    const searchValueString = sessionStorage.getItem("searchFilter");
    if (searchValueString) {
      setSearchFilter(searchValueString);
    }
    const savedDietAndHealthFilters = sessionStorage.getItem(
      "dietAndHealthFilters"
    );
    const savedAllergyFilters = sessionStorage.getItem("allergyFilters");

    if (savedDietAndHealthFilters) {
      setDietAndHealthFilters(JSON.parse(savedDietAndHealthFilters));
    }

    if (savedAllergyFilters) {
      setAllergyFilters(JSON.parse(savedAllergyFilters));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "dietAndHealthFilters",
      JSON.stringify(dietAndHealthFilters)
    );
  }, [dietAndHealthFilters]);

  useEffect(() => {
    sessionStorage.setItem("allergyFilters", JSON.stringify(allergyFilters));
  }, [allergyFilters]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSubmittedFilter(searchFilter);
      sessionStorage.setItem("searchFilter", searchFilter);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const searchFrom = event.target.getAttribute("data-searchfrom");
    const newFilter: fields = {
      apiType: event.target.getAttribute("data-type") || "",
      apiParameter: event.target.value,
      definition: event.target.getAttribute("data-definition") || "",
      webLabel: event.target.value,
    };
    if (searchFrom === "diet") {
      if (checked) {
        setDietAndHealthFilters((prev) => [...prev, newFilter]);
      }
      if (!checked) {
        setDietAndHealthFilters((prev) =>
          prev.filter((filter) => filter.apiParameter !== value)
        );
      }
    }
    if (searchFrom === "allergy") {
      if (checked) {
        setAllergyFilters((prev) => [...prev, newFilter]);
      }
      if (!checked) {
        setAllergyFilters((prev) =>
          prev.filter((filter) => filter.apiParameter !== value)
        );
      }
    }
  };

  return (
    <>
      <Navbar />
      <header className='flex flex-col mx-auto items-center p-10 md:w-1/2 lg:w-1/3 gap-2 '>
        <div className='flex w-full'>
          <Input
            placeholder='Search for recipe'
            value={searchFilter}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            autoFocus
          />{" "}
          <Button className='bg-foodBotColor ml-5'>
            <Mic size={24}></Mic>{" "}
          </Button>
        </div>
        <div className='filters flex justify-center gap-4 w-full text-muted-foreground'>
          <Popover>
            <PopoverTrigger>Diet</PopoverTrigger>
            <PopoverContent>
              <div className='grid sm:grid-cols-2 gap-y-2 gap-x-8 items-start text-muted-foreground'>
                {mostCommonDietLabels.map((diet) => (
                  <div
                    key={diet.webLabel}
                    className='flex items-center gap-x-2 hover:text-foreground'
                  >
                    <HoverCard openDelay={350}>
                      <HoverCardTrigger className='cursor-pointer'>
                        <Info size={18} />
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <p>{diet.definition}</p>
                      </HoverCardContent>
                    </HoverCard>
                    <label htmlFor={diet.webLabel}>{diet.webLabel}</label>
                    <input
                      className='ml-auto'
                      type='checkbox'
                      id={diet.webLabel}
                      name={diet.webLabel}
                      value={diet.apiParameter}
                      data-type={diet.apiType}
                      data-searchfrom='diet'
                      data-definition={diet.definition}
                      onChange={(e) => handleCheckboxChange(e)}
                      checked={dietAndHealthFilters.some(
                        (f) => f.apiParameter === diet.apiParameter
                      )}
                    />
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>Allergies</PopoverTrigger>
            <PopoverContent>
              <div className='grid sm:grid-cols-2 gap-y-2 gap-x-8 items-start text-muted-foreground'>
                {mostCommonAllergies.map((allergy) => (
                  <div
                    key={allergy.webLabel}
                    className='flex items-center gap-x-2 hover:text-foreground'
                  >
                    <HoverCard openDelay={350}>
                      <HoverCardTrigger className='cursor-pointer'>
                        <Info size={18} />
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <p>{allergy.definition}</p>
                      </HoverCardContent>
                    </HoverCard>
                    <label htmlFor={allergy.webLabel}>{allergy.webLabel}</label>
                    <input
                      className='ml-auto'
                      type='checkbox'
                      id={allergy.webLabel}
                      name={allergy.webLabel}
                      value={allergy.apiParameter}
                      data-type={allergy.apiType}
                      data-searchfrom='allergy'
                      data-definition={allergy.definition}
                      onChange={(e) => handleCheckboxChange(e)}
                      checked={allergyFilters.some(
                        (f) => f.apiParameter === allergy.apiParameter
                      )}
                    />
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <main className='px-20'>
        <div className='card-container container mx-auto flex flex-col items-center justify-center md:grid md:grid-cols-3 xl:grid-cols-5 gap-4'>
          <RecipeCard
            searchFilters={submittedFilter}
            dietAndHealthFilters={dietAndHealthFilters}
            allergyFilters={allergyFilters}
          />
        </div>
      </main>
    </>
  );
}
