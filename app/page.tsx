"use client";

import { AnimatedPinDemo } from "./components/LandingPage/Card";

const Page = () => {
	return (
		<>
			<br />
			<br />
			<br />

			<h1 className="text-8xl text-white text-center milky-walky mb-10">
				Weight Tracker
			</h1>
			<div className="flex items-center justify-center w-[75vw] mx-auto gap-20">
				<div className=" pr-[4rem] w-1/2">
					<h1 className="text-white text-[7rem] milky-walky">Guess what!</h1>
					<p className="text-[1.25rem] text-neutral-400">
						If you start tracking your weight, you will be able to see your
						habits and wether your weight decreases or increases and take
						control over it before it becomes a problem.
					</p>
				</div>
				<div className="w-1/2">
					<AnimatedPinDemo />
				</div>
			</div>
		</>
	);
};

export default Page;
