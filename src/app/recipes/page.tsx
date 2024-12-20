"use client";
import { Input } from "@/components/ui/input";
import RecipeCard from "@/components/RecipeCard";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchFilter, setSearchFilter] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [submittedFilter, setSubmittedFilter] = useState("");

useEffect(() => {
    const searchValueString = sessionStorage.getItem("searchFilter");
    if(searchValueString) {
    setSearchFilter(searchValueString)
  }
},[])

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSubmittedFilter(searchFilter);

  sessionStorage.setItem("searchFilter", searchFilter);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  return (
    <>
    <Navbar />
    <div className="flex justify-center">
      <header className='flex w-full items-center mb-4 p-10 md:w-1/2 lg:w-1/3 '>
        <Input
          placeholder='Search for recipe'
          className='md:mx-auto '
          value={searchFilter}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
        />{" "}
        <Button className="bg-foodBotColor ml-5"> 
          <Mic size={24}></Mic> </Button>
      </header>
          </div>
      <main className="px-20">
        <div className='card-container container mx-auto  flex flex-col items-center justify-center md:grid md:grid-cols-5 gap-4'>
          <RecipeCard searchFilter={submittedFilter} />
        </div>
      </main>
    </>
  );
}
