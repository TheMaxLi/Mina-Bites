import { mightFail } from '@might/fail';

export const actions = {
	default: async ({ fetch, request }) => {
		console.log("wheere are we JOING")
		const data = await request.formData();
		const inviteCode = data.get('inviteCode');

		const [joinGroupError, joinGroupResult] = await mightFail(
			fetch('/api/group/join', { method: 'POST', body: JSON.stringify({ inviteCode }) })
		);

		if (joinGroupError) {
			return { error: joinGroupError, success: false };
		}
		const groupResult = await joinGroupResult.json();

		return { data: groupResult, success: true };
	}
};
