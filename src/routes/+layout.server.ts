import { getUserFromRequest } from '$lib';
import { getGroups } from '$lib/server/db/groups';
import { createOrGetUser } from '$lib/server/db/user';
import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load({ request, cookies }: RequestEvent) {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		request as unknown as SessionManager
	);
	if (isAuthenticated) {
		const kindeUser = await getUserFromRequest(request);
		const user = await createOrGetUser({
			email: kindeUser.email,
			kindeId: kindeUser.id,
			image: kindeUser.picture,
			name: `${kindeUser.given_name} ${kindeUser.family_name ?? ''}`
		});
		cookies.set('userId', user.id.toString(), { path: '/' });
		// if needed for optimization, make a new function that only queries for groups and not groups + groupmembers
		const userGroups = await getGroups(user.id);
		const groups = userGroups.map((g) => g.groups);
		return {
			isAuthenticated,
			user,
			groups
		};
	} else {
		return {
			isAuthenticated
		};
	}
}
