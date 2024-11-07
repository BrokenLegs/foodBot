"use client";
import { Input } from "@/components/ui/input";
import RecipeCard from "@/components/RecipeCard";
import logo from "@/app/img/logo.png";
import Image from "next/image";
import { useState } from "react";

export default function page() {

  const [searchFilter, setSearchFilter] = useState("");
  const [submittedFilter, setSubmittedFilter] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSubmittedFilter(searchFilter);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  return (
    <>
      <header className='flex justify-evenly items-center mb-4'>
        <Image
          src={logo}
          alt='Logo'
          width={150}
          height={100}
          className='h-20 w-auto rounded-lg'
        />

<Input
          placeholder="Search for recipe"
          className="md:mx-auto"
          value={searchFilter}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
        />      </header>
      <main>
        <div className='card-container grid md:grid-cols-5 text-center gap-4'>
          <RecipeCard searchFilter={submittedFilter} />
        </div>
      </main>
    </>
  );
}
