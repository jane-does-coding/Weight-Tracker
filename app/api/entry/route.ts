import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { weight, waist, hip } = body;

	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.json({ error: "no currentUser" });
	}

	// Get the current date without the time part
	const currentDate = new Date();
	currentDate.setUTCHours(0, 0, 0, 0);

	try {
		// Find an existing entry for the current user and date
		const existingEntry = await prisma.entry.findFirst({
			where: {
				userId: currentUser.id,
				date: currentDate,
			},
		});

		if (existingEntry) {
			// Delete the existing entry
			await prisma.entry.delete({
				where: {
					id: existingEntry.id,
				},
			});
		}

		// Create the new entry
		const newEntry = await prisma.entry.create({
			data: {
				userId: currentUser.id,
				weight,
				waist,
				hip,
				date: currentDate, // Save the current date with time set to 00:00:00
			},
		});

		console.log(newEntry);
		return NextResponse.json(newEntry);
	} catch (error) {
		console.error("Error creating entry:", error);
		return NextResponse.json({ error: "Error creating entry" });
	}
}
