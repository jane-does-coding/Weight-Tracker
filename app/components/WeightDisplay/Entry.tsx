import React from "react";

const Entry = ({
	entry,
	metricKg,
	metricCm,
	compactView,
}: {
	entry: any;
	metricKg: boolean;
	metricCm: boolean;
	compactView: boolean;
}) => {
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
				compactView ? "p-0" : "p-[10px]"
			} transition flex gap-2 w-full border-neutral-600 border-b-[1.5px] text-white px-4`}
		>
			<div className="flex items-center justify-center p-2 px-4 border-r-[0px]  border-neutral-600 rounded-none w-fit">
				Entry {entry.num}
			</div>
			<div className="flex items-center justify-center p-2 px-4 border-r-[0px]  border-neutral-600 rounded-none w-fit">
				{entry.date}
			</div>
			<div className="p-2 px-4 font-light flex gap-3 items-center justify-center border-r-[0px]  border-neutral-600 rounded-none w-fit ml-auto">
				Weight:
				<span className="text-sm rounded-full p-2 px-4 text-black font-bold bg-red-400">
					{calculateWeight()}
				</span>
			</div>
			<div className="p-2 px-4 font-light flex gap-3 items-center justify-center border-r-[0px]  border-neutral-600 rounded-none w-fit">
				Waist:
				<span className="text-sm rounded-full p-2 px-4 text-black font-bold bg-amber-400">
					{calculateLength(entry.waist)}
				</span>
			</div>
			<div className="p-2  font-light flex gap-3 items-center justify-center rounded-none w-fit">
				Hip:
				<span className="text-sm rounded-full p-2 px-4 text-black font-bold bg-yellow-300">
					{calculateLength(entry.hip)}
				</span>
			</div>
		</div>
	);
};

export default Entry;
