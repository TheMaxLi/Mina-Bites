import { mightFail } from '@might/fail';

export const actions = {
	default: async ({ fetch, request }) => {
		const data = await request.formData();
		const groupName = data.get('groupName');

		const [createTeamError, createTeamResult] = await mightFail(
			fetch('/api/group/create', { method: 'POST', body: JSON.stringify({ groupName }) })
		);

		if (createTeamError) {
			return { error: createTeamError, success: false };
		}
		const teamResult = await createTeamResult.json();
		console.log(teamResult);
		return { data: teamResult, success: true };
	}
};
