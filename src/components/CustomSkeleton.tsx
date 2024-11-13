import React from "react";

export default function CustomSkeleton() {
  return (
    <>
      <div className='col-start-3 row-start-2 flex flex-col gap-4 items-center pt-6 px-6 h-[348px] md:h-[490px]  w-full border-4 animate-pulse rounded-lg'>
        <div className=' p-6 w-full max-w-[324px] h-[370px] border-4 '></div>
        <div className=' h-2 w-2/3 border-8 rounded-md'></div>
        <div className=' h-2 w-1/3 border-4 rounded-md'></div>
        <div className=' h-2 w-2/4 border-4 rounded-md'></div>
        <div className='flex w-full border-t-2 animate-none mt-auto justify-evenly -px-4 py-2'>
          <div className='h-2 w-1/3 border-4 rounded-md animate-pulse'></div>
          <div className='h-2 w-1/3 border-4 rounded-md animate-pulse'></div>
        </div>
      </div>
    </>
  );
}
