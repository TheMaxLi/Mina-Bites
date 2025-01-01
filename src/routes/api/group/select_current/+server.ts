import { setCurrentGroup } from '$lib/server/db/user.js';
import { mightFail } from '@might/fail';
import { json } from '@sveltejs/kit';

export async function PATCH({ request, url, cookies }) {
	const { groupId } = await request.json();
	const userId = cookies.get('userId');
	if (!userId) {
		return new Response('No user set in cookie', {
			status: 401
		});
	}
	const [setCurrentGroupError, setCurrentGroupResult] = await mightFail(
		setCurrentGroup(parseInt(userId), groupId)
	);
	if (setCurrentGroupError) {
		return new Response(setCurrentGroupError.message, {
			status: 500
		});
	}
	return json(setCurrentGroupResult);
}
