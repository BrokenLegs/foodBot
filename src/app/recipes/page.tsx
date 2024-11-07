"use client";
import { Input } from "@/components/ui/input";
import RecipeCard from "@/components/RecipeCard";
import logo from "@/app/img/logo.png";
import Image from "next/image";

export default function page() {
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

        <Input placeholder='Search for recipe' className='md:mx-auto' />
      </header>
      <main>
        <div className='card-container grid md:grid-cols-5 text-center gap-4'>
          <RecipeCard />
        </div>
      </main>
    </>
  );
}
