"use client";
import { Input } from "@/components/ui/input";
import RecipeCard from "@/components/RecipeCard";
import logo from "@/app/img/logo.png";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchFilter, setSearchFilter] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <Navbar />
      <header className='flex justify-evenly items-center mb-4'>
        <Image
          src={logo}
          alt='Logo'
          width={150}
          height={100}
          className='h-20 w-auto rounded-lg'
        />
        <Input
          placeholder='Search for recipe'
          className='md:mx-auto'
          value={searchFilter}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
        />{" "}
      </header>
      <main>
        <div className='card-container grid md:grid-cols-5 gap-2'>
          <RecipeCard searchFilter={submittedFilter} />
        </div>
      </main>
    </>
  );
}
