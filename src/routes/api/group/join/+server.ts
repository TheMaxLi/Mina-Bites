import { joinGroup } from '$lib/server/db/groups.js';
import { mightFail } from '@might/fail';
import { json } from '@sveltejs/kit';

export async function POST({ request, url, cookies }) {
	const { inviteCode } = await request.json();
	const userId = cookies.get('userId');
	if (!userId) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}
	const [joinGroupError, joinGroupResult] = await mightFail(
		joinGroup(inviteCode, parseInt(userId))
	);
	if (joinGroupError) {
		return new Response(joinGroupError.message, {
			status: 500
		});
	}
	return json(joinGroupResult);
}
