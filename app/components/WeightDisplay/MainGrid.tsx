"use client";
import React, { useState } from "react";
import Entry from "./Entry";
import useEntryModal from "@/app/hooks/useEntryModal";
import { motion } from "framer-motion";

const MainGrid = ({ entries: userEntries }: any) => {
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
			{userEntries.length == 0 ? (
				<h1 className="text-5xl milky-walky text-center mx-auto my-4">
					No Entries
				</h1>
			) : (
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className={`bg-neutral-800/75 flex flex-col ${
						compactView ? "py-2" : "gap-0"
					}`}
				>
					{userEntries.map((entry: any, i: number) => (
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
			)}
		</motion.div>
	);
};

export default MainGrid;
