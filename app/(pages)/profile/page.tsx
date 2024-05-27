import getCurrentUser from "@/app/actions/getCurrentUser";
import getEntries from "@/app/actions/getEntries";
import Charts from "@/app/components/Charts";
import React from "react";
import { CiLock } from "react-icons/ci";

const page = async () => {
	const currentUser = await getCurrentUser();
	const entries: any = await getEntries();

	if (!currentUser) return "nuh";

	const lastEntry: any = entries[entries.length - 1];
	const userWeight = lastEntry ? lastEntry.weight : null;
	const gender = currentUser.gender;
	const height = currentUser.height;

	const heightInMeters = currentUser.height / 100;
	const age = new Date().getFullYear() - currentUser.birthYear;

	const bmi = calculateBMI(userWeight, heightInMeters);
	const bmiCategory = calculateBMICategory(bmi);
	const bmr = calculateBMR(userWeight, heightInMeters, age, gender);
	const bodyFat = calculateBodyFatPercentage(bmi, age, gender);
	const leanMass = calculateLeanBodyMass(userWeight, bodyFat);
	const idealWeightRange = calculateIdealWeightRange(height, gender);
	const calorieNeeds = calculateCaloricNeeds(bmr, "sedentary");

	return (
		<div className="bg-black min-h-screen flex flex-col justify-center items-center py-[5vh]">
			<div className="bg-neutral-900 rounded-lg shadow-lg p-10 w-[85vw] px-[7vw]">
				<h1 className="text-5xl font-bold text-neutral-100 mb-10 milky-walky">
					{currentUser.name}
				</h1>
				{entries && entries.length !== 0 ? (
					<div className="flex flex-col ">
						{/* Row 1 */}
						<div className="flex justify-evenly border-b border-neutral-700 pb-4 mb-4">
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">Weight:</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{userWeight} kg
								</p>
							</div>
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">Height:</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{currentUser.height} cm
								</p>
							</div>
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">Age:</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{age} years
								</p>
							</div>
						</div>
						{/* Row 2 */}
						<div className="flex justify-evenly  border-b border-neutral-700 pb-4 mb-4">
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">BMI:</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{bmi}
									<span className="font-light ml-4">({bmiCategory}</span>)
								</p>
								<p className="text-sm text-neutral-200"></p>
							</div>
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">BMR:</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{bmr}
								</p>
							</div>
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">Lean body mass:</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{leanMass} kg
								</p>
							</div>
						</div>
						{/* Row 3 */}
						<div className="flex justify-evenly ">
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">Calorie needs:</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{calorieNeeds}
								</p>
							</div>
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">Body Fat:</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{bodyFat}%
								</p>
							</div>
							<div className="flex flex-col items-start my-2 w-1/3 text-left">
								<p className="text-lg text-neutral-500 mb-2">
									Ideal weight range:
								</p>
								<p className="text-2xl font-bold text-neutral-200 milky-walky">
									{/* <span className="font-light">Min:</span>  */}
									{idealWeightRange.min} kg{" "}
									{/* &nbsp; &nbsp; <span className="font-light">Max:</span>{" "} */}{" "}
									- {idealWeightRange.max} kg
								</p>
							</div>
						</div>
					</div>
				) : (
					<h1 className="text-3xl milky-walky text-neutral-400">
						Not enough data, complete at least 1 entry to get more info
					</h1>
				)}
			</div>
			<div className="relative mt-4">
				{entries.length < 4 && (
					<div className="rounded-xl w-[95%] h-[95%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black/25 backdrop-blur-lg z-[2] absolute flex items-center justify-center">
						<div className="text-center -translate-y-4 flex flex-col items-center justify-center">
							<CiLock size={150} className="text-neutral-200" />
							<h1 className="text-white text-6xl mb-8 milky-walky">
								Not enough data
							</h1>
							<p className="text-neutral-400 text-2xl milky-walky max-w-[80%]">
								You need to have at least 3 entries to be able to see the charts
							</p>
						</div>
					</div>
				)}
				<Charts entries={entries} />
			</div>
		</div>
	);
};

// BMI
const calculateBMI = (weight: any, height: any) => {
	return Number((weight / (height * height)).toFixed(2));
};

// BMI category
const calculateBMICategory = (bmi: any) => {
	if (bmi < 18.5) {
		return "Underweight";
	} else if (bmi < 24.9) {
		return "Normal weight";
	} else if (bmi < 29.9) {
		return "Overweight";
	} else {
		return "Obese";
	}
};

// BMR
function calculateBMR(
	weight: number,
	height: number,
	age: number,
	gender: string
): number {
	let bmr: number;

	if (gender == "male") {
		bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
	} else {
		bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
	}

	return Number(bmr.toFixed(2));
}

// Body Fat
const calculateBodyFatPercentage = (
	bmi: number,
	age: number,
	gender: string
) => {
	// Constants for body fat percentage calculation
	const factor1 = gender === "male" ? 1.2 : 1.07;
	const factor2 = gender === "male" ? 16.2 : 5.4;

	return (bmi * factor1 + 0.23 * age - factor2).toFixed(2);
};

// Lean Body Mass
const calculateLeanBodyMass = (weight: number, bodyFatPercentage: any) => {
	return (weight - weight * (bodyFatPercentage / 100)).toFixed(2);
};

// Ideal Weight Range
const calculateIdealWeightRange = (height: number, gender: string) => {
	// Constants for ideal BMI range
	const minBMI = gender === "male" ? 20 : 19;
	const maxBMI = gender === "male" ? 25 : 24;

	const minHeightMeters = height / 100;
	const maxHeightMeters = height / 100;

	const minWeight = minBMI * (minHeightMeters * minHeightMeters);
	const maxWeight = maxBMI * (maxHeightMeters * maxHeightMeters);

	return { min: minWeight.toFixed(2), max: maxWeight.toFixed(2) };
};

// Calorie needs
const calculateCaloricNeeds = (bmr: number, activityLevel: any) => {
	// Activity level factors
	const activityFactors: any = {
		sedentary: 1.2,
		light: 1.375,
		moderate: 1.55,
		active: 1.725,
		veryActive: 1.9,
	};

	return (bmr * activityFactors[activityLevel]).toFixed(2);
};

export default page;
