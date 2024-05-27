import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string;
		description: string;
		detailedContent: {
			title: string;
			description: string;
		};
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [showMore, setShowMore] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
				className
			)}
		>
			{items.map((item, idx) => (
				<div
					key={idx}
					className="relative group block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-yellow-300/[0.8] block rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card
						showMore={showMore === idx}
						setShowMore={setShowMore}
						showMoreContent={item.detailedContent}
						cardIndex={idx}
					>
						<CardTitle>{item.title}</CardTitle>
						<CardDescription>{item.description}</CardDescription>
					</Card>
				</div>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
	showMore,
	setShowMore,
	showMoreContent,
	cardIndex,
}: {
	className?: string;
	children: React.ReactNode;
	showMore: boolean;
	setShowMore: React.Dispatch<React.SetStateAction<number | null>>;
	showMoreContent: {
		title: string;
		description: string;
	};
	cardIndex: number;
}) => {
	return (
		<>
			{showMore && (
				<div className="w-full h-screen bg-neutral-800/50 backdrop-blur-lg fixed top-0 left-0 z-30">
					<div className="w-[55vw] h-[75vh] p-8 fixed bg-black/50  overflow-auto backdrop-blur-xl rounded-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[7vw] py-[7vh]">
						<div className="text-neutral-400 overflow-auto">
							<h1 className="text-6xl mb-6 milky-walky text-center text-neutral-300">
								{showMoreContent.title}
							</h1>
							<p className="text-xl">{showMoreContent.description}</p>
							<button
								className="absolute top-4 right-4 text-neutral-400"
								onClick={() => setShowMore(null)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
			<div
				className={cn(
					"rounded-2xl h-[40vh] w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
					className
				)}
				onClick={() => setShowMore(cardIndex)}
			>
				<div className="relative z-50" onClick={() => setShowMore(cardIndex)}>
					<div className="p-4">{children}</div>
				</div>
			</div>
		</>
	);
};

export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4
			className={cn(
				"text-zinc-100 font-bold tracking-wide mt-0 text-4xl milky-walky",
				className
			)}
		>
			{children}
		</h4>
	);
};

export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-4 text-zinc-400 tracking-wide leading-relaxed text-lg",
				className
			)}
		>
			{children}
		</p>
	);
};
