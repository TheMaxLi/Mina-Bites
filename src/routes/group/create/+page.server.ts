import { mightFail } from '@might/fail';

export const actions = {
	default: async ({ fetch, request }) => {
		const data = await request.formData();
		const groupName = data.get('groupName');

		const [createGroupError, createGroupResult] = await mightFail(
			fetch('/api/group/create', { method: 'POST', body: JSON.stringify({ groupName }) })
		);

		if (createGroupError) {
			return { error: createGroupError, success: false };
		}
		const groupResult = await createGroupResult.json();
		// make default team
		return { data: groupResult, success: true };
	}
};
