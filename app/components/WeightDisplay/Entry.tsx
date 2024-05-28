import React from "react";

const Entry = ({
	entry,
	metricKg,
	metricCm,
	compactView,
	index,
}: {
	entry: any;
	metricKg: boolean;
	metricCm: boolean;
	compactView: boolean;
	index: number;
}) => {
	function getMonthAndDay(dateString: any) {
		// Convert the date string to a Date object
		const date = new Date(dateString);

		// Define an array of month names
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		// Get the month and day
		const month = monthNames[date.getUTCMonth()]; // getUTCMonth() returns 0-11
		const day = date.getUTCDate();

		// Return the formatted month and day
		return `${month} ${day}`;
	}

	const calculateWeight = () => {
		if (metricKg) {
			return `${entry.weight} kg`;
		} else {
			// Convert kg to lbs
			const weightInLbs = parseFloat(entry.weight) * 2.20462;
			return `${weightInLbs.toFixed(2)} lbs`;
		}
	};

	const calculateLength = (value: string) => {
		if (metricCm) {
			return `${value} cm`;
		} else {
			// Convert cm to inches
			const lengthInInches = parseFloat(value) / 2.54;
			return `${lengthInInches.toFixed(2)} in`;
		}
	};

	return (
		<div
			className={`${
				compactView ? "p-0 xl:p-[2px]" : "p-0 md:p-[5px] xl:p-[10px]"
			} transition flex gap-2 w-full border-neutral-600 border-b-[1.5px] text-white px-4`}
		>
			<div className="hidden md:flex items-center justify-center p-o md:p-2 md:px-2 lx:px-4 border-r-[0px]  border-neutral-600 rounded-none w-fit">
				Entry {index + 1}
			</div>
			<div className="flex items-center justify-center p-2 px-4 border-r-[0px]  border-neutral-600 rounded-none w-fit">
				{getMonthAndDay(entry.date)}
			</div>
			<div className="p-2 px-3 xl:px-4 font-light flex gap-3 items-center justify-center border-r-[0px]  border-neutral-600 rounded-none w-fit ml-auto">
				Weight:
				<span className="text-sm rounded-full p-2 px-3 xl:px-4 text-black font-bold bg-red-400">
					{calculateWeight()}
				</span>
			</div>
			<div className="hidden md:flex p-2 px-3 xl:px-4 font-light gap-3 items-center justify-center border-r-[0px]  border-neutral-600 rounded-none w-fit">
				Waist:
				<span className="text-sm rounded-full p-2 px-3 xl:px-4 text-black font-bold bg-amber-400">
					{calculateLength(entry.waist)}
				</span>
			</div>
			<div className="hidden md:flex p-2  font-light gap-3 items-center justify-center rounded-none w-fit">
				Hip:
				<span className="text-sm rounded-full p-2 px-3 xl:px-4 text-black font-bold bg-yellow-300">
					{calculateLength(entry.hip)}
				</span>
			</div>
		</div>
	);
};

export default Entry;
