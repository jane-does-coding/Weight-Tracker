import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	const { email, name, password, birthYear, gender, height } = body;

	const hashedPassword = await bcrypt.hash(password, 12);

	const user = await prisma.user.create({
		data: {
			email,
			name,
			birthYear: Number(birthYear),
			gender,
			height: Number(height),
			hashedPassword,
		},
	});

	return NextResponse.json(user);
}
