import type { Actions } from './$types';
import { prisma } from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
export const actions: Actions = {
	updateProfile: async (event) => {
		const { name, email } = Object.fromEntries(await event.request.formData()) as {
			name: string;
			email: string;
		};
		console.log(name, email);
		try {
			const session: any = await event.locals.getSession();
			await prisma.user.update({
				where: {
					email: session.user.email
				},
				data: { name, email }
			});
			redirect(303, '/profile');
		} catch (e) {
			console.log(e);
		}
	}
};
