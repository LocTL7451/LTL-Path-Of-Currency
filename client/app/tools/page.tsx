"use client";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
function page() {
  return (
    <>
      <Toaster />
      <div className="h-fit lg:grid lg:grid-cols-2 ">
        <div className="m-[2rem] mt-[2rem]   md:ml-[7rem] md:mr-[4rem] lg:mr-0 md:mt-[5rem] text-zinc-200">
          <div className="w-fit">
            <h1 className="text-5xl font-bold">Tools</h1>
            <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-zinc-400 via-zinc-500 w-11/12" />
          </div>
        </div>
        <div className="flex justify-center items-center">

        </div>
      </div>
    </>
  );
}

export default page;
