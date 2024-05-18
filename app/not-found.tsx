import React from "react";
import AnimatedBackground from "./components/AnimatedBackground";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-full">
			<AnimatedBackground value={300} />
			<h1 className="text-[10rem] 2xl:text-[15rem] mb-8 text-neutral-100 font-bold leading-[12rem] centrion">
				404
			</h1>
			<p className="text-neutral-300 text-[2rem]">Looks like you got lost...</p>
		</div>
	);
};

export default NotFound;
