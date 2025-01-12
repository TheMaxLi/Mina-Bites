import { getGroups, getRecommendedRestaurantsForGroup } from '$lib/server/db/groups';
import { createOrGetUser } from '$lib/server/db/user';
import { getUserFromRequest } from '$lib/utils/getKindeUser';
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

		if (!userResult.currentGroupId) {
			return {
				isAuthenticated,
				user: userResult,
				groups: groupsResult,
				breakfastRecs: [],
				lunchRecs: [],
				dinnerRecs: []
			};
		}

		const recs = await getRecommendedRestaurantsForGroup(userResult.currentGroupId);
		const breakfastRecs = recs.filter((r) => r.mealType === 'breakfast');
		const lunchRecs = recs.filter((r) => r.mealType === 'lunch');
		const dinnerRecs = recs.filter((r) => r.mealType === 'dinner');
		return {
			isAuthenticated,
			user: userResult,
			groups: groupsResult,
			breakfastRecs,
			lunchRecs,
			dinnerRecs
		};
	} else {
		return {
			isAuthenticated
		};
	}
}
