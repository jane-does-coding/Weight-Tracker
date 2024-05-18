"use client";
import React, { useState } from "react";
import Entry from "./Entry";
import useEntryModal from "@/app/hooks/useEntryModal";
import { motion } from "framer-motion";

const MainGrid = () => {
	// Initialize states for preferences
	const [metricKg, setMetricKg] = useState(true);
	const [metricCm, setMetricCm] = useState(true);
	const [compactView, setCompactView] = useState(false);

	const toggleWeightUnit = () => {
		setMetricKg((prevMetricKg) => !prevMetricKg);
	};

	const toggleLengthUnit = () => {
		setMetricCm((prevMetricCm) => !prevMetricCm);
	};

	const toggleViewMode = () => {
		setCompactView((prevCompactView) => !prevCompactView);
	};

	/* const entries = [
		{
			num: 1,
			date: "Apr 4th",
			weight: 50, // kg by default
			waist: 63.5, // cm by default
			hip: 44.45, // cm by default
		},
	]; */

	const entries = [
		{
			num: 20,
			date: "Apr 4th",
			weight: 50,
			waist: 63.5,
			hip: 44.45,
		},
		{
			num: 19,
			date: "Apr 5th",
			weight: 50.5,
			waist: 63.7,
			hip: 44.6,
		},
		{
			num: 18,
			date: "Apr 6th",
			weight: 51,
			waist: 64,
			hip: 44.8,
		},
		{
			num: 17,
			date: "Apr 7th",
			weight: 50.8,
			waist: 63.8,
			hip: 44.7,
		},
		{
			num: 16,
			date: "Apr 8th",
			weight: 51.2,
			waist: 64.1,
			hip: 45,
		},
		{
			num: 15,
			date: "Apr 9th",
			weight: 51.5,
			waist: 64.3,
			hip: 45.2,
		},
		{
			num: 14,
			date: "Apr 10th",
			weight: 51.3,
			waist: 64.2,
			hip: 45.1,
		},
		{
			num: 13,
			date: "Apr 11th",
			weight: 51.8,
			waist: 64.5,
			hip: 45.4,
		},
		{
			num: 12,
			date: "Apr 12th",
			weight: 52,
			waist: 64.7,
			hip: 45.6,
		},
		{
			num: 11,
			date: "Apr 13th",
			weight: 52.2,
			waist: 64.8,
			hip: 45.7,
		},
		{
			num: 10,
			date: "Apr 14th",
			weight: 52.5,
			waist: 65,
			hip: 45.9,
		},
		{
			num: 9,
			date: "Apr 15th",
			weight: 52.8,
			waist: 65.2,
			hip: 46,
		},
		{
			num: 8,
			date: "Apr 16th",
			weight: 52.6,
			waist: 65.1,
			hip: 45.9,
		},
		{
			num: 7,
			date: "Apr 17th",
			weight: 53,
			waist: 65.4,
			hip: 46.2,
		},
		{
			num: 6,
			date: "Apr 18th",
			weight: 53.2,
			waist: 65.6,
			hip: 46.4,
		},
		{
			num: 5,
			date: "Apr 19th",
			weight: 53.5,
			waist: 65.8,
			hip: 46.5,
		},
		{
			num: 4,
			date: "Apr 20th",
			weight: 53.3,
			waist: 65.7,
			hip: 46.4,
		},
		{
			num: 3,
			date: "Apr 21st",
			weight: 53.7,
			waist: 66,
			hip: 46.7,
		},
		{
			num: 2,
			date: "Apr 22nd",
			weight: 54,
			waist: 66.2,
			hip: 46.9,
		},
		{
			num: 1,
			date: "Apr 23rd",
			weight: 54.2,
			waist: 66.4,
			hip: 47,
		},
	];

	const entryModal = useEntryModal();

	return (
		<motion.div className="flex flex-col w-[90%] mx-auto p-4 gap-0 text-white">
			<div className="flex flex-col">
				<motion.h1
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="text-7xl milky-walky opacity-0 text-white text-center w-fit mx-auto jura my-6 mb-0 relative"
				>
					Entry History
					<button
						onClick={() => entryModal.onOpen()}
						className="absolute top-[50%] translate-y-[-50%] right-[-5rem] centrion"
					>
						+
					</button>
				</motion.h1>
				{/* Options */}
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					className="flex space-x-2 gap-0"
				>
					<div className="m-6 flex gap-3 border-r-2 border-neutral-600 py-2 pr-8">
						Lbs
						<label htmlFor="weightToggle">
							<input
								id="weightToggle"
								type="checkbox"
								onChange={toggleWeightUnit}
								checked={metricKg}
							/>
						</label>
						Kgs
					</div>
					<div className="m-6 flex gap-3 border-r-2 border-neutral-600 py-2 pr-8">
						Inch
						<label htmlFor="lengthToggle">
							<input
								id="lengthToggle"
								type="checkbox"
								onChange={toggleLengthUnit}
								checked={metricCm}
							/>
						</label>
						Cm
					</div>
					<div className="m-6 flex gap-3 py-2 pl-6">
						Compact
						<label htmlFor="viewModeToggle">
							<input
								id="viewModeToggle"
								type="checkbox"
								onChange={toggleViewMode}
								checked={!compactView}
							/>
						</label>
						Comfortable
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.1 }}
				className={`bg-neutral-800/75 flex flex-col ${
					compactView ? "py-2" : "gap-0"
				}`}
			>
				{entries.map((entry, i) => (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
						className="opacity-0"
						key={i}
					>
						<Entry
							entry={entry}
							metricKg={metricKg}
							compactView={compactView}
							metricCm={metricCm}
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default MainGrid;
