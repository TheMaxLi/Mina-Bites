import type { PageServerLoad } from './$types';
import { getFavorites } from '$lib/server/db/favorites';

export const load: PageServerLoad = async ({ cookies }) => {
	const userId = cookies.get('userId');

	if (!userId) {
		return {
			favorites: []
		};
	}

	try {
		const userFavorites = await getFavorites(parseInt(userId));

		return {
			favorites: userFavorites
		};
	} catch (error) {
		console.error('Error loading favorites:', error);
		return {
			favorites: [],
			error: 'Failed to load favorites'
		};
	}
};
