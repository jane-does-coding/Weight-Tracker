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
		title: "What is BMI",
		description:
			"Body Mass Index (BMI) is a measure that uses your height and weight to evaluate whether you are underweight, normal weight, overweight, or obese.",
		detailedContent: {
			title: "Understanding Body Mass Index (BMI)",
			description:
				"Body Mass Index (BMI) is a widely-used tool to assess whether a person has a healthy body weight relative to their height. It's calculated by dividing a person's weight in kilograms by the square of their height in meters. While BMI is useful for screening weight categories associated with health risks, it doesn't directly measure body fat or health. It's best interpreted alongside other health assessments. Individuals with a high BMI may be at increased risk of certain health conditions like heart disease, diabetes, and some cancers. However, BMI doesn't account for factors such as muscle mass and distribution of fat. Therefore, it's important to consider other measurements and assessments of health when interpreting BMI results.",
		},
	},
	{
		title: "What is BMR",
		description:
			"Basal Metabolic Rate (BMR) is the amount of energy expended while at rest in a neutrally temperate environment.",
		detailedContent: {
			title: "Understanding Basal Metabolic Rate (BMR)",
			description:
				"Basal Metabolic Rate (BMR) is the amount of energy expended by the body at rest to maintain basic physiological functions such as breathing, circulation, and cell production. It's influenced by various factors including age, gender, weight, height, body composition, and genetics. Understanding your BMR can be helpful for designing personalized nutrition and fitness plans. While BMR is a significant component of total energy expenditure, it's important to consider other factors like physical activity level and thermic effect of food when determining daily calorie needs for weight management or performance goals. Calculating BMR provides a baseline for estimating caloric needs and creating a sustainable approach to health and fitness.",
		},
	},
	{
		title: "Calorie Needs",
		description:
			"Calorie needs refer to the amount of energy required by an individual to maintain their current body weight.",
		detailedContent: {
			title: "Determining Your Calorie Needs",
			description:
				"Calories are units of energy found in food and beverages that the body uses to carry out its functions. Determining your calorie needs involves understanding how many calories you need to consume to maintain your current weight, lose weight, or gain weight. Factors such as age, gender, weight, height, activity level, and metabolic rate influence calorie requirements. To maintain weight, calories consumed should match calories expended. To lose weight, a calorie deficit is needed, achieved through a combination of diet and physical activity. To gain weight, a calorie surplus is necessary. It's important to focus on nutrient-dense foods and prioritize overall health when adjusting calorie intake. Consulting with a healthcare provider or registered dietitian can provide personalized guidance for managing calorie needs and achieving health goals.",
		},
	},
	{
		title: "Healthy Body Fat",
		description:
			"Healthy body fat refers to the appropriate amount of fat tissue in the body that supports normal physiological functions.",
		detailedContent: {
			title: "The Importance of Healthy Body Fat Levels",
			description:
				"Body fat plays crucial roles in the body, including insulation, energy storage, hormone production, and protection of vital organs. However, excessive body fat, especially visceral fat (fat stored around internal organs), can increase the risk of various health conditions such as heart disease, type 2 diabetes, and certain cancers. On the other hand, insufficient body fat, as seen in very low body fat levels often associated with extreme dieting or certain medical conditions, can also lead to health problems, including hormonal imbalances, reproductive issues, and compromised immune function. Achieving and maintaining healthy body fat levels involves a balanced approach to nutrition, regular physical activity, and overall lifestyle habits. It's essential to focus on body composition rather than just body weight, aiming for a healthy ratio of lean muscle mass to body fat. Consulting with healthcare professionals and fitness experts can provide guidance for achieving and maintaining healthy body fat levels tailored to individual needs and goals.",
		},
	},
	{
		title: "Healthy Diet",
		description:
			"A healthy diet refers to eating patterns that promote overall health and well-being, providing essential nutrients while minimizing the consumption of unhealthy ingredients.",
		detailedContent: {
			title: "The Components of a Healthy Diet",
			description:
				"A healthy diet is fundamental to overall health and well-being, providing essential nutrients that support bodily functions, promote optimal growth and development, and reduce the risk of chronic diseases. The components of a healthy diet include a variety of nutrient-dense foods from all food groups. Fruits and vegetables are rich sources of vitamins, minerals, fiber, and antioxidants, essential for maintaining health and preventing diseases. Whole grains like brown rice, quinoa, and oats provide complex carbohydrates, fiber, and B vitamins. Lean proteins such as poultry, fish, tofu, and legumes supply amino acids necessary for muscle repair and growth. Healthy fats found in nuts, seeds, avocado, and olive oil support brain function, hormone production, and absorption of fat-soluble vitamins. Additionally, staying hydrated by drinking water throughout the day is essential for proper digestion, nutrient transport, and temperature regulation. A healthy diet is not only about individual nutrients but also about overall dietary patterns and lifestyle habits. It's important to focus on balance, moderation, and variety, while minimizing processed foods, sugary beverages, and excessive sodium intake. Consulting with a registered dietitian or nutritionist can provide personalized guidance for adopting and maintaining a healthy diet that suits individual preferences, needs, and goals.",
		},
	},
	{
		title: "Weight Loss",
		description:
			"Weight loss refers to the reduction of body weight, typically through a combination of dietary changes, increased physical activity, and behavior modifications.",
		detailedContent: {
			title: "Strategies for Successful Weight Loss",
			description:
				"Weight loss is a common goal for many individuals seeking to improve their health and well-being. While there's no one-size-fits-all approach to weight loss, adopting sustainable strategies can lead to long-term success. These strategies include setting realistic goals, making gradual changes to eating and exercise habits, tracking progress, and seeking support from healthcare professionals or support groups. A balanced diet that emphasizes whole, nutrient-dense foods, controls portion sizes, and limits processed foods and sugary beverages is key to weight loss. Incorporating regular physical activity, such as aerobic exercise, strength training, and flexibility exercises, helps burn calories, build muscle, and improve overall fitness. Additionally, prioritizing adequate sleep, managing stress levels, and cultivating healthy coping mechanisms contribute to successful weight management. It's important to approach weight loss with patience, perseverance, and a focus on overall health rather than quick fixes or fad diets. Consulting with a healthcare provider or registered dietitian can provide personalized guidance and support for developing a sustainable weight loss plan tailored to individual needs and preferences.",
		},
	},
];
