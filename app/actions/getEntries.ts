import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getEntries() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return "Unauthorized";

		const entries = await prisma.entry.findMany({
			where: {
				userId: currentUser.id,
			},
		});
		return entries;
	} catch (err: any) {
		return null;
	}
}
