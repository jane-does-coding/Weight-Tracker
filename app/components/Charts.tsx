"use client";
import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { IoIosInformationCircleOutline } from "react-icons/io";

import {
	Chart as ChartJS,
	LineElement,
	BarElement,
	PointElement,
	LinearScale,
	Title,
	CategoryScale,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	LineElement,
	BarElement,
	PointElement,
	LinearScale,
	Title,
	CategoryScale,
	Tooltip,
	Legend
);

const Charts: React.FC<{
	entries: {
		id: string;
		date: string;
		weight: number;
		waist: number;
		hip: number;
		userId: string;
	}[];
}> = ({ entries }) => {
	const [useMetric, setUseMetric] = useState(true);
	const [chartType, setChartType] = useState("line");
	const [timePeriod, setTimePeriod] = useState("days");

	// Sort the entries by date
	const sortedEntries = [...entries].sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);

	// Filter out entries with missing data
	const filteredEntries = sortedEntries.filter(
		(entry) =>
			entry.weight !== null && entry.waist !== null && entry.hip !== null
	);

	// Helper functions for converting units
	const convertWeight = (weight: number) =>
		useMetric ? weight : weight * 2.20462;
	const convertWaist = (waist: number) => (useMetric ? waist : waist / 2.54);
	const convertHip = (hip: number) => (useMetric ? hip : hip / 2.54);

	const getDataByTimePeriod = (timePeriod: string) => {
		let labels = [];
		let weightData = [];
		let waistData = [];
		let hipData = [];

		if (timePeriod === "days") {
			const recentEntries = filteredEntries.slice(-7);
			labels = recentEntries.map((entry) =>
				new Date(entry.date).toLocaleDateString("en-US", {
					month: "short",
					day: "numeric",
					timeZone: "UTC",
				})
			);
			weightData = recentEntries.map((entry) => convertWeight(entry.weight));
			waistData = recentEntries.map((entry) => convertWaist(entry.waist));
			hipData = recentEntries.map((entry) => convertHip(entry.hip));
		} else if (timePeriod === "weeks") {
			for (let i = 0; i < 7; i++) {
				const start = new Date();
				start.setDate(start.getDate() - (i + 1) * 7);
				const end = new Date(start);
				end.setDate(end.getDate() + 7);

				const weekEntries = filteredEntries.filter(
					(entry) => new Date(entry.date) >= start && new Date(entry.date) < end
				);

				if (weekEntries.length > 0) {
					const avgWeight =
						weekEntries.reduce((sum, entry) => sum + entry.weight, 0) /
						weekEntries.length;
					const avgWaist =
						weekEntries.reduce((sum, entry) => sum + entry.waist, 0) /
						weekEntries.length;
					const avgHip =
						weekEntries.reduce((sum, entry) => sum + entry.hip, 0) /
						weekEntries.length;

					labels.unshift(
						`${start.toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
						})} - ${end.toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
						})}`
					);
					weightData.unshift(convertWeight(avgWeight));
					waistData.unshift(convertWaist(avgWaist));
					hipData.unshift(convertHip(avgHip));
				}
			}
		}

		return { labels, weightData, waistData, hipData };
	};

	const { labels, weightData, waistData, hipData } =
		getDataByTimePeriod(timePeriod);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "Weight",
				data: weightData,
				fill: false,
				borderColor: "#f87171",
				tension: 0.1,
				pointStyle: "circle",
				pointRadius: 7,
				pointHoverRadius: 15,
				backgroundColor: "#fca5a5",
			},
			{
				label: "Waist",
				data: waistData,
				fill: false,
				borderColor: "#fcd34d",
				tension: 0.1,
				pointStyle: "circle",
				pointRadius: 7,
				pointHoverRadius: 15,
				backgroundColor: "#fde68a",
			},
			{
				label: "Hip",
				data: hipData,
				fill: false,
				borderColor: "#ffedd5",
				tension: 0.1,
				pointStyle: "circle",
				pointRadius: 7,
				pointHoverRadius: 15,
				backgroundColor: "#ffedd5",
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				labels: {
					usePointStyle: true,
					pointStyle: "circle",
					padding: 20,
					font: {
						size: 18, // This is equivalent to 1.25rem
					},
				},
			},
		},
		scales: {
			x: {
				grid: {
					color: "#262626",
				},
			},
			y: {
				grid: {
					color: "#262626",
				},
			},
		},
	};

	return (
		<div className="bg-neutral-900 mt-0 p-[1rem] w-[85vw] px-[10vw] rounded-xl">
			<div className="flex justify-between items-center space-x-4 mb-4">
				<div className="flex text-neutral-400 gap-4">
					<IoIosInformationCircleOutline size={28} />
					<p className="text-neutral-400 text-xl">Click on the label to hide</p>
				</div>
				<div className="w-fit flex">
					<div className="m-6 flex gap-3 border-r-2 border-neutral-600 text-neutral-300 py-2 pr-8">
						Imperial
						<label htmlFor="weightToggle">
							<input
								id="weightToggle"
								type="checkbox"
								onChange={() => setUseMetric(!useMetric)}
								checked={useMetric}
							/>
						</label>
						Metric
					</div>
					<div className="m-6 flex gap-3 text-neutral-300 py-2 pr-8">
						Bar
						<label htmlFor="chartToggle">
							<input
								id="chartToggle"
								type="checkbox"
								onChange={() =>
									setChartType(chartType === "line" ? "bar" : "line")
								}
								checked={chartType === "line"}
							/>
						</label>
						Line
					</div>
				</div>
				<div className="m-6 flex gap-3 text-neutral-300 py-2 pr-8 items-center justify-center">
					<label htmlFor="timePeriod">Show by:</label>
					<select
						id="timePeriod"
						value={timePeriod}
						onChange={(e) => setTimePeriod(e.target.value)}
						className="bg-neutral-800 text-neutral-300 rounded-md px-3 py-1"
					>
						<option value="days">Days</option>
						<option value="weeks">Weeks</option>
					</select>
				</div>
			</div>
			{chartType === "line" ? (
				<Line data={data} className="w-[50vw]" options={options} />
			) : (
				<Bar data={data} className="w-[50vw]" options={options} />
			)}
		</div>
	);
};

export default Charts;
