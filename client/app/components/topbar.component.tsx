"use client";
import Link from "next/link";
import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import TopBar from "./navbar.component";
function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`z-50 bg-zinc-950 bg-opacity-30 h-[6rem] sticky top-0 left-0 right-0 grid grid-cols-4 text-zinc-200 z-40 ${
          sideBarOpen ? " " : ""
        }`}
      >
        <Link
          href={"/"}
          id="nav-logo"
          className="ml-[2rem] md:ml-[2rem] my-8 h-fit text-3xl font-extrabold flex group cursor-pointer "
        >
          <div className="md:hidden">OGK</div>
          <div className="hidden md:flex">
            <p>O</p>
            {[""].map((letter, index) => {
              return (
                <p
                  key={letter}
                  className={`scale-0  group-hover:scale-100 origin-bottom`}
                  style={{ transition: `${200 + 200 * index}ms` }}
                >
                  {letter}
                </p>
              );
            })}
          </div>
          <div className="hidden md:flex">
            <p>G</p>
            {["I","K","U","B","O","I","S"].map((letter, index) => {
              return (
                <p
                  key={letter}
                  className={`scale-0  group-hover:scale-100 origin-bottom`}
                  style={{ transition: `${200 + 200 * index}ms` }}
                >
                  {letter}
                </p>
              );
            })}
          </div>

        </Link>
        <div className="hidden col-span-3 gap-5 md:flex items-center justify-end space-x-4 lg:space-x-6 mr-[4rem] font-semibold text-lg">
          <Link
            className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
            href={"/"}
          >
            <p>HOME</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>

          <Link
            className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
            href={"/tools"}
          >
            <p>TOOLS</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link
            className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
            href={"/about"}
          >
            <p>ABOUT US</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link
            className=" hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
            href={"/contact"}
          >
            <p>CONTACT US</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link
            className=" hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
            href={"/contact"}
          >
            <p>LOG IN</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
        <div className="md:hidden col-start-4 flex items-center justify-center">
          <Bars3BottomLeftIcon
            onClick={() => setSideBarOpen(true)}
            className="w-8  hover:w-9 text-zinc-400 hover:text-zinc-300 transition-all duration-150"
          />
        </div>
      </nav>
      <TopBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
    </>
  );
}

export default Navbar;
``;
