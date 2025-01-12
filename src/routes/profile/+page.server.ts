import { getUserFromRequest } from '$lib/utils/getKindeUser';
import { getGroups } from '$lib/server/db/groups';
import { createOrGetUser } from '$lib/server/db/user';
import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import { mightFail } from '@might/fail';
import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		request as unknown as SessionManager
	);
	if (isAuthenticated) {
		const [kindeUserError, kindeUserResult] = await mightFail(getUserFromRequest(request));
		if (kindeUserError) return console.error('Fail getting kinde user');

		const [userError, userResult] = await mightFail(
			createOrGetUser({
				email: kindeUserResult.email,
				kindeId: kindeUserResult.id,
				image: kindeUserResult.picture,
				name: `${kindeUserResult.given_name} ${kindeUserResult.family_name}`
			})
		);
		if (userError) return console.error('Fail getting/creating user');

		const [groupsError, groupsResult] = await mightFail(getGroups(userResult.id));
		if (groupsError) return console.error('Fail getting groups');

		return {
			isAuthenticated,
			user: userResult,
			groups: groupsResult
		};
	} else {
		return {
			isAuthenticated
		};
	}
}
