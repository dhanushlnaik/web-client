import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/sveltekit/providers/google';
import type { Handle } from '@sveltejs/kit';
import { GOOGLE_AUTH_CLIENT_ID, GOOGLE_AUTH_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const handle = SvelteKitAuth(async (event) => {
	const authOptions = {
		providers: [
			Google({ clientId: GOOGLE_AUTH_CLIENT_ID, clientSecret: GOOGLE_AUTH_CLIENT_SECRET })
		],
		secret: AUTH_SECRET,
		trustHost: true,
		adapter: PrismaAdapter(prisma)
	};
	return authOptions;
}) satisfies Handle;
