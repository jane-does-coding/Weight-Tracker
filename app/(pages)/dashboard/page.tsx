import getEntries from "@/app/actions/getEntries";
import MainGrid from "@/app/components/WeightDisplay/MainGrid";
import React from "react";

const page = async () => {
	const entries = await getEntries();

	return (
		<div>
			<MainGrid entries={entries} />
		</div>
	);
};

export default page;
