import { createGroup } from '$lib/server/db/groups.js';
import { mightFail } from '@might/fail';
import { json } from '@sveltejs/kit';

export async function POST({ request, url, cookies }) {
	const { groupName } = await request.json();
	const userId = cookies.get('userId');
	if (!userId) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}
	const [createGroupError, createGroupResult] = await mightFail(
		createGroup(groupName, parseInt(userId))
	);
	if (createGroupError) {
		return new Response(createGroupError.message, {
			status: 500
		});
	}
	return json(createGroupResult);
}
