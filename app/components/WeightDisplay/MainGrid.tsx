"use client";
import React, { useEffect, useState } from "react";
import Entry from "./Entry";
import useEntryModal from "@/app/hooks/useEntryModal";

const MainGrid = () => {
	// Initialize states for preferences and retrieve from local storage
	const [metricKg, setMetricKg] = useState(
		JSON.parse(localStorage.getItem("metricKg") || "") || false
	);
	const [metricCm, setMetricCm] = useState(
		JSON.parse(localStorage.getItem("metricCm") || "") || false
	);
	const [compactView, setCompactView] = useState(
		JSON.parse(localStorage.getItem("compactView") || "") || false
	);

	let entry = {
		num: 0,
		date: "Apr 4th",
		weight: 52, // kg by default
		waist: 50, // cm by default
		hip: 30, // cm by default
	};

	const entryModal = useEntryModal();

	const toggleWeightUnit = () => {
		setMetricKg((prevMetricKg: any) => !prevMetricKg);
	};

	const toggleLengthUnit = () => {
		setMetricCm((prevMetricCm: any) => !prevMetricCm);
	};

	const toggleViewMode = () => {
		setCompactView((prevCompactView: any) => !prevCompactView);
	};

	// Save preferences to local storage whenever they change
	useEffect(() => {
		localStorage.setItem("metricKg", JSON.stringify(metricKg));
	}, [metricKg]);

	useEffect(() => {
		localStorage.setItem("metricCm", JSON.stringify(metricCm));
	}, [metricCm]);

	useEffect(() => {
		localStorage.setItem("compactView", JSON.stringify(compactView));
	}, [compactView]);

	return (
		<div className="flex flex-col w-[90%] mx-auto p-4 gap-0 text-white">
			<div className="flex flex-col">
				<h1 className="text-7xl milky-walky text-white text-center w-fit mx-auto jura my-6 mb-0 relative">
					Entry History
					<button
						onClick={() => entryModal.onOpen()}
						className="absolute top-[50%] translate-y-[-50%] right-[-5rem] centrion"
					>
						+
					</button>
				</h1>
				<div className="flex space-x-2 gap-0">
					<div className="m-6 flex gap-3 border-r-2 border-neutral-600 py-2 pr-8">
						Lbs
						<label htmlFor="one">
							<input
								id="one"
								type="checkbox"
								onClick={toggleWeightUnit}
								checked={metricKg}
							/>
						</label>
						Kgs
					</div>
					<div className="m-6 flex gap-3 border-r-2 border-neutral-600 py-2 pr-8">
						Inch
						<label htmlFor="one">
							<input
								id="one"
								type="checkbox"
								onClick={toggleLengthUnit}
								checked={metricCm}
							/>
						</label>
						Cm
					</div>
					{/* View mode toggle */}
					<div className="m-6 flex gap-3  py-2 pl-6">
						Compact
						<label htmlFor="compactToggle">
							<input
								id="compactToggle"
								type="checkbox"
								onClick={toggleViewMode}
								checked={!compactView}
							/>
						</label>
						Comfortable
					</div>
				</div>
			</div>
			{/* Apply gap based on the view mode */}
			<div
				className={` bg-neutral-800/75 flex flex-col ${
					compactView ? " py-2" : "gap-0"
				}`}
			>
				<Entry
					entry={entry}
					metricKg={metricKg}
					compactView={compactView}
					metricCm={metricCm}
				/>
				<Entry
					entry={entry}
					metricKg={metricKg}
					compactView={compactView}
					metricCm={metricCm}
				/>
				<Entry
					entry={entry}
					metricKg={metricKg}
					compactView={compactView}
					metricCm={metricCm}
				/>
			</div>
		</div>
	);
};

export default MainGrid;
