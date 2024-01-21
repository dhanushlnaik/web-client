import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
export const load: PageServerLoad = async (event) => {
	const session: any = await event.locals.getSession();
	const posts = await prisma.post.findMany({
		where: {
			published: true,
			archived: false
		}
	});
	console.log(posts);
	return {
		props: {
			posts
		}
	};
};
