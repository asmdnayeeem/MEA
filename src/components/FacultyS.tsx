import React from "react";

export default function FaculyS() {
  return (
    <>
      <div className="p-8 flex justify-center flex-col gap-6 items-center w-full">
        <p className="font-metrapolis-light text-[1.5rem] sm:text-2xl md:text-3xl">
          Faculty Section
        </p>
        <div className="flex gap-8 flex-wrap justify-around items-center">
          <div className="w-[12rem] rounded-xl h-[15rem] bg-black/80"></div>
          <div className="w-[12rem] rounded-xl h-[15rem] bg-black/80"></div>
          <div className="w-[12rem] rounded-xl h-[15rem] bg-black/80"></div>
        </div>
      </div>
    </>
  );
}
