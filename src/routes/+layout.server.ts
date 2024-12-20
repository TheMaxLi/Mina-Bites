import { getUserFromRequest } from '$lib';
import { createOrGetUser } from '$lib/server/db/user';
import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load({ request }: RequestEvent) {

	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		request as unknown as SessionManager
	);
	if (isAuthenticated) {
		const kindeUser = await getUserFromRequest(request);
		const user = await createOrGetUser({
			email: kindeUser.email,
			kindeId: kindeUser.id,
			image: kindeUser.picture,
			name: `${kindeUser.given_name} ${kindeUser.family_name}`
		});

		return {
			isAuthenticated,
			user
		};
	} else {
		return {
			isAuthenticated
		};
	}
}

