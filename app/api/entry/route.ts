import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { userId, weight, waistSize, hipSize } = body;

	// Check if the user exists
	const user = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	});

	if (!user) {
		return NextResponse.json({ error: "no user" });
	}

	// Create the entry
	const entry = await prisma.entry.create({
		data: {
			userId: user?.id,
			weight,
			waistSize,
			hipSize,
		},
	});

	console.log(entry);
	return NextResponse.json(entry);
}
