"use client";
import { useRef, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import { Fade, Slide } from "react-awesome-reveal";
import React from "react";
import Link from "next/link";

import Typed from "typed.js";
import AnimatedHorizontalPage from "./components/horizontal.page.component";
export default function Page() {
	const typeWriterRef = useRef(null);
	useEffect(() => {
		const options = {
			strings: [
				"Tornado Shot Enjoyers",
				"Melee Haters",
				"ZDPS Mains",
				"Div Makers",
			],
			typeSpeed: 75,
			backSpeed: 60,
			loop: true,
		};
		const typed = new Typed(typeWriterRef.current, options);
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className="flex max-h-screen flex-col items-center justify-between p-24 overflow-hidden	">
			<AnimatedHorizontalPage>
				<div className="w-full h-[20rem] p-4 m-4 md:grid md:grid-cols-2 md:grid-rows-2 ">
					<div className=" items-center flex justify-center md:justify-end">
						<div>
							<Fade triggerOnce delay={300}>
								<h1 className="text-zinc-200  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
									{"{ Ogiku Armoury }"}
								</h1>
							</Fade>
							<div>
								<div className="text-zinc-400 text-xl md:text-2xl font-bold flex lg:px-8 py-2 lg:py-4 lg:justify-end  overflow-hidden h-[4rem] ">
									<span id="typed-parent" className="inline-block">
										<span ref={typeWriterRef}></span>
									</span>
								</div>
							</div>

							<div className="w-full md:w-[18rem] lg:w-[25rem] h-[50px]  relative ">
								<Slide
									triggerOnce
									className="absolute left-0 top-0"
									direction="left"
								>
									<div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-zinc-400 via-zinc-500 w-[20rem] md:w-[20rem] lg:w-[20rem] " />
								</Slide>
								<Slide
									triggerOnce
									className="absolute right-0 bottom-0"
									direction="right"
								>
									<div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-l from-zinc-400 via-zinc-500 w-[20rem] md:w-[20rem] lg:w-[20rem] " />
								</Slide>
							</div>
						</div>
					</div>

					<div className="flex justify-center items-start row-span-2   relative">
						<Fade
							triggerOnce
							className="absolute bottom-0 hidden md:block sm:w-[150px] md:w-[200px] lg:w-[300px] xl:w-[300px] "
						>
							<Tilt
								reset={false}
								transitionSpeed={1500}
								tiltMaxAngleX={10}
								tiltReverse={true}
								tiltMaxAngleY={10}
							>
								<div className="flex flex-row gap-2 sm:max-w-[50px] md:max-w-[200px] lg:max-w-[200px] xl:max-w-[200px]">
								</div>
							</Tilt>
						</Fade>
					</div>

					<div className="flex items-center justify-center lg:justify-end space-x-6 mt-10  h-[8rem] mr-10">
						<Fade triggerOnce cascade damping={0.1}>
							<a
								className="cursor-pointer"
								href="https://github.com/LocTL7451/LTL-Path-Of-Currency"
								target={"_blank"}
							>
								<AiFillGithub className="w-14 h-14 text-zinc-200 hover:text-zinc-400 transition-all " />
							</a>
							<a
								className="cursor-pointer"
								href="https://www.linkedin.com/in/loc-lien/"
								target={"_blank"}
							>
								<AiFillLinkedin className="w-14 h-14  transition-all duration-200 text-zinc-200  hover:text-zinc-400 " />
							</a>
							<a href="/contact" className="group">
								<p className="text-zinc-200 text-xl  lg:text-2xl font-semibold hover:text-zinc-400  transition-all duration-[600ms] border-[3px] border-zinc-400 px-4 py-3 rounded-lg">
									Contact Us
								</p>
								<div className="mt-2 space-y-2 h-0 ">
									<div className="h-[2px] bg-zinc-400 m-auto scale-0 transition-all origin-left duration-[200ms] group-hover:scale-100"></div>
									<div className="h-[2px] bg-zinc-400 w-3/4 m-auto scale-0 transition-all origin-right duration-[400ms] group-hover:scale-100"></div>
									<div className="h-[2px] bg-zinc-400 w-1/2 m-auto scale-0 transition-all origin-left duration-[600ms] group-hover:scale-100"></div>
								</div>
							</a>
						</Fade>
					</div>
				</div>
			</AnimatedHorizontalPage>
		{/*Bottom Nav Area*/}
		<div
					id="Description"
					className="grid grid-cols-4 py-[10rem] gap-4 justify-center items-center h-[20rem] max-h-[20rem] "
				>
					<Link
						href={"/"}
						className="xs:h-[20rem] sm:h-[20rem] md:h-[10rem] rounded-lg flex-col col-span-1 border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					>
						<h2 className={`mb-3 text-2xl sm:text-xl font-semibold`}>
							Tools
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							{
								"Check out our armoury of tools, ready for any task"
							}
						</p>
					</Link>
					<Link
						href={"/about"}
						className="xs:h-[20rem] sm:h-[20rem] md:h-[10rem] rounded-lg border col-span-1 border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					>
						<h2 className={`mb-3 text-2xl sm:text-xl font-semibold`}>
							About
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							{"Learn a bit more about the OgikuBois"}
						</p>
					</Link>
					<Link
						href={"/contact"}
						className="xs:h-[20rem] sm:h-[20rem] md:h-[10rem] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					>
						<h2 className={`mb-3 text-2xl sm:text-xl font-semibold`}>
							Contact
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							{"Got questions, suggestions or issues? Reach out to us here."}
						</p>
					</Link>
					<Link
						href="https://github.com/LocTL7451/LTL-Path-Of-Currency"
						className="xs:h-[20rem] sm:h-[20rem] md:h-[10rem] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-500 hover:bg-gray-700 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					>
						<h2 className={`mb-3 text-2xl sm:text-xl font-semibold`}>
							Source Code
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
							{"Check out the jank source code for this site here!"}
						</p>
					</Link>
				</div>
		</div>
	);
}
