export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const groupName = data.get('groupName');
		console.log(groupName);
	}
};
