import { HoverEffect } from "../ui/card-hover-effect";

export function LearnMoreCard() {
	return (
		<div className=" mx-auto px-8 h-screen">
			<HoverEffect items={projects} />
		</div>
	);
}

export const projects = [
	{
		title: "Stripe",
		description:
			"A technology company that builds economic infrastructure for the internet.",
		link: "https://stripe.com",
		detailedContent: {
			title: "Stripe Detailed Information",
			description:
				"Stripe provides the economic infrastructure for the internet. It enables businesses to accept payments and manage their businesses online.",
		},
	},
	{
		title: "Netflix",
		description:
			"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
		link: "https://netflix.com",
		detailedContent: {
			title: "Netflix Detailed Information",
			description:
				"Netflix is a streaming service offering a variety of TV shows, movies, anime, and more on internet-connected devices, with original content and a wide array of genres.",
		},
	},
	{
		title: "Google",
		description:
			"A multinational technology company that specializes in Internet-related services and products.",
		link: "https://google.com",
		detailedContent: {
			title: "Google Detailed Information",
			description:
				"Google specializes in Internet-related services and products, including search engines, online advertising technologies, cloud computing, software, and hardware.",
		},
	},
	{
		title: "Meta",
		description:
			"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
		link: "https://meta.com",
		detailedContent: {
			title: "Meta Detailed Information",
			description:
				"Meta focuses on building social media and virtual reality products that advance Facebook's mission of connecting the world, including platforms like Facebook, Instagram, and Oculus.",
		},
	},
	{
		title: "Amazon",
		description:
			"A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
		link: "https://amazon.com",
		detailedContent: {
			title: "Amazon Detailed Information",
			description:
				"Amazon is a multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and AI. It provides services like AWS, Prime Video, and more.",
		},
	},
	{
		title: "Microsoft",
		description:
			"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
		link: "https://microsoft.com",
		detailedContent: {
			title: "Microsoft Detailed Information",
			description:
				"Microsoft develops, manufactures, and sells computer software, consumer electronics, and personal computers. Products include Windows, Office, Azure, and Xbox.",
		},
	},
];
