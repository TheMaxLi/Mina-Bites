import { createGroup } from '$lib/server/db/groups.js';
import type { Restaurant } from '$lib/types.js';
import { mightFail } from '@might/fail';
import { json } from '@sveltejs/kit';

export async function POST({ request, url, cookies }) {
	const { groupId, restaurantData }: { groupId: string; restaurantData: Restaurant } =
		await request.json();
	const userId = cookies.get('userId');
	if (!userId) {
		return new Response('No user set in cookie', {
			status: 401
		});
	}
	console.log(restaurantData);
	// const [createGroupError, createGroupResult] = await mightFail(
	// 	createGroup(groupName, parseInt(userId))
	// );
	// if (createGroupError) {
	// 	return new Response(createGroupError.message, {
	// 		status: 500
	// 	});
	// }
	return json(restaurantData);
}
