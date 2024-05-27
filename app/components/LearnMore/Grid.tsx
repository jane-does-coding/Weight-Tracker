"use client";
import { LearnMoreCard } from "./LearnMoreCard";

const Grid = () => {
	const project = {
		title: "Stripe",
		description:
			"A technology company that builds economic infrastructure for the internet.",
		link: "https://stripe.com",
	};
	return (
		<div className="w-[100vw] h-screen p-4 bg-black">
			<LearnMoreCard />
		</div>
	);
};

export default Grid;
