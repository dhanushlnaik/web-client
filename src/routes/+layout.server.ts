import type { LayoutServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';
export const load: LayoutServerLoad = async (event) => {
	const session: any = await event.locals.getSession();

	return {
		session: session,
		user: await prisma.user.findUnique({
			where: {
				email: session.user.email
			}
		})
	};
};
