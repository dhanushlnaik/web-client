import type { LayoutServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
export const load: LayoutServerLoad = async (event) => {
	const Session = await event?.locals?.getSession();
	return {
		session: Session,
		user: Session
			? await prisma.user.findUnique({
					where: {
						email: Session?.user?.email
					}
				})
			: null,
		posts: await prisma.post.findMany()
	};
};
